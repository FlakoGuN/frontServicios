import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  formReg: FormGroup;
  constructor(private user:UserService, private router: Router) { 
    this.formReg = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    this.user.createUser(this.formReg.value)
    .then(res => {
      Swal.fire({
        title: 'Usuario creado',
        text: 'Continuar',
        icon: 'success',
      })
      this.router.navigate(['login']);
    })
   .catch(err => {
    Swal.fire({
      title: 'Error al crear usuario',
      text: 'debe ser un correo valido y 6 digitos de pass',
      icon: 'error',
    })
    } );
    
    
  }
}
