import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public contatos: Array<Object>;
constructor(public navCtrl: NavController) {
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
}
}