import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = '';

  private tokenKey = '';

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private http:HttpClient) { }

  login(credentials:{email:string; password:string}):Observable<{access_token:string}>{
    return this.http.post<{access_token:string}>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        localStorage.setItem(this.tokenKey, response.access_token);
        this.isAuthenticatedSubject.next(true);
      })
    )
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
}
