import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SpotifyService } from '../services/spotify.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    LoginComponent,
    HomeComponent
  ],
  providers:[
    SpotifyService
  ]

})
export class SpotifyModule { }
