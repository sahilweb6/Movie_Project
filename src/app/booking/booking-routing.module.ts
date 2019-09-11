import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SlotSelectionComponent } from './slot-selection/slot-selection.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { AuthGuard } from '../Services/auth.guard';


const routes: Routes = [
  { path: 'movielist', component: MovieListComponent, canActivate: [AuthGuard] },
  { path: 'slotlist', component: SlotSelectionComponent, canActivate: [AuthGuard] },
  { path: 'moviebooking', component: MovieBookingComponent, canActivate: [AuthGuard] },
  { path: 'confirmbooking', component: ConfirmBookingComponent, canActivate: [AuthGuard] },
  { path: 'bookinghistory', component: BookingHistoryComponent, canActivate: [AuthGuard] },
  { path: '', component: MovieListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
