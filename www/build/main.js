webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus_aboutus__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.genres = [{ id: 28, genre: "Action" }];
        this.movie = navParams.get('movie');
    }
    InfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfoPage');
    };
    InfoPage.prototype.showGenre = function () {
        return this.genres;
    };
    InfoPage.prototype.openAbtUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aboutus_aboutus__["a" /* AboutusPage */]);
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\Ionic\Rest_Demo\src\pages\info\info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Movie Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="movie" class="selection">\n    <ion-card>\n      <ion-item>\n        <ion-avatar item-left image-large>\n            <img src="https://image.tmdb.org/t/p/w92{{movie.poster_path}}" alt="Image not found"/>\n        </ion-avatar>\n        <h2 style="font-weight: bold;"> {{movie.title}}</h2>\n        <p> {{movie.release_date}}</p>\n        <p><ion-icon name="bookmark" item-left small></ion-icon> Rating: {{movie.vote_average}}</p> \n\n      </ion-item>\n    </ion-card>\n  </div>\n  \n  <div padding>\n        <h5><ion-icon name="document"></ion-icon> Overview : </h5>\n        <p> {{movie.overview}} </p>\n  </div>\n  \n  <div padding>\n      <h5><ion-icon name="document"></ion-icon> Genre : </h5>\n      \n  </div>\n\n</ion-content>\n\n<ion-footer>\n\n      <ion-segment>\n        <ion-segment-button value="aboutus" (click)="openAbtUs()">\n          About Us\n        </ion-segment-button>\n  \n        <ion-segment-button value="contactus">\n          Contact Us\n        </ion-segment-button>\n      </ion-segment>\n  \n  </ion-footer>'/*ion-inline-end:"C:\Ionic\Rest_Demo\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], InfoPage);
    return InfoPage;
}());

var mGenres;
(function (mGenres) {
    mGenres[mGenres["Action"] = 28] = "Action";
    mGenres[mGenres["Romance"] = 10749] = "Romance";
})(mGenres || (mGenres = {}));
//# sourceMappingURL=info.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutus_aboutus__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_us_contact_us__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PopMorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopMorePage = (function () {
    function PopMorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PopMorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopMorePage');
    };
    PopMorePage.prototype.openAbtUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aboutus_aboutus__["a" /* AboutusPage */]);
        console.log("Opened About Us Page");
    };
    PopMorePage.prototype.openCntUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contact_us_contact_us__["a" /* ContactUsPage */]);
        console.log("Opened Contact Us Page");
    };
    PopMorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pop-more',template:/*ion-inline-start:"C:\Ionic\Rest_Demo\src\pages\pop-more\pop-more.html"*/'<!--\n  Generated template for the PopMorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <button ion-button full (click)="openAbtUs()" color="danger"> About Us </button>\n    </ion-row>\n\n    <ion-row>\n      <button ion-button full (click)="openCntUs()" color="danger"> Contact Us </button>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Ionic\Rest_Demo\src\pages\pop-more\pop-more.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PopMorePage);
    return PopMorePage;
}());

