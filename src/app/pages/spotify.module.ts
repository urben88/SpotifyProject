import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SpotifyService } from '../services/spotify.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';
import { MostrarComponent } from './mostrar/mostrar.component';
import { CardPipe } from '../pipes/card.pipe';




@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    InicioComponent,
    MostrarComponent,
    CardPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    MostrarComponent
  ],
  providers:[
    SpotifyService,
    SanitizeUrlPipe,
    CardPipe
  ]

})
export class SpotifyModule { }
