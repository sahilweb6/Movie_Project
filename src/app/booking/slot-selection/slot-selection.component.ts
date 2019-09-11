import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot-selection',
  templateUrl: './slot-selection.component.html',
  styleUrls: ['./slot-selection.component.css']
})
export class SlotSelectionComponent implements OnInit {

  theaterList = [];

  constructor(
    private router: Router,
    public bookingSrv: BookingService,
    public el: ElementRef,
    public renderer: Renderer2
    ) { }

  ngOnInit() {
    this.bookingSrv.getTheaterList().subscribe((res: any) => {
      this.theaterList = res.filter((item) => {
        return this.bookingSrv.bookMovieObj.movie.tid.includes(item.id);
      });
    });
  }

  slot(th, slot, event, cl) {
    const hasClass = event.target.classList.contains(cl);
    if (!hasClass) {
      this.renderer.addClass(event.target, 'active');
    } else {
      this.renderer.removeClass(event.target, 'active');
    }
    this.bookingSrv.bookMovieObj.theater_name = th.name;
    this.bookingSrv.bookMovieObj.location = th.location;
    this.bookingSrv.bookMovieObj.slot = slot;
  }

  slotSelected() {
    this.router.navigate(['booking/moviebooking']);
  }
}
