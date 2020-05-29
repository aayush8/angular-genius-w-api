import { Injectable } from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  //adding some artists to display on homepage and just edit or add here to change later ... easy ...
  popularArtists: {name: string, id: string, image_url: string}[] = [
    {name: "eminem", id: "45", image_url: ""},
    {name: "drake", id: "130", image_url: ""},
    {name: "shakira", id: "1405", image_url: ""},
    {name: "taylor swift", id: "1177", image_url: ""},
    {name: "justin bieber", id: "357", image_url: ""},
    {name: "rihanna", id: "89", image_url: ""},
    {name: "post malone", id: "326362", image_url: ""},
    {name: "machine gun kelly", id: "1665", image_url: ""},
    {name: "ed sheeren", id: "12418", image_url: ""},
  ]

  //this is placeholder for the fetched artists
  fetchedArtirts: Object[] = []

  //header authentication to add to fetch the data from genius api
  header: Object = {
    "headers": {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "a7614406e2msh59ee1345507dfb4p186de0jsn2bf93e973b3a"
    }
  }

  constructor(private _http: HttpClient) { }

  fetchAllPopular() {
    this.popularArtists.forEach(artist => {
      this._http.get("https://genius.p.rapidapi.com/artists/"+artist.id, this.header).subscribe(
      data => this.fetchedArtirts.push(data)
    )
    });
  }

  logFetchedArtists() {
    console.log(this.fetchedArtirts)
  }

}
