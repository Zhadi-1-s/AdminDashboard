import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfileComponent}
];
