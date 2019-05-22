import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

public bemvindo:string = "Bem vindo ao Ionic 4";
public int:number = 0;
public bool:Boolean = true;
public lista:Array<string> = ['teste'];
public listaAny:Array<any> = ['teste',10,true];



}
