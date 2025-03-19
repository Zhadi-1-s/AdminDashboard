import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = ' http://127.0.0.1:8000/api';

  private tokenKey = 'access_token';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http:HttpClient, private router:Router) { }

  login(credentials: { username: string; password: string }): Observable<{ access: string; refresh: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<{ access: string; refresh: string }>(`${this.apiUrl}/auth/login/`, credentials, { headers }).pipe(
      tap(response => {
        

        localStorage.setItem(this.tokenKey, response.access);
        this.isAuthenticatedSubject.next(true);
        this.getuserProfile().subscribe(user => {
          localStorage.setItem('user',JSON.stringify(user));
          this.router.navigate(['/profile'])
        })
      })
    );
  }
  register(userData:{username:string, email:String, password:string}):Observable<{access:string}>{
    return this.http.post<{access:string}>(`${this.apiUrl}/auth/register/`,userData).pipe(
      tap(response => {
        this.saveToken(response.access)
      })
    )
  }
  
  private saveToken(token:string):void{
    localStorage.setItem(this.tokenKey, token);
    this.isAuthenticatedSubject.next(true);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuthenticatedSubject.next(false);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return this.hasToken();
  }

  private hasToken(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getuserProfile():Observable<any>{
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${this.getToken()}`,
      'Content-type':'application/json'
    });
    return this.http.get(`${this.apiUrl}/auth/profile`,{headers});
  }
}
