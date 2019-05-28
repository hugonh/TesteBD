import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public bemvindo:string = "Bem vindo ao Ionic 4";
public num:number = 0;
public bool:Boolean = true;
public listanum:Array<number> = [1,2,3,4,5]
public lista:Array<string> = ['Rodrigo','Carla', 'Charles', 'Bruno', 'Nairan'];
public listaAny:Array<any> = ['teste',10,true];


}
