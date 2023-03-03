import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SrvclienteService } from '../srvcliente.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contacto } from 'src/modelos/Contacto';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-crearcontact',
  templateUrl: './crearcontact.component.html',
  styleUrls: ['./crearcontact.component.css']
})
export class CrearcontactComponent implements OnInit {
validPhone = "^[0-9]*$";
mailValido = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";  
clientes = this.srv.getClientes();
contactos = this.srv.getContactos();


formValues!: FormGroup;


contactModelObject: Contacto = new Contacto();

  constructor(private srv:SrvclienteService, private router:Router, private fB:FormBuilder) { }
  
  
  ngOnInit(): void {
    this.contactos = this.srv.getContactos();
    this.clientes = this.srv.getClientes(); 
    this.formValues = this.fB.group({
      nombre:  new FormControl ('',[Validators.required, Validators.minLength(3)]), 
      apellido: new FormControl ('',[Validators.required, Validators.minLength(3)]), 
      telefono: new FormControl ('',[Validators.required, Validators.minLength(3),  Validators.pattern(this.validPhone)]), 
      correo:new FormControl ('',[Validators.required, Validators.minLength(3), Validators.pattern(this.mailValido)]), 
      empresas: 0
    });
    }

    postContactDetail(){
   this.contactModelObject.nombre = this.formValues.value.nombre;
    this.contactModelObject.apellido = this.formValues.value.apellido;
    this.contactModelObject.telefono = this.formValues.value.telefono;
    this.contactModelObject.correo = this.formValues.value.correo;
    this.contactModelObject.cliente_id.id = this.formValues.value.empresas;
   if(this.formValues.valid){
    this.srv.crearContactos(this.contactModelObject).subscribe(
      data => {
        
        console.log(data);
        Swal.fire({
          title: 'Contacto creado',
          text: 'Continuar',
          icon: 'success',
          
        })
        this.router.navigate(["vercontacto"]);
      }
    );
    }
    else{ 
      Swal.fire({
        title: 'Error',
        text: 'Campos vacios',
        icon: 'error',
      })
    }
  }
  onSelect(id:any):void{
    this.formValues.value.empresas = id;
    console.log(id); 
  }

  get name(){
    return this.formValues.get('name');
  }
}
