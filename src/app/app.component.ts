import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(private router: Router) {

  }

  empresas(){
    this.router.navigate(['empresas']);

  }
  crear(){
    this.router.navigate(['crearcliente']);
  }
  contacto(){
    this.router.navigate(['contacto']);
  }
  vercontacto(){
    this.router.navigate(['vercontacto']);
  }
  crearequipo(){
    this.router.navigate(['crearequipo']);
  }
  verequipo(){
    this.router.navigate(['verequipo']);
  }
  login(){
    this.router.navigate(['login']);
  }

  verservicio(){
    this.router.navigate(['verservicio']);
  }
  crearservicios(){
    this.router.navigate(['crearservicio']);
  }
}
