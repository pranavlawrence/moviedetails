import { Component } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: 
  
  `Enter Movie name: <input type="text" (keyup.enter)="getMovieData()" [{ngModel}]="title"/>`,
  
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title;

  getMovieData(){


  }
}
