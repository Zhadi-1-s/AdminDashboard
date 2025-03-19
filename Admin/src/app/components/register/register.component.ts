import { Component } from '@angular/core';

import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone:true,
  imports: [MatCardModule,MatFormFieldModule,CommonModule,ReactiveFormsModule,MatIconModule,MatButtonModule,MatInputModule,FormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userName = '';
  email = '';
  password = '';

  constructor(private authService:AuthService){};

  onRegister(){
    const userData = {
      username:this.userName,
      email : this.email,
      password:this.password,
    }

    this.authService.register(userData).subscribe({
      next:(response) => {
        console.log('User registered succesfully');

      },
      error:(err) =>{
        console.log('Registraion failed', err);
      }
    })

  }

}
