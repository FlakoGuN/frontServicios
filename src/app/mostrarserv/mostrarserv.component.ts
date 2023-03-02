import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/modelos/Servicio';
import { SrvclienteService } from '../srvcliente.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-mostrarserv',
  templateUrl: './mostrarserv.component.html',
  styleUrls: ['./mostrarserv.component.css']
})
export class MostrarservComponent implements OnInit {

  constructor( private activeRouter: ActivatedRoute, private router:Router, private serv: SrvclienteService) { }

  servicio: Servicio = {
    id: 0,
    name_serv: '',
    fecha: new Date(),
    descripcion: '',
    recomendaciones: '',
    partes: '',
    horas_serv: '',
    equipo_id: {
      id: 0, 
      equipo: '',
      modelo: '',
      serial: '',
      contador: 0,
      cliente_id: {
        id: 0,
        empresa: '',
        rut: '',
        direccion: '',
        contacto: []
        }
       }
    };
  ngOnInit() {
    let id = this.activeRouter.snapshot.params['id'];
    console.log(id);
    this.serv.verServicio(id).subscribe(
      (data) => {
        console.log(data);
        this.servicio = data;
      }
    )
  }


imprimir(){
    window.print();
  
  
}

}


