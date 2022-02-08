import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { SanitizeUrlPipe } from '../pipes/sanitize-url.pipe';


@NgModule({
  declarations: [
    NavComponent,
    PlantillaComponent,SanitizeUrlPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent,
    PlantillaComponent,
    SanitizeUrlPipe
  ],
  providers: []

})
export class SharedModule { }
