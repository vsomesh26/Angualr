import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private registrationService:RegistrationService) { }

  ngOnInit(): void {
  }


  registerForm = new FormGroup({
    first_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    last_name: new FormControl(''),
    user_name: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  })


  onsubmit(){
    //this.usermessage = "Registration submitted";
    console.log("inside component.ts");
    console.log(this.registerForm.value);
    console.log("somesh");
    //this.registrationService.addUser(this.registerForm.value).pipe().subscribe();
    this.registrationService.register(this.registerForm.value).subscribe((res) => {
      console.log(res);
      this.onreset();
    });


  }



  onreset(){
    this.registerForm.setValue({
    first_name:'',
    last_name: '',
    user_name: '',
    password: '',
    email: '',
    phone: '',
    })
  }


}
