(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _not_not_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not/not.component */ "./src/app/not/not.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _profile_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile.guard */ "./src/app/profile.guard.ts");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login.guard */ "./src/app/login.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"] },
    { path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]] },
    { path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_10__["LoginGuard"]] },
    { path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"],
        canActivate: [_profile_guard__WEBPACK_IMPORTED_MODULE_9__["ProfileGuard"]] },
    { path: 'articles', component: _articles_articles_component__WEBPACK_IMPORTED_MODULE_5__["ArticlesComponent"] },
    { path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        canActivate: [_profile_guard__WEBPACK_IMPORTED_MODULE_9__["ProfileGuard"]] },
    { path: '**', component: _not_not_component__WEBPACK_IMPORTED_MODULE_6__["NotComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" >Navbar w/ text</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\"  >\n        <a class=\"nav-link\" routerLinkActive='active' routerLink=\"/\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive='active' routerLink=\"/articles\">Articles</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive='active' [hidden]=\"loggedIn\" routerLink=\"/login\" >Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive='active' [hidden]=\"loggedIn\" routerLink=\"/signup\" >Signup</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive='active' [hidden]=\"!loggedIn\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive='active' [hidden]=\"!loggedIn\" routerLink=\"/dashboard\">Dashboard</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [hidden]=\"!loggedIn\" href=\"#\" (click)=\"logout($event)\" >Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<br>\n<button class=\"btn btn-light\" (click)=\"goBack()\" >Go Back</button>\n<router-outlet></router-outlet>\n\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(location, token, router) {
        this.location = location;
        this.token = token;
        this.router = router;
        this.loggedIn = this.token.isLoggedIn();
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.goBack = function () {
        this.location.back();
    };
    AppComponent.prototype.logout = function (e) {
        e.preventDefault();
        this.token.removeToken();
        window.location.reload();
        this.router.navigate(['/']);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _articles_articles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./articles/articles.component */ "./src/app/articles/articles.component.ts");
/* harmony import */ var _not_not_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./not/not.component */ "./src/app/not/not.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _articles_articles_component__WEBPACK_IMPORTED_MODULE_9__["ArticlesComponent"],
                _not_not_component__WEBPACK_IMPORTED_MODULE_10__["NotComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"],
                    multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/articlee.ts":
/*!*****************************!*\
  !*** ./src/app/articlee.ts ***!
  \*****************************/
/*! exports provided: Articlee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Articlee", function() { return Articlee; });
var Articlee = /** @class */ (function () {
    function Articlee(body) {
        this.body = body;
    }
    return Articlee;
}());



/***/ }),

/***/ "./src/app/articles/articles.component.css":
/*!*************************************************!*\
  !*** ./src/app/articles/articles.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/articles/articles.component.html":
/*!**************************************************!*\
  !*** ./src/app/articles/articles.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div *ngIf=\"articles\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <td>ID</td>\n        <td>User Name</td>\n        <td>Article</td>\n        <td>Created At</td>\n        <td>Updated At</td>\n      </tr>\n    </thead>\n    <tr *ngFor=\"let article of articles\">\n      <td>{{ article.id }}</td>\n      <td> {{ article.user_name }} </td>\n      <td>{{article.article}}</td>\n      <td>{{article.created_at}}</td>\n      <td>{{article.updated_at}}</td>\n    </tr>\n  </table>\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"error\">\n  {{error}}\n</div>\n</div>"

/***/ }),

