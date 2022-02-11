import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { ArtistaComponent } from './pages/artista/artista.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'home',component: HomeComponent},
  {path:'mostrar/:type/:id',component: MostrarComponent},
  {path:'artista/:id',component: ArtistaComponent},
  {path:'buscar',component: SearchComponent},
  {path: '**',  redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
