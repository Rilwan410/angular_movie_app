import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from './../../core/services/movies/movies.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})

export class ThankYouComponent {
  movieData:any

  constructor(
    private service: MoviesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.route.paramMap.subscribe((params) => {
      this.movieData = service.getMovieData(params.get("title"))[0];
      console.log(this.movieData);
    });
  }
}