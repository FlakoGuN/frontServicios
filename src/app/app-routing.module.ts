import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CrearcontactComponent } from './crearcontact/crearcontact.component';
import { CrearsrvComponent } from './crearsrv/crearsrv.component';
import { LoginComponent } from './login/login.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { VercontactComponent } from './vercontact/vercontact.component';
import { CreareqpComponent } from './creareqp/creareqp.component';
import { VereqpComponent } from './vereqp/vereqp.component';
import { VerservComponent } from './verserv/verserv.component';
import { CrearservfinalComponent } from './crearservfinal/crearservfinal.component';
import { MostrarservComponent } from './mostrarserv/mostrarserv.component';

const routes: Routes = [  
    
  {path: 'crearcliente',  component: CrearsrvComponent},
  {path: 'empresas', component: ServiciosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: CrearcontactComponent},
  {path: 'vercontacto', component: VercontactComponent},
  {path: 'crearequipo', component: CreareqpComponent},
  {path: 'verequipo', component: VereqpComponent},
  {path: 'verservicio', component: VerservComponent},
 {path: 'crearservicio', component: CrearservfinalComponent},
 {path: 'mostrarservicio/:id', component: MostrarservComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
