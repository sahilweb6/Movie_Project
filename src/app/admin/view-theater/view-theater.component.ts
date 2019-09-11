import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/booking/booking.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-theater',
  templateUrl: './view-theater.component.html',
  styleUrls: ['./view-theater.component.css']
})
export class ViewTheaterComponent implements OnInit {

  theaterList = [];

  constructor(
    private router: Router,
    public bookingSrv: BookingService,
    private adminSrv: AdminService
  ) { }

  ngOnInit() {
    this.bookingSrv.getTheaterList().subscribe((res: any) => {
      this.theaterList = res;
    });
  }

  editTheater(data) {
    this.adminSrv.theater.name = data.name;
    this.adminSrv.theater.location = data.location;
    this.router.navigate(['/admin/addtheater']);
  }

}
