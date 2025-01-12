import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private readonly _URL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&language=pt&api_key=2e60285469c99d9abb3a153205a795c9&page='
  
  constructor( 
  private readonly _HTTP: HttpClient
  ) { }

  getMoviesByPages(page: number): Observable<any> {
    return this._HTTP.get(`${this._URL}${page}`)
  }


  
}

