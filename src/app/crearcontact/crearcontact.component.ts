import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SrvclienteService } from '../srvcliente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Contacto } from 'src/modelos/Contacto';

@Component({
  selector: 'app-crearcontact',
  templateUrl: './crearcontact.component.html',
  styleUrls: ['./crearcontact.component.css']
})
export class CrearcontactComponent implements OnInit {
clientes = this.srv.getClientes();
contactos = this.srv.getContactos();


formValues!: FormGroup;


contactModelObject: Contacto = new Contacto();

  constructor(private srv:SrvclienteService, private router:Router, private fB:FormBuilder) { }
  
  
  ngOnInit(): void {
    this.contactos = this.srv.getContactos();
    this.clientes = this.srv.getClientes(); 
    this.formValues = this.fB.group({
      nombre: [''],
      apellido: [''],
      telefono: [''],
      correo: [''],
      empresas: 0
    });
    }

    postContactDetail(){
   this.contactModelObject.nombre = this.formValues.value.nombre;
    this.contactModelObject.apellido = this.formValues.value.apellido;
    this.contactModelObject.telefono = this.formValues.value.telefono;
    this.contactModelObject.correo = this.formValues.value.correo;
    this.contactModelObject.cliente_id.id = this.formValues.value.empresas;
    this.srv.crearContactos(this.contactModelObject).subscribe(
      data => {
        console.log(data);
        alert("Contacto creado");
        this.router.navigate(["vercontacto"]);
      }
    );

    }
  onSelect(id:any):void{
    this.formValues.value.empresas = id;
    console.log(id); 
  }

   show() {
    this.router.navigate(["vercontacto"]);
   }

 
}
