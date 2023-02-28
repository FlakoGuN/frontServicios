import { Component } from '@angular/core';
import { SrvclienteService } from 'src/app/srvcliente.service';
import { Router } from '@angular/router';
import { Equipo } from 'src/modelos/Equipo';
import {  OnInit } from '@angular/core';

@Component({
  selector: 'app-vereqp',
  templateUrl: './vereqp.component.html',
  styleUrls: ['./vereqp.component.css']
})
export class VereqpComponent  implements OnInit {
  equipo:Equipo[] = [];
  constructor (private service:SrvclienteService, private router: Router) { }
  
 ngOnInit(){
  
  this.service.getEquipos().subscribe(data=>{
    this.equipo=data;
    })
 }
 crearServ(id:any){
  let idCliente = id;
  this.router.navigate(["contacto"]);
  return idCliente;
}

} 


