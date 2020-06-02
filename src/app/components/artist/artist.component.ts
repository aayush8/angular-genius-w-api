import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})

export class ArtistComponent implements OnInit {

  //placeholder for fetched artist data
  artist: any = {}
  //placeholder foe route param id
  id: string;
  //placeholder for popular tracks
  popularTracks: any = {}

   //header authentication to add to fetch the data from genius api
   header: Object = {
    "headers": {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "a7614406e2msh59ee1345507dfb4p186de0jsn2bf93e973b3a"
    }
  }

  constructor(private _http: HttpClient, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    // console.log(this.id);
    this._http.get("https://genius.p.rapidapi.com/artists/"+this.id, this.header).subscribe(
      data => this.artist = data
    )
    // console.log(this.artist)
  }

  //got this help method to check empty object from stack overflow 
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  displayPopularTrackButton(): boolean {
    if (this.popularTracks.length>0) return false;
    else return true;
  }

  fetchPopularTracks(): void {
    this._http.get("https://genius.p.rapidapi.com/artists/"+this.id+"/songs?sort=popularity&page=1&per_page=50", this.header).subscribe(
      data => this.popularTracks = data
    )
  }

}
