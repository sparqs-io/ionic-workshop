import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { Flashlight } from "@ionic-native/flashlight";
import { Sim } from "@ionic-native/sim";
import { SMS } from "@ionic-native/sms";
import { Storage } from '@ionic/storage';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  base64image: string = "";

  constructor(
    public navCtrl: NavController,
    public camera: Camera,
    public flashLight: Flashlight,
    public sim: Sim,
    public sms: SMS,
    public storage: Storage
  ) {}

  onTakePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64:
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.onStorePhoto(base64Image);
        this.onGetPhoto();
      },
      err => {
        // Handle error
      }
    );
  }

  onToggleLight() {
    this.flashLight
      .toggle()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  onTestSim() {
    this.sim
      .getSimInfo()
      .then(
        info => console.log("Sim info: ", info),
        err => console.log("Unable to get sim info: ", err)
      );
  }

  onSendSms() {
    this.sms.send('01775558762', 'Hello world!');
  }

  onStorePhoto(base64Image) {
    this.storage.set('lastPhoto', base64Image);
  }

  onGetPhoto(): void {
    this.storage.get('lastPhoto').then((value) => {
      this.base64image = value;
    }).catch((err) => {
      console.log(err);
    });
  }
}
