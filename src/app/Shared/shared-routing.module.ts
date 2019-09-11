import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'login'},
  { path: 'booking', loadChildren: './booking/booking.module#BookingModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
