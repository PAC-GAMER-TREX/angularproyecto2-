import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
//loginform '!'
  loginForm!: FormGroup;
  

  constructor(private authService:AuthService, 
    private router:Router,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',[Validators.required]],

    });

  }

  ingresar(){
//never era error
    //const data: never[]=[];
    alert("Bienvenido al Sistema");
    this.router.navigate(['/dasboard']);

    console.log(this.loginForm.value);


    //para backend

//     this.authService.login(this.loginForm).subscribe((data:any)=>{
// //guardar token en localstorage
//       alert("Bienvenido al Sistema");
//       this.router.navigate(['/dashboard']);
//     }),

//     (error:any)=>{

//     alert(error.error);

//     }

  }
}
