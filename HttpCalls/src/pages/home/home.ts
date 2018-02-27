import { Component, OnInit } from "@angular/core";
import { NavController } from "ionic-angular";
import { DummyDataProvider } from "../../providers/dummy-data/dummy-data";
import { DummyModel } from "../../shared/dummy.model";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private dummies: Array<DummyModel>;

  constructor(
    public navCtrl: NavController,
    public dummyDataDataProvider: DummyDataProvider
  ) {
    const dummyData = dummyDataDataProvider.fetchDummyData();
    dummyData.subscribe((dummies) => {
      this.dummies = dummies;
    });
  }

  onCreateDummy() {
    let dummy: DummyModel = {
      name: 'Dummy',
      age: 45,
      isAlive: true
    };
    this.dummies.push(dummy);

    let dummyData = this.dummyDataDataProvider.pushDummyData(this.dummies);
    dummyData.subscribe((response) => {
      console.log(response);
    });
  }

  onThrowError() {
    throw new Error("It's not a bug, it's a feature!");
  }
}
