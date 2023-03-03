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
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { canActivate, redirectUnauthorizedTo  } from '@angular/fire/auth-guard';

const routes: Routes = [  
    
  
  {path: 'home',  component: AppComponent, },
  {path: 'crearcliente',  component: CrearsrvComponent, ...canActivate(()=>redirectUnauthorizedTo(['login']))},
  {path: 'empresas', component: ServiciosComponent, ...canActivate(()=>redirectUnauthorizedTo(['login']))},
  {path: 'user', component: UserComponent, },
  {path: 'login', component: LoginComponent, },
  {path: 'contacto', component: CrearcontactComponent, ...canActivate(()=>redirectUnauthorizedTo(['login']))},
  {path: 'vercontacto', component: VercontactComponent, ...canActivate(()=>redirectUnauthorizedTo(['login']))},
  {path: 'crearequipo', component: CreareqpComponent, ...canActivate(()=>redirectUnauthorizedTo(['login']))},
  {path: 'verequipo', component: VereqpComponent, ...canActivate(()=>redirectUnauthorizedTo(['login'])) },
  {path: 'verservicio', component: VerservComponent, ...canActivate(()=>redirectUnauthorizedTo(['login']))},
 {path: 'crearservicio', component: CrearservfinalComponent, ...canActivate(()=>redirectUnauthorizedTo(['login']))},
 {path: 'mostrarservicio/:id', component: MostrarservComponent, ...canActivate(()=>redirectUnauthorizedTo(['login']))},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
