import { Component } from '@angular/core';
import { NavController, RefresherContent, Refresher } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<string> = [
    'Pokémon Yellow',
    'Super Metroid',
    'Mega Man X',
    'The Legend of Zelda',
    'Pac-Man',
    'Super Mario World',
    'Street Fighter II',
    'Half Life',
    'Final Fantasy VII',
    'Star Fox',
    'Tetris',
    'Donkey Kong III',
    'GoldenEye 007',
    'Doom',
    'Fallout',
    'GTA',
    'Halo'
  ];

  constructor(public navCtrl: NavController) {

  }

  onRefresh(refresher: Refresher) {
    debugger;
    console.log(refresher);
    setTimeout(() => {
      console.log('async op');
      this.items.push('New ITEM');
      this.items.push('Next Item');
      refresher.complete();
      refresher.cancel()
    }, 3000);
  }

}
