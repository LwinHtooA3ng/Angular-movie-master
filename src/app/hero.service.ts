import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private myMovieApiKey : string = "6fca727503a934e24b91325556f4ec8b";

  private movieDetailsApi : string = "https://api.themoviedb.org/3/movie/315162?api_key=6fca727503a934e24b91325556f4ec8b&language=en-US";

  constructor(private httpClient: HttpClient) { }

  public getMoveList(): Observable<any> {
    return this.httpClient.get("https://api.themoviedb.org/3/movie/popular?api_key="+ this.myMovieApiKey +"&language=en-US&page=1");
  }

  public getMovieDetails(id: string) : Observable<any> {
    return this.httpClient.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=" + this.myMovieApiKey +"&language=en-US");
  } 


}

// https://api.themoviedb.org/3/movie/popular?api_key=6fca727503a934e24b91325556f4ec8b&language=en-US&page=1