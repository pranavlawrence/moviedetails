import { Component } from '@angular/core';
import {OmdbService} from './omdb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title;

  info;

  constructor(private omdb:OmdbService){


  }

  Data(){
    
    this.omdb.movieData(this.title).subscribe(

      (response) => {
           this.info=response;

  }
}
