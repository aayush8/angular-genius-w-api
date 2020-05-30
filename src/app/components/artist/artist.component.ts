import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})

export class ArtistComponent implements OnInit {

  //placeholder for fetched artist data
  artist: Object = {}

   //header authentication to add to fetch the data from genius api
   header: Object = {
    "headers": {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "a7614406e2msh59ee1345507dfb4p186de0jsn2bf93e973b3a"
    }
  }

  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this._http.get("https://genius.p.rapidapi.com/artists/"+"1405", this.header).subscribe(
      data => this.artist = data
    )
    console.log(this.artist)
  }

  //got this help method to check empty object from stack overflow 
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
