import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutusPage } from '../aboutus/aboutus';

/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  movie: {};
  genres:[{id: number, genre: string}] = [{id: 28, genre:"Action"}];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.movie = navParams.get('movie');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
    
  }

  
  showGenre(){
    return this.genres;
  }

  openAbtUs(){
    this.navCtrl.push(AboutusPage);
  }
}

enum mGenres{
  "Action" = 28,
  "Romance" = 10749
}