import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Array<{
    name: string;
    avatarUrl: string;
  }> = [
    {
      name: "Venkman",
      avatarUrl: "assets/imgs/avatars/venkman.jpg"
    },
    {
      name: "Egon",
      avatarUrl: "assets/imgs/avatars/spengler.jpg"
    },
    {
      name: "Egon",
      avatarUrl: "assets/imgs/avatars/stantz.jpg"
    },
    {
      name: "Winston",
      avatarUrl: "assets/imgs/avatars/winston.jpg"
    },
    {
      name: "Tully",
      avatarUrl: "assets/imgs/avatars/tully.jpg"
    },
    {
      name: "Dana",
      avatarUrl: "assets/imgs/avatars/barrett.jpg"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
