import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from "@angular/http";
import { Network } from "@ionic-native/network";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ServiceProvider } from '../providers/service/service';
import { InfoPage } from "../pages/info/info";
import { PopMorePage } from "../pages/pop-more/pop-more";
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactUsPage } from '../pages/contact-us/contact-us';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    InfoPage,
    PopMorePage,
    AboutusPage,
    ContactUsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    InfoPage,
    PopMorePage,
    AboutusPage,
    ContactUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    Network
  ]
})
export class AppModule {}
