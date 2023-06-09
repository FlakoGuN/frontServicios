import { Component, OnInit } from '@angular/core';
import { SrvclienteService } from '../srvcliente.service';
import { Servicio } from 'src/modelos/Servicio';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VercontactComponent } from '../vercontact/vercontact.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crearservfinal',
  templateUrl: './crearservfinal.component.html',
  styleUrls: ['./crearservfinal.component.css']
})
export class CrearservfinalComponent implements OnInit {
  clientes = this.srv.getClientes();
  contactos = this.srv.getContactos();
  equipos = this.srv.getEquipos();
  servicios = this.srv.getServicios();
  formValues!: FormGroup;
  servicioModelObject: Servicio = new Servicio();

  constructor(private srv:SrvclienteService, private router:Router, private fB:FormBuilder, private verid:VercontactComponent) { }
  ngOnInit(): void {
    this.contactos = this.srv.getContactos();
    this.clientes = this.srv.getClientes(); 
    this.equipos = this.srv.getEquipos();
    this.servicios = this.srv.getServicios();

    console.log(this.equipos);
    this.formValues = this.fB.group({
      name_serv: new FormControl ('',[Validators.required, Validators.minLength(5)]), 
      fecha: new FormControl ('',[Validators.required, Validators.minLength(3)]), 
      descripcion: new FormControl ('',[Validators.required, Validators.minLength(10)]), 
      recomendaciones: new FormControl ('',[Validators.required, Validators.minLength(10)]), 
      partes: new FormControl ('',[Validators.required, Validators.minLength(2)]), 
      horas_serv: new FormControl ('',[Validators.required, Validators.minLength(1)]), 
      equipos: 0,
      contactoid: []
    });
  }
  
postServicioDetail(){
  this.servicioModelObject.name_serv = this.formValues.value.name_serv;
  this.servicioModelObject.fecha = this.formValues.value.fecha;
  this.servicioModelObject.descripcion = this.formValues.value.descripcion;
  this.servicioModelObject.recomendaciones = this.formValues.value.recomendaciones;
  this.servicioModelObject.partes = this.formValues.value.partes;
  this.servicioModelObject.horas_serv = this.formValues.value.horas_serv;
  this.servicioModelObject.equipo_id.id = this.formValues.value.equipos;
  this.servicioModelObject.equipo_id.cliente_id.contacto[0] = this.formValues.value.contactoid;
 if(this.formValues.valid){
  this.srv.crearServicios(this.servicioModelObject).subscribe(
    data => {
      console.log(data);
      Swal.fire({
        title: 'Servicio Creado',
        text: 'Continuar',
        icon: 'success',
      })
      this.router.navigate(["verservicio"]);
    }
  );}else{
    Swal.fire({
      title: 'Error',
      text: 'Verifique los datos',
      icon: 'error',
    })
  }
}
onSelect(id:any):void{
  this.formValues.value.equipos = id;
  console.log(id); 
}

}

