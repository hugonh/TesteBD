import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Http } from '@angular/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public contatos: Array<Object>;

  private baseURL : string = "https://api.themoviedb.org/3";

constructor(public navCtrl: NavController, public http: Http) {
  this.contatos = [
    {
      "nome" :  "Bruno",
      "img" : "https://ionicframework.com/docs/demos/api/list/avatar-luke.png",
      "msg" : " Eae "
    },

    {
      "nome" : "Charles",
      "img" : "https://ionicframework.com/docs/demos/api/list/avatar-yoda.png",
      "msg" : " Fala "

    },

    { "nome" : "Nairan",
     "img" : "https://ionicframework.com/docs/demos/api/list/avatar-leia.png",
     "msg" : " Eae "
    },
                ]
              }

public teste():void{
 // alert("A função funcionou");
}
ngOnInit(){
  this.teste();
}

IonViewDidLoad(){

  this.teste();

  this.http.get(this.baseURL + "/movie/latest" + this.getAPIKey()).subscribe(
  data => {
    const obj = (data as any);
    const obj_json = JSON.parse(obj._body);
    console.log(obj_json); 
  }, error =>{
    console.log(error);
  } 

  )
  }

private getAPIKey() : string{
  return "?api_key=26d63128834799fb3d1754b6c5365337";
}
}