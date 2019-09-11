import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent {

  constructor(private router: Router,public bookingSrv: BookingService) { }
  goHome() {
    this.router.navigate(['booking/movielist']);
  }

}
