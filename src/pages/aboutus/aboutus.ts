import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {

  slides = [
    {
      title: "What we do ?",
      description: "We keep you updated with the movies you like...",
      image: "assets/imgs/1.jpg",
    },
    {
      title: "How can you help us ?",
      description: "Support us at movieMads.net ...",
      image: "assets/imgs/1.jpg",
    },
    {
      title: "Let's enjoy !!!",
      description: "Have fun !!!",
      image: "assets/imgs/1.jpg",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
  }

}
