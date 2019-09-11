import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTheaterComponent } from './add-theater/add-theater.component';
import { ViewTheaterComponent } from './view-theater/view-theater.component';
import { AuthGuard } from '../Services/auth.guard';


const routes: Routes = [
  { path: 'addtheater', component: AddTheaterComponent, canActivate: [AuthGuard] },
  { path: 'viewtheater', component: ViewTheaterComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'viewtheater', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
