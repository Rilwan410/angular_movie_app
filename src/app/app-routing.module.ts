import { ThankYouComponent } from './pages/thank-you/thank-you.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { MovieComponent } from './pages/movie/movie.component';
import { HomeComponent } from "./pages/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component:HomeComponent,
  },
  {
    path: "movie/:title",
    component:MovieComponent,
  },
  {
    path: "movie/:title/schedule",
    component:ScheduleComponent,
  },
  {
    path: "movie/:title/schedule/checkout",
    component:CheckoutComponent,
  },
  {
    path: "movie/:title/schedule/checkout/thank-you",
    component:ThankYouComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
