import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule,MatButtonModule,MatIconModule],
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Admin';
}
