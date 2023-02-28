import { Component } from '@angular/core';
import { SrvclienteService } from 'src/app/srvcliente.service';
import { Router } from '@angular/router';
import { Equipo } from 'src/modelos/Equipo';
import {  OnInit } from '@angular/core';
import { Servicio } from 'src/modelos/Servicio';
import { Cliente } from 'src/modelos/Cliente';
import { Contacto } from 'src/modelos/Contacto';
@Component({
  selector: 'app-verserv',
  templateUrl: './verserv.component.html',
  styleUrls: ['./verserv.component.css']
})
export class VerservComponent implements OnInit{
  equipo:Equipo[] = [];
  servicio:Servicio[] = [];
  cliente:Cliente[] = [];
  contacto:Contacto[] = [];
  constructor (private service:SrvclienteService, private router: Router) { }
  
 ngOnInit(){
 this.service.getServicios().subscribe(data=>{
    this.servicio=data;
    }
  )
  this.service.getEquipos().subscribe(data=>{
    this.equipo=data;
    }
  )
  this.service.getClientes().subscribe(data=>{
    this.cliente=data;
    }
  )
  this.service.getContactos().subscribe(data=>{
    this.contacto=data;
    }
  )

 }

 verid(id:number){
  this.router.navigate(['mostrarservicio',id]);

 }
}
