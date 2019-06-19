import { Component } from '@angular/core';
import { MovieProviderService } from '../movie-provider.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-feed',
  templateUrl: 'feed.page.html',
  styleUrls: ['feed.page.scss'],
  providers: [ MovieProviderService]
})
export class FeedPage {
  public lista_filmes: Array<any>;
  constructor (public navCtrl: NavController, public movieProviderService:MovieProviderService){

  }
  IonViewDidLoad(){
    this.movieProviderService.getPopularMovie().subscribe(
  
        data => {
          const obj = (data as any);
          const obj_json = JSON.parse(obj._body);
          this.lista_filmes = obj_json.results;
          console.log(this.lista_filmes); 
        }, error =>{
          console.log(error);
        } 
    )
  }
}
