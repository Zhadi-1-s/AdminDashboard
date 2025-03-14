import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'', redirectTo:'login',pathMatch:'full'},
    {path:'register',component:RegisterComponent}
];
