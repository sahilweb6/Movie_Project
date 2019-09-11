import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SlotSelectionComponent } from './slot-selection/slot-selection.component';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { BookingHistoryComponent } from './booking-history/booking-history.component';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [
    MovieListComponent,
    SlotSelectionComponent,
    MovieBookingComponent,
    ConfirmBookingComponent,
    BookingHistoryComponent
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule
  ]
})
export class BookingModule {}
