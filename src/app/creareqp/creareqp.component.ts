import { Component, OnInit } from '@angular/core';
import { SrvclienteService } from '../srvcliente.service';
import { Equipo } from 'src/modelos/Equipo';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VercontactComponent } from '../vercontact/vercontact.component';



@Component({
  selector: 'app-creareqp',
  templateUrl: './creareqp.component.html',
  styleUrls: ['./creareqp.component.css']
})
export class CreareqpComponent implements OnInit {
  clientes = this.srv.getClientes();
  contactos = this.srv.getContactos();
  equipos = this.srv.getEquipos();
  formValues!: FormGroup;
  equipoModelObject: Equipo = new Equipo();

  constructor(private srv:SrvclienteService, private router:Router, private fB:FormBuilder, private verid:VercontactComponent) { }

  ngOnInit(): void {
    this.contactos = this.srv.getContactos();
    this.clientes = this.srv.getClientes(); 
    this.equipos = this.srv.getEquipos();
    console.log(this.equipos);
    this.formValues = this.fB.group({
      equipo: [''], 
      modelo: [''],
      serial: [''],
      contador: [''],
      clientes: 0
     
    });
  }

  postEquipoDetail(){
    this.equipoModelObject.equipo = this.formValues.value.equipo;
    this.equipoModelObject.modelo = this.formValues.value.modelo;
    this.equipoModelObject.serial = this.formValues.value.serial;
    this.equipoModelObject.contador = this.formValues.value.contador;
    this.equipoModelObject.cliente_id.id = this.formValues.value.clientes;
  
    this.srv.crearEquipos(this.equipoModelObject).subscribe(
      data => {
        console.log(data);
        console.log(this.verid.id)
        alert("Equipo creado");
        this.router.navigate(["verequipo"]);
      }
    );
}

verEqp(){
  this.router.navigate(["verequipo"]);
}

  onSelect(id:any):void{
    this.formValues.value.clientes = id;
    console.log(id); 
  }
}


