import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';
import { CardComponent } from './card/card.component';
import { CardPipe } from '../pipes/card.pipe';


@NgModule({
  declarations: [
    NavComponent,
    PlantillaComponent,SanitizeUrlPipe,CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    PlantillaComponent,
    SanitizeUrlPipe,
    CardComponent
  ],
  providers: []

})
export class SharedModule { }
