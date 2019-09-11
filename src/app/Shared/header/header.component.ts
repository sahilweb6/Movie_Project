import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, public loginSrv: LoginService) { }

  showHistory() {
    this.router.navigate(['booking/bookinghistory']);
  }

  logout() {
    this.loginSrv.logout();
  }

}
