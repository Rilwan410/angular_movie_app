import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { MovieComponent } from "./pages/movie/movie.component";
import { ScheduleComponent } from "./pages/schedule/schedule.component";
import { CheckoutComponent } from "./pages/checkout/checkout.component";
import { ThankYouComponent } from "./pages/thank-you/thank-you.component";
import { MainLayoutComponent } from "./shared/main-layout/main-layout.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { MoviesService } from "./core/services/movies/movies.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    ScheduleComponent,
    CheckoutComponent,
    ThankYouComponent,
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
