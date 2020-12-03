import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dynamicvalue = "hi welcome to session";
  binding = "";
  loginForm = new FormGroup({
    user_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  onsubmit(){

    console.log(this.loginForm.value);
  }

  onreset(){
    this.loginForm.setValue({

    user_name: '',
    password: ''
    })
  }

}