//# sourceMappingURL=pop-more.js.map

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutus/aboutus.module": [
		286,
		3
	],
	"../pages/contact-us/contact-us.module": [
		287,
		2
	],
	"../pages/info/info.module": [
		288,
		1
	],
	"../pages/pop-more/pop-more.module": [
		289,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_info_info__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pop_more_pop_more__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutus_aboutus__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_us_contact_us__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, navParams, movieService, toast, network, popCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.movieService = movieService;
        this.toast = toast;
        this.network = network;
        this.popCtrl = popCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ListPage');
        this.network.onConnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetUpdate(data.type);
        }, function (err) { return console.error(err); });
        this.network.onDisconnect().subscribe(function (data) {
            console.log(data);
            _this.displayNetUpdate(data.type);
        }, function (err) { return console.error(err); });
        this.getAllMovies();
    };
    HomePage.prototype.displayNetUpdate = function (connectStatus) {
        var networkType = this.network.type;
        this.toast.create({
            message: "You are now " + connectStatus + " via " + networkType,
            duration: 3000
        }).present();
    };
    HomePage.prototype.searchMovie = function (event, key) {
        var _this = this;
        if (event.target.value.length > 2) {
            this.movieService.getMovie(event.target.value).subscribe(function (data) {
                _this.movies = data.results;
                console.log(data);
            }, function (err) {
                console.log(err);
            }, function () { return console.log("Done"); });
        }
    };
    HomePage.prototype.getAllMovies = function () {
        var _this = this;
        this.movieService.getMoviesByFilter().subscribe(function (data) {
            _this.movies = data.results;
            console.log(data);
        }, function (err) {
            console.log(err);
        }, function () { return console.log("Done"); });
    };
    HomePage.prototype.selectMovie = function (event, movie) {
        console.log(movie + " at home.ts " + event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_info_info__["a" /* InfoPage */], {
            movie: movie
        });
    };
    HomePage.prototype.presentPopOver = function () {
        var popOver = this.popCtrl.create(__WEBPACK_IMPORTED_MODULE_5__pages_pop_more_pop_more__["a" /* PopMorePage */]);
        popOver.present();
    };
    HomePage.prototype.openAbtUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__aboutus_aboutus__["a" /* AboutusPage */]);
    };
    HomePage.prototype.openCntUs = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__contact_us_contact_us__["a" /* ContactUsPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Ionic\Rest_Demo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      MovieMads\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button iocn-only (click)="presentPopOver()"><ion-icon name="more"></ion-icon></button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding outline>\n\n    <ion-item>\n        <ion-label floating> Search for Movie </ion-label>\n        <ion-input type="text" (input)="searchMovie($event, searchKey)"> </ion-input>\n    </ion-item>\n\n    <ion-list>\n      <ion-item *ngFor="let movie of movies" (click)="selectMovie($event, movie)">\n        <ion-avatar item-left>\n          <img src="https://image.tmdb.org/t/p/w92{{movie.poster_path}}" alt="Image not found."/>\n        </ion-avatar>\n          <h2> {{movie.original_title}}</h2>\n          <p> {{movie.overview}}</p>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item *ngFor="let movie of movies" (click)="selectMovie($event, movie)">\n        <ion-avatar item-left>\n          <img src="https://image.tmdb.org/t/p/w92{{movie.poster_path}}" alt="Image not found."/>\n        </ion-avatar>\n          <h2> {{movie.original_title}}</h2>\n          <p> {{movie.overview}}</p>\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <ion-segment [(ngModel)]="bottom">\n      <ion-segment-button value="aboutus" style="color: black;" (click)="openAbtUs()">\n        About Us\n      </ion-segment-button>\n\n      <ion-segment-button value="contactus" style="color: black;" (click)="openCntUs()">\n        Contact Us\n      </ion-segment-button>\n    </ion-segment>\n\n</ion-footer>'/*ion-inline-end:"C:\Ionic\Rest_Demo\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = (function () {
    function ServiceProvider(http) {
        this.http = http;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.getMovie = function (movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    ServiceProvider.prototype.getMoviesByFilter = function () {
        var url = 'http://api.themoviedb.org/3/discover/movie?&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_service_service__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_info_info__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_pop_more_pop_more__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_us_contact_us__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pop_more_pop_more__["a" /* PopMorePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_us_contact_us__["a" /* ContactUsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/aboutus/aboutus.module#AboutusPageModule', name: 'AboutusPage', segment: 'aboutus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pop-more/pop-more.module#PopMorePageModule', name: 'PopMorePage', segment: 'pop-more', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_info_info__["a" /* InfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_pop_more_pop_more__["a" /* PopMorePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_aboutus_aboutus__["a" /* AboutusPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_contact_us_contact_us__["a" /* ContactUsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_network__["a" /* Network */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Ionic\Rest_Demo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Ionic\Rest_Demo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutusPage = (function () {
    function AboutusPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
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
    }
    AboutusPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutusPage');
    };
    AboutusPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-aboutus',template:/*ion-inline-start:"C:\Ionic\Rest_Demo\src\pages\aboutus\aboutus.html"*/'<!--\n  Generated template for the AboutusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>About Us</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="slider">\n\n  <div style="height: 45%;">\n    <ion-slides pager>\n      <ion-slide *ngFor="let slide of slides">\n        <img [src]="slide.image" class="slide-image"/>\n        <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n        <p [innerHTML]="slide.description"></p>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div padding>\n    <h2> Our Team Members </h2>\n\n      <ion-row>\n        <ion-col>\n          <img src="assets/imgs/2.jpg" alt="Image not found" style="height: 3cm;margin-left: 1cm;"/>\n          <p><ion-icon name="person" md="md-person"></ion-icon>&nbsp; Abc Def Ghi</p>\n          <p><ion-icon name="call"></ion-icon>&nbsp; Contact : +1234567890</p>\n        </ion-col>\n        <ion-col>\n          <img src="assets/imgs/2.jpg" alt="Image not found" style="height: 3cm;margin-left: 1cm;"/>\n          <p><ion-icon name="person" md="md-person"></ion-icon>&nbsp; Abc Def Ghi</p>\n          <p><ion-icon name="call"></ion-icon>&nbsp; Contact : +1234567890</p>\n        </ion-col>\n      </ion-row>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Ionic\Rest_Demo\src\pages\aboutus\aboutus.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AboutusPage);
    return AboutusPage;
}());

//# sourceMappingURL=aboutus.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactUsPage = (function () {
    function ContactUsPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactUsPage');
    };
    ContactUsPage.prototype.onSubmit = function () {
        var alert = this.alertCtrl.create({
            title: "Thanks for patience.",
            subTitle: "Our team will be helping you out in no time.",
            buttons: ['Ok']
        }).present();
        this.navCtrl.pop();
    };
    ContactUsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-us',template:/*ion-inline-start:"C:\Ionic\Rest_Demo\src\pages\contact-us\contact-us.html"*/'<!--\n  Generated template for the ContactUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="danger">\n    <ion-title>Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="contact">\n    <ion-card>\n      <ion-card-title class="title">\n          <ion-icon name="mail"> &nbsp; &nbsp;Don\'t hesitate to contact us!</ion-icon>\n      </ion-card-title>\n\n      <ion-card-content>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating><ion-icon name="contact"></ion-icon> FirstName </ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n            <ion-item>\n              <ion-label floating> LastName </ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating><ion-icon name="mail-open"></ion-icon> Email </ion-label>\n              <ion-input type="email" required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label floating><ion-icon name="ios-send"></ion-icon> Message </ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <button ion-button full color="danger" (click)="onSubmit()">Submit</button>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n \n</ion-content>\n'/*ion-inline-end:"C:\Ionic\Rest_Demo\src\pages\contact-us\contact-us.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ContactUsPage);
    return ContactUsPage;
}());

//# sourceMappingURL=contact-us.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map