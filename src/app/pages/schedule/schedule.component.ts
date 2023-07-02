import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "./../../core/services/movies/movies.component";
import { Component } from "@angular/core";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.scss"],
})
export class ScheduleComponent {
  movieData: any;
  time = "3:00pm";
  adultsTickets = 0;
  adultsTicketsPrice = 15.03;

  childTickets = 0;
  childTicketsPrice = 12.06;

  seniorTickets = 0;
  seniorTicketsPrice = 11.53;

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

  chooseTime(time: string) {
    this.time = time;
    console.log(this.time);
  }

  clickedSeat(slug: any, index: any) {
    let totalTickets =
      Number(this.adultsTickets) + Number(this.childTickets) + Number(this.seniorTickets);
    this.service.reserveSeat(slug, index, totalTickets);
    console.log("clicked Seat", totalTickets);
  }


  clickedContinue(){
    this.router.navigate(['movie', this.movieData.slug, 'schedule', 'checkout', 'thank-you'],{ queryParams:{
      adultTickets:this.adultsTickets,
      childTickets: this.childTickets,
      seniorTickets: this.seniorTickets,
      time :this.time,
    }})
  }
}

