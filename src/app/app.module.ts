import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyModule } from './pages/spotify.module';
import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpotifyModule,
    HttpClientModule
    
  ],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
