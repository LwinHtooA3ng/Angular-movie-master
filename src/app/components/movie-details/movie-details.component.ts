import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId : string = "";

  movie : any = {};

  constructor(private route: ActivatedRoute, private heroService: HeroService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      // this.movieId = param.movieId
      this.heroService.getMovieDetails(param.movieId).subscribe((data) => {
        this.movie = data;
      })
    })
  }

}
