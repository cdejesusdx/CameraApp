import { Component } from '@angular/core';
import {Plugins, CameraResultType, CameraSource} from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photo: SafeResourceUrl;

  constructor(private sanittizer: DomSanitizer) {}

  async takePinture(){
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.DataUrl
    });

    this.photo = this.sanittizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl))
  }
}
