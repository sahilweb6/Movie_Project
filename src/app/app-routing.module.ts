import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './Services/auth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'booking', loadChildren: './booking/booking.module#BookingModule', canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
