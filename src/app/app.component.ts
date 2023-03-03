import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';
  constructor(private router: Router, private usrsvc: UserService) { }

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

  user(){
    this.router.navigate(['user']);
  }
  verservicio(){
    this.router.navigate(['verservicio']);
  }
  crearservicios(){
    this.router.navigate(['crearservicio']);
  }

  logout(){
    this.usrsvc.logoutUser();
   
  }
}
