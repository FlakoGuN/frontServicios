import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  token = localStorage.getItem('idToken');
  formReg: FormGroup;
  constructor(private user:UserService, private router: Router) { 
    this.formReg = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }

  onSubmit() {
    this.user.loginUser(this.formReg.value)
    
    .then(res => {
      Swal.fire({
        title: 'Bienvenido',
        text: 'Continuar',
        icon: 'success',
        
      })
      console.log(this.token);
      this.router.navigate(['/']);
    })
   .catch(err => {
    Swal.fire({
      title: 'Error',
      text: err.message,
      icon: 'error',
      
    })
    
    } );
    
  }
  loginUser(){
    this.router.navigate(['user']);
  }
}

