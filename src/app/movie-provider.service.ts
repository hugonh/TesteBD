import { Http } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MovieProviderService {
  private baseURL : string = "https://api.themoviedb.org/3/";

  constructor(public http: Http) {
    console.log("Hello movieProvider Service Provider");
  }
   public getLatestMovie(){
    return this.http.get(this.baseURL + "/movie/latest" + this.getAPIKey());
   
   }

   public getPopularMovie(){
    return this.getMovie("movie/popular");

   }
   public getMovie(url: String){
    return this.http.get(this.baseURL + url + this.getAPIKey());

   }

   private getAPIKey() : string{
    return "?api_key=26d63128834799fb3d1754b6c5365337";
}
}
