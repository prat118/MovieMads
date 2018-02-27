import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ServiceProvider } from "../../providers/service/service";
import { Network } from "@ionic-native/network";
import { PopoverController } from "ionic-angular";

import { InfoPage } from "../../pages/info/info";
import { PopMorePage } from "../../pages/pop-more/pop-more";
import { AboutusPage } from '../aboutus/aboutus';
import { ContactUsPage } from '../contact-us/contact-us';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movies: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private movieService: ServiceProvider, 
  private toast: ToastController, private network: Network, private popCtrl: PopoverController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');

    this.network.onConnect().subscribe(data => {
      console.log(data)
      this.displayNetUpdate(data.type);
    }, err => console.error(err));

    this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.displayNetUpdate(data.type);
    }, err => console.error(err));

    this.getAllMovies();
  }


  displayNetUpdate(connectStatus: string){
    let networkType = this.network.type;
    this.toast.create({
      message : `You are now ${connectStatus} via ${networkType}`,
      duration: 3000
    }).present();
  }

  searchMovie(event,key){
    if(event.target.value.length > 2 ){
      this.movieService.getMovie(event.target.value).subscribe(
        data => {
          this.movies = data.results;
          console.log(data);
        },
        err => {
          console.log(err);
        },
        () => console.log("Done")
      );
    }
  }

  getAllMovies(){
    this.movieService.getMoviesByFilter().subscribe(
      data => {
        this.movies = data.results;
        console.log(data);
      },
      err => {
        console.log(err);
      },
      () => console.log("Done")
    );
  }

  selectMovie(event, movie) {
		console.log(movie+" at home.ts "+event);  
		this.navCtrl.push(InfoPage, {
			movie: movie
		});
  }
  
  presentPopOver(){
    let popOver = this.popCtrl.create(PopMorePage);
    popOver.present();
  }

  openAbtUs(){
    this.navCtrl.push(AboutusPage);
  }

  openCntUs(){
    this.navCtrl.push(ContactUsPage);
  }

}
