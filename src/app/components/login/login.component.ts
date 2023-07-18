import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = this.fb.group({
    email: [
      '', // valor predeterminado de campo
      [   // validaciones
        Validators.required,
        Validators.email
      ]
    ],
    password:[
      '', // valor predeterminado de campo
      [   // validaciones
       Validators.required,
       Validators.minLength(8)
      ]
    ]
  });
// inyeccion de dependencias
 constructor( private fb: FormBuilder ) {};

 // metodo login

 login() {
   console.group("loginForm");
   console.info(this.loginForm.value);
   console.log(this.loginForm.valid);
   console.groupEnd();
 }
}
