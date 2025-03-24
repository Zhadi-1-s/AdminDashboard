import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { error } from 'console';


@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  userName:string = 'Testing';


  ngOnInit(): void {
      this.authService.getuserProfile().subscribe(
        data => {
          console.log(data)
          // this.user = data;
        },
        error => 
          console.error('Error fetching profile', error)
      )
  }

  constructor(private authService:AuthService){}



}
