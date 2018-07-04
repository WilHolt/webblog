import { Component, OnInit } from '@angular/core';

import {User} from '../users_interfaces/users'

import { LoginService  } from '../services/login.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  loginForm : FormGroup;

  constructor(private fb: FormBuilder,
    private loginService: LoginService
  ) {
    this.user = new User();
    this.loginForm = fb.group({
      username: ['', Validators.required ],
      password:''
    });

  }

  onSubmit(){
  this.user = this.loginForm.value;
    this.loginService.setLogin(this.user);

  }
  ngOnInit() {

  }
}
