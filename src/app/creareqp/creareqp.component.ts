import { Component, OnInit } from '@angular/core';
import { SrvclienteService } from '../srvcliente.service';
import { Equipo } from 'src/modelos/Equipo';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VercontactComponent } from '../vercontact/vercontact.component';
import Swal from 'sweetalert2';



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
      equipo: new FormControl ('',[Validators.required, Validators.minLength(3)]), 
      modelo: new FormControl ('',[Validators.required, Validators.minLength(3)]), 
      serial: new FormControl ('',[Validators.required, Validators.minLength(5)]), 
      contador: new FormControl ('',[Validators.required, Validators.minLength(1)]), 
      clientes: 0
     
    });
  }

  postEquipoDetail(){
    this.equipoModelObject.equipo = this.formValues.value.equipo;
    this.equipoModelObject.modelo = this.formValues.value.modelo;
    this.equipoModelObject.serial = this.formValues.value.serial;
    this.equipoModelObject.contador = this.formValues.value.contador;
    this.equipoModelObject.cliente_id.id = this.formValues.value.clientes;
    if(this.formValues.valid){ 
    this.srv.crearEquipos(this.equipoModelObject).subscribe(
      data => {
        console.log(data);
        Swal.fire({
          title: 'Equipo Creado',
          text: 'Continuar',
          icon: 'success',
        })
        
        
        this.router.navigate(["verequipo"]);
      }
    );}else{
      Swal.fire({
        title: 'Error',
        text: 'Verifique los campos',
        icon: 'error',
      })
    }
}

verEqp(){
  this.router.navigate(["verequipo"]);
}

  onSelect(id:any):void{
    this.formValues.value.clientes = id;
    console.log(id); 
  }
}


