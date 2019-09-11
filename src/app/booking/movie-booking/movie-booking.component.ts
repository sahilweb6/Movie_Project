import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-movie-booking',
  templateUrl: './movie-booking.component.html',
  styleUrls: ['./movie-booking.component.css']
})
export class MovieBookingComponent {

  constructor(
    private router: Router,
    public bookingSrv: BookingService,
    private localStorage: LocalStorageService) { }

  changingValue(event) {
    this.bookingSrv.bookMovieObj.seats = event.target.value;
  }

  bookTicket() {
    this.localStorage.store('movie_booking_details', this.bookingSrv.bookMovieObj);
    this.router.navigate(['booking/confirmbooking']);
  }

}
