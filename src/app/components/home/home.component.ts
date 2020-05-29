import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/http.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  artists: Object[] = [];

  constructor(private _http:  HttpService) {}

  ngOnInit() {
    this._http.fetchAllPopular();
    this.artists = this._http.fetchedArtirts;
  }

}
