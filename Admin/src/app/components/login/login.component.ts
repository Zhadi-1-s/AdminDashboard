import { Component, importProvidersFrom } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

import { FormsModule } from "@angular/forms";
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@Component({
  selector: 'app-login',
  standalone:true,
  imports: [MatCardModule,MatFormFieldModule,CommonModule,ReactiveFormsModule,MatIconModule,MatButtonModule,MatInputModule,FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email:string = '';
  password = '';




}
