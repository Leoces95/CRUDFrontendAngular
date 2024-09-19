import { Routes } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { InsertarComponent } from './insertar/insertar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [ 
    {path: '', component:HomeComponent},
    {path: 'consultar' , component:ConsultarComponent},
    {path: 'actualizar' , component:ActualizarComponent},
    {path: 'insertar' , component:InsertarComponent},
    {path: 'eliminar' , component:EliminarComponent}
];
