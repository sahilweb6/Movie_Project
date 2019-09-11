import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private localStorage: LocalStorageService, private router: Router, private toastr: ToastrService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone({
            setHeaders: {
                Authorization: 'Bearer ' + this.localStorage.retrieve('access_token')
            }
        });
        return next.handle(request).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }, (error: any) => {
                if (error instanceof HttpErrorResponse) {
                    if (error.status === 401) {
                      console.error('Unauthorized');
                      this.router.navigate(['login']);
                    }
                }
            })
        );
    }
}
