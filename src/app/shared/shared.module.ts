import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { PlantillaComponent } from './plantilla/plantilla.component';



@NgModule({
  declarations: [
    NavComponent,
    PlantillaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavComponent
  ],
  providers: []

})
export class SharedModule { }
