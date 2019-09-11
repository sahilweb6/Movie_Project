import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { History } from '../Model/history';
import { Movie } from '../Model/movie';
import { Theater } from '../Model/theater';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  bookMovieObj = {
    movie: new Movie(),
    theater_name: '',
    location: '',
    slot: '',
    seats: null
  };

  constructor(private http: HttpClient) { }

  getTheaterList(): Observable<Theater[]> {
    return this.http.get<Theater[]>('../../assets/theaters.json').pipe(
      catchError(this.handleError)
    );
  }

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>('../../assets/movies.json').pipe(
      catchError(this.handleError)
    );
  }

  getBookingHistory(): Observable<History[]> {
    return this.http.get<History[]>('../../assets/history.json').pipe(
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
