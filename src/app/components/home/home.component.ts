import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularMovieList  = [];
  public loggedIn! : boolean;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    if(localStorage.getItem("isUserLoggedIn") == "true"){
    this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }    
    this.getMovieList();
  }

  getMovieList() : void {
    this.heroService.getMoveList().subscribe(data => {
      this.popularMovieList = data['results'];
    });
  }

}

// https://image.tmdb.org/t/p/original/kuf6dutpsT0vSVehic3EZIqkOBt.jpg