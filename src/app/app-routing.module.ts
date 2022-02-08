import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PlantillaComponent } from './shared/plantilla/plantilla.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'plantilla',component: PlantillaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
