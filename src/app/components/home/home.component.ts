import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/http.service'
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  artists: Object[] = [];
  searchResult: any = {};
  showResultsTitle: boolean = false;

  header: Object = {
    "headers": {
      "x-rapidapi-host": "genius.p.rapidapi.com",
      "x-rapidapi-key": "a7614406e2msh59ee1345507dfb4p186de0jsn2bf93e973b3a"
    }
  }
  

  constructor(private _httpc: HttpClient, private _http:  HttpService) {
    
  }

  ngOnInit() {
    this.fetchOnce();
  }

  //got this help method to check empty object from stack overflow 
  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  // fetching for top artists to display on homepage
  fetchOnce() {
    this._http.fetchAllPopular();
    this.artists = this._http.fetchedArtirts;
  }

  onSearchChange(input) {
    this._httpc.get("https://genius.p.rapidapi.com/search?q="+input, this.header).subscribe(
      data => this.searchResult = data
    )
    if (input=="") {
      this.showResultsTitle = false;
    }
    else {
      this.showResultsTitle = true;
    }
  }

  //for displaying limited characters on title result output
  manageStringLimit(name: string): string {
    let tmp = name.substr(0, 50);
    if (name.length>50) {
      tmp = tmp + " ..."
    }
    return tmp;
  }

}
