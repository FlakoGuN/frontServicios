import { Component } from '@angular/core';
import { SrvclienteService } from '../srvcliente.service';
import { Cliente } from 'src/modelos/Cliente';
import { Router } from '@angular/router';



@Component({
  selector: 'app-crearsrv',
  templateUrl: './crearsrv.component.html',
  styleUrls: ['./crearsrv.component.css']
})

export class CrearsrvComponent {
  
  constructor(private srv:SrvclienteService, private router:Router) { }

  
  onSubmit(values: any): void{
    console.log('Formulario enviado', values.value);
    this.srv.crearCliente(values.value).subscribe(data=>{
      console.log(data);
      alert("Cliente creado");
      this.router.navigate(["servicios"]);

    });
  }
  
hola(){
  alert("hola");
  this.router.navigate(["vercontacto"]);
  }
}

