import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';


import { JwtModule } from "@auth0/angular-jwt";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),
    importProvidersFrom(
        JwtModule.forRoot({
          config:{
            tokenGetter:tokenGetter,
            allowedDomains:[""],
            disallowedRoutes:[""],
          }
        })
    ),
    provideHttpClient(
      withInterceptorsFromDi()
    )
  ]
};
