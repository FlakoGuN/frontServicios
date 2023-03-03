import { Component, OnInit } from '@angular/core';
import { SrvclienteService } from '../srvcliente.service';
import { Cliente } from 'src/modelos/Cliente';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-crearsrv',
  templateUrl: './crearsrv.component.html',
  styleUrls: ['./crearsrv.component.css']
})

export class CrearsrvComponent implements OnInit {

  rutValido = "^[0-9]+[-|‐]{1}[0-9kK]{1}$";
  clientes = this.srv.getClientes();
  contactos = this.srv.getContactos();
  equipos = this.srv.getEquipos();
  formValues!: FormGroup;
  clienteModelObject: Cliente = new Cliente();
  
  constructor(private srv:SrvclienteService, private router:Router,private fB:FormBuilder) { }

  ngOnInit(): void {
   
    this.clientes = this.srv.getClientes(); 
    this.formValues = this.fB.group({
      empresa: new FormControl ('',[Validators.required, Validators.minLength(3)]),  
      rut: new FormControl ('',[Validators.required, Validators.minLength(8), Validators.pattern(this.rutValido)]),  
      direccion: new FormControl ('',[Validators.required, Validators.minLength(8)]), 
     
     
    });
  }

  postClienteDetail(){
    this.clienteModelObject.empresa = this.formValues.value.empresa;
    this.clienteModelObject.rut = this.formValues.value.rut;
    this.clienteModelObject.direccion = this.formValues.value.direccion;
   
    if (this.formValues.valid){
    this.srv.crearCliente(this.clienteModelObject).subscribe(
      data => {
        
        Swal.fire({
          title: 'Cliente Creado',
          text: 'Continuar',
          icon: 'success',
        })
        this.router.navigate(["empresas"]);
      }
    );
    
    }else{
      Swal.fire({
        title: 'Error',
        text: 'Campos vacios',
        icon: 'error',
      })
    }
}

  onSubmit(values: any): void{
    console.log('Formulario enviado', values.value);
    this.srv.crearCliente(values.value).subscribe(data=>{
      Swal.fire({
        title: 'Cliente creado',
        text: 'Continuar',
        icon: 'success',
      })
      this.router.navigate(["servicios"]);

    });
  }
  
hola(){
  alert("hola");
  this.router.navigate(["vercontacto"]);
  }
}

