import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxWebstorageModule } from 'ngx-webstorage';
import { ToastrModule } from 'ngx-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './Shared/shared.module';
import { TokenInterceptor } from './Services/token.interceptor';
import { ToastsComponent } from './toasts/toasts.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToastsComponent
  ],
  imports: [
    BrowserModule,
        SharedModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgxWebstorageModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