/***/ "./src/app/articles/articles.component.ts":
/*!************************************************!*\
  !*** ./src/app/articles/articles.component.ts ***!
  \************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent(blogService) {
        this.blogService = blogService;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.blogService.getPosts().subscribe(function (data) { _this.articles = data['data']; }, function (error) { _this.error = error.statusText; });
    };
    ArticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.css */ "./src/app/articles/articles.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"]])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogService = /** @class */ (function () {
    function BlogService(http) {
        this.http = http;
        this.url = "http://localhost:8000/api/get-articles";
    }
    BlogService.prototype.getPosts = function () {
        return this.http.get(this.url);
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/dashboard.service.ts":
/*!**************************************!*\
  !*** ./src/app/dashboard.service.ts ***!
  \**************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.getImages = function () {
        return this.http.get("http://localhost:8000/api/images").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DashboardService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    DashboardService.prototype.deleteImage = function (id) {
        return this.http.delete("http://localhost:8000/api/deleteimage/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DashboardService.prototype.getmyArticles = function () {
        return this.http.get("http://localhost:8000/api/get-my-articles").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DashboardService.prototype.addArticle = function (value) {
        return this.http.post("http://localhost:8000/api/create-article", value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DashboardService.prototype.deleteArticle = function (url) {
        return this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DashboardService.prototype.editArticle = function (url, body) {
        return this.http.put(url, body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    DashboardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [class.d-none]=\"images\" >\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <td>\n          image\n        </td>\n        <td>\n          createdAt\n        </td>\n        <td>\n          Delete\n        </td>\n      </tr>\n    </thead>\n    <tbody>\n      <div [class.d-none]=\"deleted\" class=\"alert alert-success\">image deleted</div>\n      <tr *ngFor=\"let image of images\" [id]=\"imagee+image.id\" >\n\n        <td><a [href]=\"image.image\" target=\"_blank\"><img [src]=\"image.image\" width=\"150\" height=\"150\" /></a></td>\n        <td>{{image.created_at}}</td>\n        <td><button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteImage(image.id)\" >Delete Image</button>\n        </td>\n\n        </tr>\n    </tbody>\n  </table>\n</div>\n<br>\n<br>\n<hr>\n\n<div class=\"container\">\n      <div>\n        <form>\n        <textarea class=\"form-control\" #textarea=\"ngModel\" name=\"body\" [(ngModel)]=\"Article.body\" rows=\"5\" ></textarea>\n        <button class=\"btn btn-primary\" (click)=\"addArticle()\" >Add article</button>\n      </form>\n      </div>\n</div>\n      <div *ngIf=\"articles\">\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <td>ID</td>\n              <td>User Name</td>\n              <td>Article</td>\n              <td>Created At</td>\n              <td>Updated At</td>\n              <td>Edit</td>\n              <td>Delete</td>\n            </tr>\n          </thead>\n          <div class=\"alert alert-info\" [class.d-none]=\"edit\" >\n            <textarea class=\"form-control\" name=\"body\" [(ngModel)]=\"editarticle.body\"></textarea>\n            <p>{{errorsupdating}}</p>\n            <br>\n            <button class=\"btn btn-success\" id=\"update\" >Update Article</button>  \n          </div>\n\n          <tr *ngFor=\"let article of articles\" [id]=\"articlee+article.id\" >\n            <td>{{ article.id }}</td>\n            <td> {{ article.user_name }} </td>\n            <td>{{article.article}}</td>\n            <td>{{article.created_at}}</td>\n            <td>{{article.updated_at}}</td>\n            <td><button class=\"btn btn-info\" (click)=\"editArticle(article.id)\" >Edit Article</button></td>\n            <td><button class=\"btn btn-danger\" (click)=\"deleteArticle(article.id)\" >Delete Article</button> </td>\n          </tr>\n          \n        </table>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\n        {{error}}\n      </div>\n\n   \n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard.service */ "./src/app/dashboard.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _articlee__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articlee */ "./src/app/articlee.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboard) {
        this.dashboard = dashboard;
        this.imagee = 'image';
        this.articlee = 'article';
        this.deleted = true;
        this.edit = true;
        this.errorsupdating = "";
        this.Article = new _articlee__WEBPACK_IMPORTED_MODULE_3__["Articlee"](this.text);
        this.editarticle = new _articlee__WEBPACK_IMPORTED_MODULE_3__["Articlee"](this.body);
        this.images = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getImages();
        this.getmyArticles();
    };
    DashboardComponent.prototype.getImages = function () {
        var _this = this;
        this.dashboard.getImages().subscribe(function (data) { _this.images = data['images']; }, function (error) { _this.imagesError = error.statusText; });
    };
    DashboardComponent.prototype.deleteImage = function (id) {
        var _this = this;
        var con = confirm("Do you want to delete image?");
        if (con) {
            this.dashboard.deleteImage(id).subscribe(function (success) { _this.deleted = false; console.log(success); _this.removeItem(id); }, function (error) { _this.errorDeleting = error.statusText; console.error(error); });
        }
    };
    DashboardComponent.prototype.removeItem = function (id) {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#" + id).remove();
    };
    DashboardComponent.prototype.getmyArticles = function () {
        var _this = this;
        this.dashboard.getmyArticles().subscribe(function (data) { _this.articles = data['data']; }, function (error) { _this.articlesError = error.statusText; });
    };
    DashboardComponent.prototype.addArticle = function () {
        var _this = this;
        this.dashboard.addArticle(this.Article).subscribe(function (success) {
            console.log(success['article']); //this.addtodom(success['article'])
            _this.getmyArticles();
        }, function (error) { console.error(error); });
    };
    DashboardComponent.prototype.deleteArticle = function (id) {
        var _this = this;
        this.dashboard.deleteArticle("http://localhost:8000/api/delete-article/" + id).subscribe(function (success) { console.log(success); _this.removearticlefromdom(id); }, function (error) { console.error(error); });
    };
    DashboardComponent.prototype.removearticlefromdom = function (id) {
        var idd = 'article' + id;
        jquery__WEBPACK_IMPORTED_MODULE_2__('#' + idd).remove();
    };
    DashboardComponent.prototype.editArticle = function (id) {
        var _this = this;
        this.edit = false;
        jquery__WEBPACK_IMPORTED_MODULE_2__("#update").click(function () {
            _this.dashboard.editArticle('http://localhost:8000/api/editarticle/' + id, _this.editarticle).subscribe(function (success) { console.log(success); _this.getmyArticles(); _this.edit = true; }, function (error) { console.error(error); _this.errorsupdating = error.error.errors['body']; });
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login.guard.ts":
/*!********************************!*\
  !*** ./src/app/login.guard.ts ***!
  \********************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginGuard = /** @class */ (function () {
    function LoginGuard(token) {
        this.token = token;
    }
    LoginGuard.prototype.canActivate = function (next, state) {
        if (this.token.isLoggedIn()) {
            return false;
        }
        return true;
    };
    LoginGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/login.service.ts":
/*!**********************************!*\
  !*** ./src/app/login.service.ts ***!
  \**********************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.url = "http://localhost:8000/api/auth/login";
    }
    LoginService.prototype.login = function (loginform) {
        return this.http.post(this.url, loginform).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    LoginService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row jsutify-content-center\">\n  <div class=\"col-sm-8\">\n    <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n      {{errorMsg}}\n    </div>\n<form #loginform=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\" class=\"form-control\" name=\"email\" #emaill=\"ngModel\" [(ngModel)]=\"Loginform.email\" placeholder=\"Enter email\" required>\n    <div class=\"text-danger\" [class.d-none]=\"emaill.valid  || emaill.untouched\">Email field is invalid</div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"pass\"  #passs=\"ngModel\" [(ngModel)]=\"Loginform.password\" placeholder=\"Password\" required>\n    <div [class.d-none]=\"passs.valid || passs.untouched\" class=\"text-danger\">The password field is invalid</div>\n  </div>\n  <button [disabled]=\"loginform.form.invalid || submitted\" type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</div></form>\n</div></div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _loginform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginform */ "./src/app/loginform.ts");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ "./src/app/login.service.ts");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../token.service */ "./src/app/token.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, LoginService, Token, router) {
        this.http = http;
        this.LoginService = LoginService;
        this.Token = Token;
        this.router = router;
        this.submitted = false;
        this.email = null;
        this.password = null;
        this.Loginform = new _loginform__WEBPACK_IMPORTED_MODULE_2__["Loginform"](this.email, this.password);
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.LoginService.login(this.Loginform).subscribe(function (data) {
            _this.tok = data['access_token'];
            _this.handleToken(_this.tok);
        }, function (error) { _this.errorMsg = error.statusText; });
        this.submitted = true;
        console.log(this.Token.isTokenExpired());
    };
    LoginComponent.prototype.handleToken = function (token) {
        this.Token.handle(token);
        window.location.reload();
        this.router.navigate(['/']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"],
            _token_service__WEBPACK_IMPORTED_MODULE_4__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/loginform.ts":
/*!******************************!*\
  !*** ./src/app/loginform.ts ***!
  \******************************/
/*! exports provided: Loginform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Loginform", function() { return Loginform; });
var Loginform = /** @class */ (function () {
    function Loginform(email, password) {
        this.email = email;
        this.password = password;
    }
    return Loginform;
}());



/***/ }),

/***/ "./src/app/not/not.component.css":
/*!***************************************!*\
  !*** ./src/app/not/not.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not/not.component.html":
/*!****************************************!*\
  !*** ./src/app/not/not.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 style=\"color:red\"> 404 Page Not Found </h1>"

/***/ }),

/***/ "./src/app/not/not.component.ts":
/*!**************************************!*\
  !*** ./src/app/not/not.component.ts ***!
  \**************************************/
/*! exports provided: NotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotComponent", function() { return NotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotComponent = /** @class */ (function () {
    function NotComponent() {
    }
    NotComponent.prototype.ngOnInit = function () {
    };
    NotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not',
            template: __webpack_require__(/*! ./not.component.html */ "./src/app/not/not.component.html"),
            styles: [__webpack_require__(/*! ./not.component.css */ "./src/app/not/not.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotComponent);
    return NotComponent;
}());



/***/ }),

/***/ "./src/app/profile.guard.ts":
/*!**********************************!*\
  !*** ./src/app/profile.guard.ts ***!
  \**********************************/
/*! exports provided: ProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGuard", function() { return ProfileGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.service */ "./src/app/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileGuard = /** @class */ (function () {
    function ProfileGuard(Token, router) {
        this.Token = Token;
        this.router = router;
    }
    ProfileGuard.prototype.canActivate = function (next, state) {
        if (this.Token.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    ProfileGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_2__["TokenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfileGuard);
    return ProfileGuard;
}());



/***/ }),

/***/ "./src/app/profile.service.ts":
/*!************************************!*\
  !*** ./src/app/profile.service.ts ***!
  \************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = /** @class */ (function () {
    function ProfileService(http) {
        this.http = http;
    }
    ProfileService.prototype.getdata = function () {
        return this.http.get("http://localhost:8000/api/auth/me").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.getimages = function () {
        return this.http.get("http://localhost:8000/api/images").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    ProfileService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<br>\n<br>\n<hr>\n<input type=\"file\" (change)=\"onChange($event)\" #fileimage />\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"upload()\" >upload</button>\n<br>\n<br>\n<div class=\"alert alert-success\" [class.d-none]=\"!done\" >Image {{imageName}} have been  uploaded</div>\n<div class=\"alert alert-danger\" [class.d-none]=\"!error\" >Error \"{{error}}\" uploading image {{imageName}} </div>\n\n<br>\n<br>\n<div *ngIf=\"images\" >\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <td>\n                    image\n                </td>\n                <td>\n                    createdAt\n                </td>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let image of images\">\n            <td><a [href]=\"image.image\" target=\"_blank\" ><img [src]=\"image.image\" width=\"150\" height=\"150\" /></a></td>\n            <td>{{image.created_at}}</td>\n        </tr>\n        </tbody>\n    </table>\n</div>\n<br>\n<br>\n<div *ngIf=\"articles\">\n\n<h3>My Articles</h3>\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <td>ID</td>\n                <td>User Name</td>\n                <td>Article</td>\n                <td>Created At</td>\n                <td>Updated At</td>\n                <td>Edit</td>\n                <td>Delete</td>\n            </tr>\n        </thead>\n        <tr *ngFor=\"let article of articles\">\n            <td>{{ article.id }}</td>\n            <td> {{ article.user_name }} </td>\n            <td>{{article.article}}</td>\n            <td>{{article.created_at}}</td>\n            <td>{{article.updated_at}}</td>\n            <td><a href=\"#\" class=\"link\" (click)=\"edit(article.id)\" >Edit</a></td>\n            <td><a href=\"#\" class=\"link\" (click)=\"delete(article.id)\">Delete</a></td>\n        </tr>\n    </table>\n\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token.service */ "./src/app/token.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile.service */ "./src/app/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(token, http, profile) {
        this.token = token;
        this.http = http;
        this.profile = profile;
        this.done = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getimages();
    };
    ProfileComponent.prototype.onChange = function (event) {
        this.selectedFile = event.target.files[0];
        this.imageName = event.target.files[0]['name'];
    };
    ProfileComponent.prototype.upload = function () {
        var _this = this;
        var fd = new FormData();
        fd.append('image', this.selectedFile, this.selectedFile.name);
        this.http.post("http://localhost:8000/api/uploadimage", fd, { reportProgress: true, observe: 'events' }).subscribe(function (e) { _this.done = true; console.log(e); _this.getimages(); }, function (error) { console.error(error); _this.error = error.statusText; });
    };
    ProfileComponent.prototype.getimages = function () {
        var _this = this;
        return this.profile.getimages().subscribe(function (data) { _this.images = data['images']; }, function (error) { _this.errorimages = error.statusText; console.error(error); });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _profile_service__WEBPACK_IMPORTED_MODULE_3__["ProfileService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/signup.service.ts":
/*!***********************************!*\
  !*** ./src/app/signup.service.ts ***!
  \***********************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
    }
    SignupService.prototype.signup = function (_a) {
        var name = _a.name, email = _a.email, password = _a.password, password_confirmation = _a.password_confirmation;
        return this.http.post("http://localhost:8000/api/auth/signup", { name: name, email: email, password: password, password_confirmation: password_confirmation }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    };
    SignupService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/signup.ts":
/*!***************************!*\
  !*** ./src/app/signup.ts ***!
  \***************************/
/*! exports provided: Signupform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signupform", function() { return Signupform; });
var Signupform = /** @class */ (function () {
    function Signupform(name, email, password, password_confirmation) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation;
    }
    return Signupform;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row jsutify-content-center\">\n  <div class=\"col-sm-8\">\n    <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n      {{errorMsg}}\n    </div>\n    <div class=\"alert alert-success\" *ngIf=\"success\">\n      {{success}}\n    </div>\n    <form #signupform=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Name</label>\n        <input type=\"email\" class=\"form-control\" name=\"name\" #nameM=\"ngModel\" [(ngModel)]=\"Signupform.name\" placeholder=\"Enter name\"\n          required>\n        <div class=\"text-danger\" [class.d-none]=\"nameM.valid  || nameM.untouched\">Name field is invalid</div>\n        <div class=\"text-danger\" [class.d-none]=\"!error.name\">{{error.name}}</div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Email address</label>\n        <input type=\"email\" class=\"form-control\" name=\"email\" #emailM=\"ngModel\" [(ngModel)]=\"Signupform.email\" placeholder=\"Enter email\"\n          required>\n        <div class=\"text-danger\" [class.d-none]=\"emailM.valid  || emailM.untouched\">Email field is invalid</div>\n        <div class=\"text-danger\" [class.d-none]=\"!error.email\">{{error.email}}</div>\n        </div>\n        \n      \n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"pass\" #passM=\"ngModel\" [(ngModel)]=\"Signupform.password\" placeholder=\"Password\"\n            required>\n          <div [class.d-none]=\"passM.valid || passM.untouched\" class=\"text-danger\">The password field is invalid</div>\n          <div class=\"text-danger\" [class.d-none]=\"!error.password\">{{error.password}}</div>\n          </div>\n\n        \n        <div class=\"form-group\">\n          <label for=\"exampleInputPassword1\">Password Confirmation</label>\n          <input type=\"password\" class=\"form-control\" name=\"cpass\" #cpassM=\"ngModel\" [(ngModel)]=\"Signupform.password_confirmation\" placeholder=\"Password\"\n            required>\n          <div [class.d-none]=\"cpassM.untouched || cpassM.value == passM.value\" class=\"text-danger\">The password confirmation field is invalid</div>\n          <div class=\"text-danger\" [class.d-none]=\"!error.password_confirmation\">{{error.password_confirmation}}</div>\n          \n\n        </div>\n        <button [disabled]=\"signupform.form.invalid || submitted || cpassM.value != passM.value\" type=\"submit\" class=\"btn btn-primary\">Sign Up</button>\n      \n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup */ "./src/app/signup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(signup) {
        this.signup = signup;
        this.submitted = false;
        this.errorMsg = "";
        this.error = "";
        this.success = "";
        this.Signupform = new _signup__WEBPACK_IMPORTED_MODULE_2__["Signupform"](this.name, this.email, this.password, this.password_confirmation);
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.signup.signup(this.Signupform).subscribe(function (data) { _this.success = data['success']; }, function (error) {
            console.error(error);
            _this.errorMsg = error.statusText;
            _this.error = error.error.errors;
        });
        this.submitted = true;
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_1__["SignupService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.service */ "./src/app/token.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(token) {
        this.token = token;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var toeknizedreq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + this.token.getToken()
            }
        });
        return next.handle(toeknizedreq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_token_service__WEBPACK_IMPORTED_MODULE_1__["TokenService"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "./src/app/token.service.ts":
/*!**********************************!*\
  !*** ./src/app/token.service.ts ***!
  \**********************************/
/*! exports provided: TokenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenService", function() { return TokenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenService = /** @class */ (function () {
    function TokenService(http) {
        this.http = http;
    }
    TokenService.prototype.handle = function (token) {
        this.setToken(token);
    };
    TokenService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    TokenService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    TokenService.prototype.removeToken = function () {
        return localStorage.removeItem('token');
    };
    TokenService.prototype.isTimeToRefresh = function () {
        var now = new Date();
        if (this.getToken()) {
            var decodedToken = this.payload(this.getToken());
            if (Math.round(now.getTime() / 1000) > (+decodedToken.exp) - 900) {
                return true;
            }
        }
        return false;
    };
    TokenService.prototype.isTokenExpired = function () {
        var now = new Date();
        if (this.getToken()) {
            var decodedToken = this.payload(this.getToken());
            var time = Math.round(now.getTime() / 1000);
            if (time > (+decodedToken.exp)) {
                return true;
            }
        }
        return false;
    };
    TokenService.prototype.isValid = function () {
        if (this.getToken()) {
            if (!this.isTokenExpired()) {
                var token = this.getToken();
                var payload = this.payload(token);
                if (payload) {
                    return (payload.iss == "http://localhost:8000/api/auth/login") ? true : false;
                }
            }
        }
        return false;
    };
    TokenService.prototype.payload = function (token) {
        var payload = token.split('.')[1];
        return this.decode(payload);
    };
    TokenService.prototype.decode = function (token) {
        var tok = JSON.parse(atob(token));
        return tok;
    };
    TokenService.prototype.isLoggedIn = function () {
        return this.isValid();
    };
    TokenService.prototype.refreshToken = function (token) {
        var _this = this;
        if (this.isTimeToRefresh()) {
            this.http.post('http://localhost:8000/api/auth/refresh', token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).subscribe(function (data) { _this.refreshedToken = data['access_token']; }, function (error) { console.error(error); });
            this.setToken(this.refreshedToken);
        }
    };
    TokenService.prototype.handleError = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
    };
    TokenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mahmud/code/ngblog/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map