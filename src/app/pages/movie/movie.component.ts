import { MoviesService } from "./../../core/services/movies/movies.component";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.scss"],
})
export class MovieComponent {
  movieData: any;
  // time = '';
  // router: any;
  constructor(
    service: MoviesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.paramMap.subscribe((params) => {
      this.movieData = service.getMovieData(params.get("title"))[0];
      console.log(this.movieData);
    });
  }

  clickedTickets(slug:string) {
    console.log("Clicked Tickets");
    this.router.navigate(["movie", slug, "schedule"]);
  }
}
