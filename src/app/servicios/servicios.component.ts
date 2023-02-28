import { Component, Injectable } from '@angular/core';
import { SrvclienteService } from 'src/app/srvcliente.service';
import { Router } from '@angular/router';
import { Cliente } from 'src/modelos/Cliente';
import {  OnInit } from '@angular/core';



@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ServiciosComponent implements OnInit {

 
  cliente:Cliente[] = [];
  constructor (private service:SrvclienteService, private router: Router) { }
  
 ngOnInit(){
  
  this.service.getClientes().subscribe(data=>{
    this.cliente=data;
    
    })
 }
crearContact(id:any){
  let idCliente = id;
  this.router.navigate(["contacto"]);
  return idCliente;
}


}
