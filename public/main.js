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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n<div class=\"container\">\r\n  <br>\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/BuyerRegister/BuyerRegister.component */ "./src/app/components/BuyerRegister/BuyerRegister.component.ts");
/* harmony import */ var _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/buyer/buyer.component */ "./src/app/components/buyer/buyer.component.ts");
/* harmony import */ var _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/seller/seller.component */ "./src/app/components/seller/seller.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/buyer/make-request/make-request.component */ "./src/app/components/buyer/make-request/make-request.component.ts");
/* harmony import */ var _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/buyer/buyer-account/buyer-account.component */ "./src/app/components/buyer/buyer-account/buyer-account.component.ts");
/* harmony import */ var _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/seller/seller-account/seller-account.component */ "./src/app/components/seller/seller-account/seller-account.component.ts");
/* harmony import */ var _components_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/SellerRegister/SellerRegister.component */ "./src/app/components/SellerRegister/SellerRegister.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/register.service */ "./src/app/services/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'BuyerRegister', component: _components_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: 'SellerRegister', component: _components_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_13__["SellerRegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'buyer', component: _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_7__["BuyerComponent"] },
    { path: 'seller', component: _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_8__["SellerComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_BuyerRegister_BuyerRegister_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_buyer_buyer_component__WEBPACK_IMPORTED_MODULE_7__["BuyerComponent"],
                _components_seller_seller_component__WEBPACK_IMPORTED_MODULE_8__["SellerComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_buyer_make_request_make_request_component__WEBPACK_IMPORTED_MODULE_10__["MakeRequestComponent"],
                _components_buyer_buyer_account_buyer_account_component__WEBPACK_IMPORTED_MODULE_11__["BuyerAccountComponent"],
                _components_seller_seller_account_seller_account_component__WEBPACK_IMPORTED_MODULE_12__["SellerAccountComponent"],
                _components_SellerRegister_SellerRegister_component__WEBPACK_IMPORTED_MODULE_13__["SellerRegisterComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_16__["FlashMessagesModule"].forRoot()
            ],
            providers: [_services_validate_service__WEBPACK_IMPORTED_MODULE_17__["ValidateService"], _services_register_service__WEBPACK_IMPORTED_MODULE_18__["RegisterService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/BuyerRegister/BuyerRegister.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/BuyerRegister/BuyerRegister.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\n\r\nform {\r\n  border: 3px solid #f1f1f1;\r\n  width: 650px;\r\n  height: 1220px;\r\n  position: absolute;\r\n  top: 75%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\n.header {\r\n  background-color: lightgray;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.registerbtn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\n.registerbtn:hover {\r\n  opacity:1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9CdXllclJlZ2lzdGVyL0J1eWVyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxHQUFHLHNCQUFzQixDQUFDOztBQUUxQjtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdDQUFnQztVQUFoQyxnQ0FBZ0M7O0NBRWpDOztBQUNELCtCQUErQjs7QUFDL0I7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSw0QkFBNEI7Q0FDN0I7O0FBRUQsNkJBQTZCOztBQUM3QjtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isb0JBQW9CO0NBQ3JCOztBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGNBQWM7Q0FDZjs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0UsMEJBQTBCO0VBQzFCLG9CQUFvQjtDQUNyQjs7QUFFRCxnREFBZ0Q7O0FBQ2hEO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLFVBQVU7Q0FDWDs7QUFFRCxvQ0FBb0M7O0FBQ3BDO0VBQ0Usa0JBQWtCO0NBQ25COztBQUVELDhFQUE4RTs7QUFDOUU7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9CdXllclJlZ2lzdGVyL0J1eWVyUmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge2JveC1zaXppbmc6IGJvcmRlci1ib3h9XHJcblxyXG5mb3JtIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZjFmMWYxO1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBoZWlnaHQ6IDEyMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3NSU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcblxyXG59XHJcbi8qIEFkZCBwYWRkaW5nIHRvIGNvbnRhaW5lcnMgKi9cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4vKiBGdWxsLXdpZHRoIGlucHV0IGZpZWxkcyAqL1xyXG5pbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSAsIGlucHV0W3R5cGU9dGVsXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBtYXJnaW46IDVweCAwIDIycHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi8qIE92ZXJ3cml0ZSBkZWZhdWx0IHN0eWxlcyBvZiBociAqL1xyXG5ociB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMTtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4vKiBTZXQgYSBzdHlsZSBmb3IgdGhlIHN1Ym1pdC9yZWdpc3RlciBidXR0b24gKi9cclxuLnJlZ2lzdGVyYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG5cclxuLnJlZ2lzdGVyYnRuOmhvdmVyIHtcclxuICBvcGFjaXR5OjE7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJsdWUgdGV4dCBjb2xvciB0byBsaW5rcyAqL1xyXG5hIHtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG5cclxuLyogU2V0IGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBjZW50ZXIgdGhlIHRleHQgb2YgdGhlIFwic2lnbiBpblwiIHNlY3Rpb24gKi9cclxuLnNpZ25pbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/BuyerRegister/BuyerRegister.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/BuyerRegister/BuyerRegister.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"container\">\r\n      <br><br><br><br><br><br>\r\n      <br><br><br><br><br><br>\r\n      <br><br><br><br><br><br>\r\n    <div class =\"container header\">\r\n\r\n    <h1>Buyer's Register</h1>\r\n    <p>Please fill in this form to create an account.</p>\r\n    </div>\r\n\r\n    <hr>\r\n\r\n    <label for=\"email\"><b>Email</b></label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Enter Email\"  required>\r\n\r\n    <label for=\"psw\"><b>Password</b></label>\r\n    <input type=\"password\" placeholder=\"Enter Password\" [(ngModel)]=\"password\" name=\"psw\" required>\r\n\r\n    <label for=\"psw-repeat\"><b>Repeat Password</b></label>\r\n    <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\r\n    <hr>\r\n\r\n    <label for=\"firstName\"><b>First Name</b></label>\r\n    <input type=\"text\" placeholder=\"Enter First Name\" [(ngModel)]=\"first_name\" name=\"first_name\" required>\r\n\r\n    <label for=\"lastName\"><b>Last Name</b></label>\r\n    <input type=\"text\" placeholder=\"Enter Last Name\" [(ngModel)]=\"last_name\" name=\"last_name\" required>\r\n\r\n    <label for=\"organizationName\"><b>Organization Name</b></label>\r\n    <input type=\"text\" placeholder=\"Enter Organization Name\" name=\"organizationName\" required>\r\n\r\n    <label for=\"phoneNum\"><b>Phone </b></label><br>\r\n    <input type=\"tel\" placeholder=\"Enter phone number\" name=\"phoneNum\" required>\r\n\r\n    <hr>\r\n\r\n    <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n    <button type=\"submit\" class=\"registerbtn\">Register</button>\r\n  </div>\r\n\r\n  <div class=\"container signin\">\r\n    <p>Already have an account? <a href=\"#\">Sign in</a>.</p>\r\n    <br>\r\n    <p>Are you a seller? <a href=\"/SellerRegister\">Register here</a>.</p>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/components/BuyerRegister/BuyerRegister.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/BuyerRegister/BuyerRegister.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
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




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(validateService, flashMessage, 
    /*private registerService: RegisterService*/
    router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.OnBuyerRegisterSubmit = function () {
        var buyer = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password
        };
        // RequiredFields
        if (!this.validateService.ValidateBuyerRegister(buyer)) {
            this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 10000 });
            return false;
        }
        // ValidateEmail
        if (!this.validateService.validateEmail(buyer.email)) {
            this.flashMessage.show('Invalid Email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        // Register Buyer
        /*    this.registerService.RegisterBuyer(buyer).subscribe(data => {
              if (data.success) {
                this.flashMessage.show('You are now Register', {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['/login']);
              } else {
                this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
                this.router.navigate(['/BuyerRegister']);
              }
            });*/
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./BuyerRegister.component.html */ "./src/app/components/BuyerRegister/BuyerRegister.component.html"),
            styles: [__webpack_require__(/*! ./BuyerRegister.component.css */ "./src/app/components/BuyerRegister/BuyerRegister.component.css")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_1__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/SellerRegister/SellerRegister.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/SellerRegister/SellerRegister.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {box-sizing: border-box}\r\n\r\nform {\r\n  border: 3px solid #f1f1f1;\r\n  width: 650px;\r\n  height: 1220px;\r\n  position: absolute;\r\n  top: 75%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n}\r\n\r\n.header {\r\n  background-color: lightgray;\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] , input[type=tel] {\r\n  width: 100%;\r\n  padding: 15px;\r\n  margin: 5px 0 22px 0;\r\n  display: inline-block;\r\n  border: none;\r\n  background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus, input[type=password]:focus {\r\n  background-color: #ddd;\r\n  outline: none;\r\n}\r\n\r\n/* Overwrite default styles of hr */\r\n\r\nhr {\r\n  border: 1px solid #f1f1f1;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n/* Set a style for the submit/register button */\r\n\r\n.registerbtn {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 16px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n  opacity: 0.9;\r\n}\r\n\r\n.registerbtn:hover {\r\n  opacity:1;\r\n}\r\n\r\n/* Add a blue text color to links */\r\n\r\na {\r\n  color: dodgerblue;\r\n}\r\n\r\n/* Set a grey background color and center the text of the \"sign in\" section */\r\n\r\n.signin {\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9TZWxsZXJSZWdpc3Rlci9TZWxsZXJSZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFCO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0NBQWdDO1VBQWhDLGdDQUFnQzs7Q0FFakM7O0FBQ0QsK0JBQStCOztBQUMvQjtFQUNFLGNBQWM7Q0FDZjs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3Qjs7QUFFRCw2QkFBNkI7O0FBQzdCO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztDQUNmOztBQUVELG9DQUFvQzs7QUFDcEM7RUFDRSwwQkFBMEI7RUFDMUIsb0JBQW9CO0NBQ3JCOztBQUVELGdEQUFnRDs7QUFDaEQ7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsVUFBVTtDQUNYOztBQUVELG9DQUFvQzs7QUFDcEM7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQsOEVBQThFOztBQUM5RTtFQUNFLDBCQUEwQjtFQUMxQixtQkFBbUI7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL1NlbGxlclJlZ2lzdGVyL1NlbGxlclJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94fVxyXG5cclxuZm9ybSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcclxuICB3aWR0aDogNjUwcHg7XHJcbiAgaGVpZ2h0OiAxMjIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNzUlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cclxufVxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0gLCBpbnB1dFt0eXBlPXRlbF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgbWFyZ2luOiA1cHggMCAyMnB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzLCBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4vKiBPdmVyd3JpdGUgZGVmYXVsdCBzdHlsZXMgb2YgaHIgKi9cclxuaHIge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjE7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLyogU2V0IGEgc3R5bGUgZm9yIHRoZSBzdWJtaXQvcmVnaXN0ZXIgYnV0dG9uICovXHJcbi5yZWdpc3RlcmJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5yZWdpc3RlcmJ0bjpob3ZlciB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcblxyXG4vKiBBZGQgYSBibHVlIHRleHQgY29sb3IgdG8gbGlua3MgKi9cclxuYSB7XHJcbiAgY29sb3I6IGRvZGdlcmJsdWU7XHJcbn1cclxuXHJcbi8qIFNldCBhIGdyZXkgYmFja2dyb3VuZCBjb2xvciBhbmQgY2VudGVyIHRoZSB0ZXh0IG9mIHRoZSBcInNpZ24gaW5cIiBzZWN0aW9uICovXHJcbi5zaWduaW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/SellerRegister/SellerRegister.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/SellerRegister/SellerRegister.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form >\r\n    <div class=\"container\">\r\n      <div class =\"container header\">\r\n      <h1>Seller's Register</h1>\r\n      <p>Please fill in this form to create an account.</p>\r\n      </div>\r\n\r\n      <hr>\r\n\r\n      <label for=\"email\"><b>Email</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n      <label for=\"psw\"><b>Password</b></label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n\r\n      <label for=\"psw-repeat\"><b>Repeat Password</b></label>\r\n      <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\r\n      <hr>\r\n\r\n      <label for=\"firstName\"><b>First Name</b></label>\r\n      <input type=\"text\" placeholder=\"Enter First Name\" name=\"firstName\" required>\r\n\r\n      <label for=\"lastName\"><b>Last Name</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Last Name\" name=\"lastName\" required>\r\n\r\n      <label for=\"organizationName\"><b>Organization Name</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Organization Name\" name=\"organizationName\" required>\r\n\r\n      <label for=\"phoneNum\"><b>Phone </b></label><br>\r\n      <input type=\"tel\" placeholder=\"Enter phone number\" name=\"phoneNum\" required>\r\n\r\n      <hr>\r\n\r\n      <p>By creating an account you agree to our <a href=\"#\">Terms & Privacy</a>.</p>\r\n      <button type=\"submit\" class=\"registerbtn\">Register</button>\r\n    </div>\r\n\r\n    <div class=\"container signin\">\r\n      <p>Already have an account? <a href=\"#\">Sign in</a>.</p>\r\n      <br>\r\n      <p>Are you a Buyer? <a href=\"#\">Register here</a>.</p>\r\n    </div>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/components/SellerRegister/SellerRegister.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/SellerRegister/SellerRegister.component.ts ***!
  \***********************************************************************/
/*! exports provided: SellerRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerRegisterComponent", function() { return SellerRegisterComponent; });
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

var SellerRegisterComponent = /** @class */ (function () {
    function SellerRegisterComponent() {
    }
    SellerRegisterComponent.prototype.ngOnInit = function () {
    };
    SellerRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./SellerRegister.component.html */ "./src/app/components/SellerRegister/SellerRegister.component.html"),
            styles: [__webpack_require__(/*! ./SellerRegister.component.css */ "./src/app/components/SellerRegister/SellerRegister.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellerRegisterComponent);
    return SellerRegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvYnV5ZXItYWNjb3VudC9idXllci1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  buyer-account works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/buyer/buyer-account/buyer-account.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/buyer/buyer-account/buyer-account.component.ts ***!
  \***************************************************************************/
/*! exports provided: BuyerAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerAccountComponent", function() { return BuyerAccountComponent; });
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

var BuyerAccountComponent = /** @class */ (function () {
    function BuyerAccountComponent() {
    }
    BuyerAccountComponent.prototype.ngOnInit = function () {
    };
    BuyerAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer-account',
            template: __webpack_require__(/*! ./buyer-account.component.html */ "./src/app/components/buyer/buyer-account/buyer-account.component.html"),
            styles: [__webpack_require__(/*! ./buyer-account.component.css */ "./src/app/components/buyer/buyer-account/buyer-account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyerAccountComponent);
    return BuyerAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/buyer.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvYnV5ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/buyer/buyer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  buyer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/buyer/buyer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/buyer/buyer.component.ts ***!
  \*****************************************************/
/*! exports provided: BuyerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyerComponent", function() { return BuyerComponent; });
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

var BuyerComponent = /** @class */ (function () {
    function BuyerComponent() {
    }
    BuyerComponent.prototype.ngOnInit = function () {
    };
    BuyerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buyer',
            template: __webpack_require__(/*! ./buyer.component.html */ "./src/app/components/buyer/buyer.component.html"),
            styles: [__webpack_require__(/*! ./buyer.component.css */ "./src/app/components/buyer/buyer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyerComponent);
    return BuyerComponent;
}());



/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV5ZXIvbWFrZS1yZXF1ZXN0L21ha2UtcmVxdWVzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  make-request works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/buyer/make-request/make-request.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/buyer/make-request/make-request.component.ts ***!
  \*************************************************************************/
/*! exports provided: MakeRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeRequestComponent", function() { return MakeRequestComponent; });
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

var MakeRequestComponent = /** @class */ (function () {
    function MakeRequestComponent() {
    }
    MakeRequestComponent.prototype.ngOnInit = function () {
    };
    MakeRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-make-request',
            template: __webpack_require__(/*! ./make-request.component.html */ "./src/app/components/buyer/make-request/make-request.component.html"),
            styles: [__webpack_require__(/*! ./make-request.component.css */ "./src/app/components/buyer/make-request/make-request.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MakeRequestComponent);
    return MakeRequestComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.page-wrap {\r\n  min-height: 100%;\r\n  /* equal to footer height */\r\n  margin-bottom: -142px;\r\n}\r\n.page-wrap:after {\r\n  content: \"\";\r\n  display: block;\r\n}\r\n.footer, .page-wrap:after {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  height: 80px;\r\n  width: 100%;\r\n  background-color: rgb(70, 67, 67);\r\n  color: white;\r\n  text-align: center;\r\n\r\n}\r\na {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0NBQ2hCO0FBSUQ7RUFDRSxnQkFBZ0I7RUFDaEIsUUFBUTtFQUNSLFVBQVU7RUFDVixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUJBQW1COztDQUVwQjtBQUNEO0VBQ0UsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBhZ2Utd3JhcCB7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICAvKiBlcXVhbCB0byBmb290ZXIgaGVpZ2h0ICovXHJcbiAgbWFyZ2luLWJvdHRvbTogLTE0MnB4O1xyXG59XHJcbi5wYWdlLXdyYXA6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvb3RlciwgLnBhZ2Utd3JhcDphZnRlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzAsIDY3LCA2Nyk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-wrap\">\r\n\r\n\r\n\r\n  </div>\r\n<footer class=\"footer\">\r\n        <div class=\"container\">\r\n\r\n        <div class=\"footer-copyright py-3\">© 2018 Copyright:\r\n            <a href=\"https://gex.com/about/\"> gex.com</a>\r\n          </div>\r\n        </div>\r\n</footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.jumbotron{\r\n\r\n\r\n    width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTs7O0lBR0ksWUFBWTtDQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5qdW1ib3Ryb257XHJcblxyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <div class=\"jumbotron\">\r\n        <div class=\"container\">\r\n          <h1>Bootstrap Tutorial</h1>\r\n          <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
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
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\nform {\r\n  border: 3px solid #f1f1f1;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%,-50%);\r\n          transform: translate(-50%,-50%);\r\n\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 100%;\r\n  padding: 12px 20px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 100%;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n  width: auto;\r\n  padding: 10px 18px;\r\n  background-color: #f44336;\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n.imgcontainer {\r\n  text-align: center;\r\n  margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Avatar image */\r\n\r\nimg.avatar {\r\n  width: 40%;\r\n  margin: 34px;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n  padding: 16px;\r\n\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n  span.psw {\r\n      display: block;\r\n      float: none;\r\n  }\r\n  .cancelbtn {\r\n      width: 100%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0NBQWdDO1VBQWhDLGdDQUFnQzs7Q0FFakM7O0FBRUQsdUJBQXVCOztBQUN2QjtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0NBQ3hCOztBQUVELGlDQUFpQzs7QUFDakM7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0NBQ2I7O0FBRUQsb0NBQW9DOztBQUNwQztFQUNFLGFBQWE7Q0FDZDs7QUFFRCw2Q0FBNkM7O0FBQzdDO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwwQkFBMEI7Q0FDM0I7O0FBRUQsbURBQW1EOztBQUNuRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7Q0FDdkI7O0FBRUQsa0JBQWtCOztBQUNsQjtFQUNFLFdBQVc7RUFDWCxhQUFhO0NBQ2Q7O0FBRUQsK0JBQStCOztBQUMvQjtFQUNFLGNBQWM7O0NBRWY7O0FBRUQsZ0NBQWdDOztBQUNoQztFQUNFLGFBQWE7RUFDYixrQkFBa0I7Q0FDbkI7O0FBRUQscUVBQXFFOztBQUNyRTtFQUNFO01BQ0ksZUFBZTtNQUNmLFlBQVk7R0FDZjtFQUNEO01BQ0ksWUFBWTtHQUNmO0NBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmZvcm0ge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG5cclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGhvdmVyIGVmZmVjdCBmb3IgYnV0dG9ucyAqL1xyXG5idXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLyogRXh0cmEgc3R5bGUgZm9yIHRoZSBjYW5jZWwgYnV0dG9uIChyZWQpICovXHJcbi5jYW5jZWxidG4ge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xyXG59XHJcblxyXG4vKiBDZW50ZXIgdGhlIGF2YXRhciBpbWFnZSBpbnNpZGUgdGhpcyBjb250YWluZXIgKi9cclxuLmltZ2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMjRweCAwIDEycHggMDtcclxufVxyXG5cclxuLyogQXZhdGFyIGltYWdlICovXHJcbmltZy5hdmF0YXIge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgbWFyZ2luOiAzNHB4O1xyXG59XHJcblxyXG4vKiBBZGQgcGFkZGluZyB0byBjb250YWluZXJzICovXHJcbi5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcblxyXG59XHJcblxyXG4vKiBUaGUgXCJGb3Jnb3QgcGFzc3dvcmRcIiB0ZXh0ICovXHJcbnNwYW4ucHN3IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBzdHlsZXMgZm9yIHNwYW4gYW5kIGNhbmNlbCBidXR0b24gb24gZXh0cmEgc21hbGwgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gIHNwYW4ucHN3IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxuICAuY2FuY2VsYnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <form class=\"col-md-4 col-md-offset-4\">\r\n    <div class=\"imgcontainer\">\r\n      <img src=\"assets\\gexLogo.png\" alt=\"Avatar\" class=\"avatar\">\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <label for=\"uname\"><b>Username</b></label>\r\n      <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\" required>\r\n\r\n      <label for=\"psw\"><b>Password</b></label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n\r\n      <button type=\"submit\">Login</button>\r\n      <label>\r\n        <input type=\"checkbox\" checked=\"checked\" name=\"remember\"> Remember me\r\n      </label>\r\n    </div>\r\n\r\n    <div class=\"container\" style=\"background-color:#f1f1f1\">\r\n      <button type=\"button\" class=\"cancelbtn\">Cancel</button>\r\n      <span class=\"psw\">Forgot <a href=\"#\">password?</a></span>\r\n    </div>\r\n  </form>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand{\r\n  max-height: 40px;\r\n  max-width: 30%;\r\n  overflow: visible;\r\n  padding-top: 0;\r\n  padding-bottom: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyLWJyYW5ke1xyXG4gIG1heC1oZWlnaHQ6IDQwcHg7XHJcbiAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\"><img src=\"assets\\gexLogo.png\" style=\"max-width: 150px; margin-top: -14px;\" class=\"img-responsive\"></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor03\" aria-controls=\"navbarColor03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor03\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Features</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\">About</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\r\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsbGVyL3NlbGxlci1hY2NvdW50L3NlbGxlci1hY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  seller-account works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/seller/seller-account/seller-account.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/seller/seller-account/seller-account.component.ts ***!
  \******************************************************************************/
/*! exports provided: SellerAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerAccountComponent", function() { return SellerAccountComponent; });
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

var SellerAccountComponent = /** @class */ (function () {
    function SellerAccountComponent() {
    }
    SellerAccountComponent.prototype.ngOnInit = function () {
    };
    SellerAccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller-account',
            template: __webpack_require__(/*! ./seller-account.component.html */ "./src/app/components/seller/seller-account/seller-account.component.html"),
            styles: [__webpack_require__(/*! ./seller-account.component.css */ "./src/app/components/seller/seller-account/seller-account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellerAccountComponent);
    return SellerAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/seller/seller.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/seller/seller.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsbGVyL3NlbGxlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/seller/seller.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/seller/seller.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  seller works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/seller/seller.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/seller/seller.component.ts ***!
  \*******************************************************/
/*! exports provided: SellerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerComponent", function() { return SellerComponent; });
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

var SellerComponent = /** @class */ (function () {
    function SellerComponent() {
    }
    SellerComponent.prototype.ngOnInit = function () {
    };
    SellerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-seller',
            template: __webpack_require__(/*! ./seller.component.html */ "./src/app/components/seller/seller.component.html"),
            styles: [__webpack_require__(/*! ./seller.component.css */ "./src/app/components/seller/seller.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellerComponent);
    return SellerComponent;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
    }
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.ValidateBuyerRegister = function (buyer) {
        if (buyer.first_name == undefined || buyer.last_name == undefined || buyer.email == undefined
            || buyer.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ronip\Dropbox\FALL 2018\CSE485\MEAN\GEX\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map