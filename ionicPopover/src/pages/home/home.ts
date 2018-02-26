import { Component } from "@angular/core";
import { NavController, PopoverCmp, PopoverController } from "ionic-angular";
import { PopoverPage } from "../popover/popover";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController
  ) {}

  onPresentPopover() {
    let popover = this.popoverCtrl.create(PopoverPage, {
      data: 'Hello World'
    })
    popover.present();
  }
}
