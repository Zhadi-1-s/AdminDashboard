import { Component, importProvidersFrom } from '@angular/core';

import { JwtModule } from "@auth0/angular-jwt";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
