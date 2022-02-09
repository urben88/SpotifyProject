import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyModule } from './pages/spotify.module';
import { SpotifyService } from './services/spotify.service';
import { HttpClientModule } from '@angular/common/http';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { CardPipe } from './pipes/card.pipe';

// import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpotifyModule,
    HttpClientModule,
  ],
  providers: [SpotifyService,SanitizeUrlPipe,CardPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
