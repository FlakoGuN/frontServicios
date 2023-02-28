import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ServiciosComponent } from './servicios/servicios.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CrearsrvComponent } from './crearsrv/crearsrv.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SrvclienteService } from './srvcliente.service';
import { ObToarrPipe } from './servicios/obToarr.pipe';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CrearcontactComponent } from './crearcontact/crearcontact.component';
import { VercontactComponent } from './vercontact/vercontact.component';
import { CreareqpComponent } from './creareqp/creareqp.component';
import { VereqpComponent } from './vereqp/vereqp.component';
import { VerservComponent } from './verserv/verserv.component';
import { CrearservfinalComponent } from './crearservfinal/crearservfinal.component';
import { MostrarservComponent } from './mostrarserv/mostrarserv.component';



@NgModule({
  declarations: [
    AppComponent,
    ServiciosComponent,
    CrearsrvComponent,
    ObToarrPipe,
    LoginComponent,
    CrearcontactComponent,
    VercontactComponent,
    CreareqpComponent,
    VereqpComponent,
    VerservComponent,
    CrearservfinalComponent,
    MostrarservComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [SrvclienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
