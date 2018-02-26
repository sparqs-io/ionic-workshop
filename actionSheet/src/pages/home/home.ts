import { Component } from "@angular/core";
import { NavController, ActionSheetController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController
  ) {}

  onPresentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('destructive called');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
