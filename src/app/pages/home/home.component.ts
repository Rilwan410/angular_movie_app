import { MoviesService } from "./../../core/services/movies/movies.component";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  moviesData;

  constructor(service: MoviesService, private router: Router) {
    this.moviesData = service.getAllMovies();
  }

  clickedMovie(slug:string) {
    this.router.navigate(['movie', slug])
  }
}
