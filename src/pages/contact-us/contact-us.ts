import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }

  onSubmit(){
    let alert = this.alertCtrl.create({
      title:"Thanks for patience.",
      subTitle:"Our team will be helping you out in no time.",
      buttons:['Ok']
    }).present();
    this.navCtrl.pop();
  }
}
