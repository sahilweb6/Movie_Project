import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isUserLoggedIn: boolean;
  loginInfo: any;
  constructor(
    private router: Router,
    private auth: AuthService,
    private localStorage: LocalStorageService) {
    this.isUserLoggedIn = false;
  }

  public loginService(data): void {
    this.auth.isAuthentication(data).subscribe((response) => {
      this.loginInfo = response;
      if (response.tokenInfo !== null && response.role !== null) {
        this.isUserLoggedIn = true;
        if (response.role === 'admin') {
          this.router.navigate(['admin']);
        } else {
          this.router.navigate(['booking']);
        }
      } else {
        this.router.navigate(['login']);
      }
      this.localStorage.store('access_token', response.tokenInfo);
    });
  }

  public getUserLoggedIn() {
    return this.isUserLoggedIn;
  }

  logout() {
    this.isUserLoggedIn = false;
    this.localStorage.clear('access_token');
    this.router.navigate(['login']);
  }
}
