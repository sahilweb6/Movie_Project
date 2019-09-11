import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  moviesList = [];

  constructor(
    private router: Router,
    private bookingSrv: BookingService
    ) { }

  ngOnInit() {
    this.bookingSrv.getMovieList().subscribe((res: any) => {
      this.moviesList = res;
    });
  }

  selectMovie(movie) {
    this.bookingSrv.bookMovieObj.movie = movie;
    this.router.navigate(['booking/slotlist']);
  }

}
