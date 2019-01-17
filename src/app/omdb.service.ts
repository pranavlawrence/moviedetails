import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  constructor(private http:HttpClient) { }

  movieData(title){
    return this.http.get("http://www.omdbapi.com/?t="+title+"&apikey=c2f138d6")
  }
}
