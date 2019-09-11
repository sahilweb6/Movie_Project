import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = {
    emailID: '',
    password: ''
  };

  constructor(private login: LoginService) { }

  ngOnInit() {
  }

  loginUser() {
    this.login.loginService(this.data);
  }
}
