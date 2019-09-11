import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastService } from '../toasts/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tempData: any = [];
  private infoData = {
    tokenInfo: '',
    role: ''
  };
  constructor(private http: HttpClient, private toastr: ToastService) { }

  public isAuthentication(data: any): Observable<any> {
    this.tempData = [];
    this.infoData.tokenInfo = null;
    return this.http.get('../../assets/login.json').pipe(
      map((response) => {
        this.tempData = response;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.tempData.length; i++) {
          if (this.tempData[i].emailID === data.emailID && this.tempData[i].password === data.password) {
            this.infoData.tokenInfo = this.tempData[i].access_token;
            this.infoData.role = this.tempData[i].role;
            break;
          } else {
            this.toastr.show('Invalid email id or password', { classname: 'bg-danger text-light', delay: 5000 });
          }
        }
        return this.infoData;
      })
    );
  }
}
