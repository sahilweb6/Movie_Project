import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  bookingHistoryList = [];

  constructor(private bookingSrv: BookingService) { }

  ngOnInit() {
    this.bookingSrv.getBookingHistory().subscribe((res: any) => {
      this.bookingHistoryList = res;
    });
  }

}
