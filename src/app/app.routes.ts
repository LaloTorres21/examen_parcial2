import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';

export const routes: Routes = [

  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, 
  { path: 'inicio', component: InicioComponent },         
  { path: 'productos', component: ListadoProductosComponent }
];
