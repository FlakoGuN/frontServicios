import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contacto } from 'src/modelos/Contacto';
import { SrvclienteService } from '../srvcliente.service';

@Component({
  selector: 'app-vercontact',
  templateUrl: './vercontact.component.html',
  styleUrls: ['./vercontact.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class VercontactComponent implements OnInit {


 
  contacto:Contacto[] = [];
  id: any;
  constructor (private service:SrvclienteService, private router: Router) { }
  
 ngOnInit(){
  
  this.service.getContactos().subscribe(data=>{
    this.contacto=data;
    console.log(data);
    })
 }
crearContact(id:number){
  
console.log(id);
   let idCliente = id;
  this.router.navigate(["contacto"]);
  return idCliente;
}


}