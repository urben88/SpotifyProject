import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';
import { CardComponent } from './card/card.component';
import { CardPipe } from '../pipes/card.pipe';
import { PlantillaArtistaComponent } from './plantilla-artista/plantilla-artista.component';



@NgModule({
  declarations: [
    NavComponent,
    PlantillaComponent,SanitizeUrlPipe,CardComponent, PlantillaArtistaComponent,
    CardPipe

  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    PlantillaComponent,
    SanitizeUrlPipe,
    CardComponent,
    PlantillaArtistaComponent,
    CardPipe
  ],
  providers: []

})
export class SharedModule { }
