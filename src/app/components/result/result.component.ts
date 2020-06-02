import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  //placeholder foe route param id
  id: string;
  //placeholder for result track
  resultTrack: any = {}
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
    this._http.get("https://genius.p.rapidapi.com/songs/"+this.id, this.header).subscribe(
      data => this.resultTrack = data
    )
  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

}
