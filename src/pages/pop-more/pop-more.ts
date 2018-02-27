import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutusPage } from "../aboutus/aboutus";
import { ContactUsPage } from '../contact-us/contact-us';
/**
 * Generated class for the PopMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-more',
  templateUrl: 'pop-more.html',
})
export class PopMorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopMorePage');
  }

  openAbtUs(){
    this.navCtrl.push(AboutusPage);
    console.log("Opened About Us Page");
  }

  openCntUs(){
    this.navCtrl.push(ContactUsPage);
    console.log("Opened Contact Us Page");
  }

}
