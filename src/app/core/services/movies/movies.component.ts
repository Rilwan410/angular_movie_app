import { Component } from "@angular/core";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.scss"],
})
export class MoviesService {
  reserveSeat(slug: any, index: any, totalTickets: any) {
    console.log(slug, index);
    const movieId = this.moviesData.findIndex((movie) => {
      return movie.slug === slug;
    });


    let totalSelected = this.moviesData[movieId].seats.filter(x => {
      return x === 'selected'
    }).length

    if (totalSelected < totalTickets) {
      if (this.moviesData[movieId].seats[index] === "reserved") {
        alert("Seat Already Taken");
      } else if (this.moviesData[movieId].seats[index] == "selected") {
        this.moviesData[movieId].seats[index] = "available";
      } else {
        this.moviesData[movieId].seats[index] = "selected";
      }
    }else {
     alert(`You have ${totalTickets} tickets, you need to buy more tickets in order to checkout`)
    }
  }
  

  constructor() {}
  moviesData = [
    {
      title: "Fast X",
      slug: "fast-x",
      imageUrl:
        "https://image.tmdb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      releaseData: "05/19/2023",
      movieDescription: `Dominic Toretto and his team are requested by the Agency to steal a computer chip during its transit in Rome, Italy. Dom and his wife Letty Ortiz stay behind with his son Brian "Little B" Marcos, while the rest of the team travels to Rome. A wounded Cipher arrives at Dom's home and informs him that Dante Reyes, the son of drug lord Hernan Reyes, has turned her crew against her and is using them to target Dom in revenge for his father's death and the loss of his family's fortune ten years ago.[b] When Little Nobody says that there is no Agency mission in Rome, Dom realizes Dante set them up and they go to rescue the team.`,
      seats: [
        "available",
        "available",
        "available",
        "available",
        "available",
        "reserved",
        "available",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
        "available",
        "available",
        "reserved",
        "reserved",
        "available",
        "reserved",
        "reserved",
        "reserved",
        "reserved",
      ],
    },
    {
      title: "Transformers: Rise Of The Beasts",
      slug: "transformers-rise-of-the-beasts",
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZTNiNDA4NmMtNTExNi00YmViLWJkMDAtMDAxNmRjY2I2NDVjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
      releaseData: "06/9/2023",
      movieDescription:
        "The homeworld of the Maximals, an advanced race of Cybertronians with beast modes, comes under attack from the planet-eating dark god Unicron. His heralds, the Terrorcons and an army of Predacon scorpions, led by Scourge, seek to obtain for their master the Maximals' greatest piece of technology, the Transwarp Key, which can open portals through space and time. The Maximal leader Apelinq sacrifices himself to allow the other Maximals to escape the planet before Unicron devours it. Now under the command of Optimus Primal, the Maximals use the key to flee to Earth.",
      seats: [
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
      ],
    },
    {
      title: "Spider Man: Across The Spider-verse",
      slug: "spiderman-across-the-spider-verse",
      imageUrl:
        "https://www.thevillagesentertainment.com/wp-content/uploads/2023/05/spiderman-poster.jpg",
      releaseData: "06/2/2023",
      movieDescription:
        "On Earth-65, Gwen Stacy lives with her police captain father, George, who is unaware that she is Spider-Woman. Years prior, Gwen accidentally killed her best friend Peter Parker while he was mindlessly rampaging as the Lizard, and the police have been hunting her ever since. One night, Gwen encounters a version of the Vulture from an Italian Renaissance-themed alternate universe. Spider-People Miguel O'Hara and Jess Drew arrive using portal-generating watches and help Gwen subdue the Vulture. George confronts Gwen and she reveals her identity. Distraught, he attempts to arrest her. Miguel begrudgingly grants Gwen membership into his Spider-Society, and she escapes through a portal with him and Jess.",
      seats: [
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
      ],
    },
    {
      title: "Flash",
      slug: "flash",
      imageUrl:
        "https://i0.wp.com/batman-news.com/wp-content/uploads/2023/04/The-Flash-Movie-Poster-01.jpeg?fit=1638%2C2048&quality=80&strip=info&ssl=1",
      releaseData: "06/16/2023",
      movieDescription: `After helping Bruce Wayne and Diana Prince stop a hospital robbery
      gone wrong in Gotham Cityand captured Falcone's son, Barry Allen
      revisits his childhood home and remembers his youth with his parents
      Nora and Henry, before Henry's wrongful imprisonment for Nora's
      murder.`,
      seats: [
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
      ],
    },
  ];

  getAllMovies() {
    return this.moviesData;
  }

  getMovieData(slug: any) {
    return this.moviesData.filter((movie) => {
      return movie.slug === slug;
    });
  }
}
