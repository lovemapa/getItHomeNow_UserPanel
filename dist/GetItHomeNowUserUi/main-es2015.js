(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aos.ts":
/*!************************!*\
  !*** ./src/app/aos.ts ***!
  \************************/
/*! exports provided: aos, AosToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aos", function() { return aos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AosToken", function() { return AosToken; });
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const aos = aos__WEBPACK_IMPORTED_MODULE_0__;
// This makes it possible to refer to AOS in Angular, see below
const AosToken = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('AOS');


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/full/full.component */ "./src/app/layout/full/full.component.ts");
/* harmony import */ var _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/blank/blank.component */ "./src/app/layout/blank/blank.component.ts");
/* harmony import */ var _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentPackage/advertisments/advertisments.component */ "./src/app/componentPackage/advertisments/advertisments.component.ts");
/* harmony import */ var _layout_blank_loginandsignup_blank_loginandsignup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/blank-loginandsignup/blank-loginandsignup.component */ "./src/app/layout/blank-loginandsignup/blank-loginandsignup.component.ts");
/* harmony import */ var _componentPackage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentPackage/login-signup/login-signup.component */ "./src/app/componentPackage/login-signup/login-signup.component.ts");
/* harmony import */ var _componentPackage_profileshow_profileshow_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentPackage/profileshow/profileshow.component */ "./src/app/componentPackage/profileshow/profileshow.component.ts");
/* harmony import */ var _componentPackage_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentPackage/delivery/delivery.component */ "./src/app/componentPackage/delivery/delivery.component.ts");











const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: _layout_full_full_component__WEBPACK_IMPORTED_MODULE_2__["FullComponent"]
    },
    {
        path: '',
        component: _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"],
        children: [
            { path: 'promotions', component: _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_4__["AdvertismentsComponent"] },
            { path: 'profile/setting', component: _componentPackage_profileshow_profileshow_component__WEBPACK_IMPORTED_MODULE_7__["ProfileshowComponent"] },
            { path: 'delivery', component: _componentPackage_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_8__["DeliveryComponent"] },
        ]
    },
    {
        path: '',
        component: _layout_blank_loginandsignup_blank_loginandsignup_component__WEBPACK_IMPORTED_MODULE_5__["BlankLoginandsignupComponent"],
        children: [
            { path: 'login', component: _componentPackage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_6__["LoginSignupComponent"] },
        ]
    },
    { path: '**', redirectTo: 'home' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aos */ "./src/app/aos.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");





class AppComponent {
    constructor(aos) {
        this.title = 'GetItHomeNowUserUi';
        // CommonMethods.showLog(this.Tag,'Window Resolution :'+window.innerWidth)
        aos.init();
        aos.init({ disable: 'tablet' });
    }
    ngOnInit() {
    }
    backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_aos__WEBPACK_IMPORTED_MODULE_1__["AosToken"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["id", "myBtn", "title", "Go to top", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up"], ["bdOpacity", "0.1", "bdColor", "rgba(209, 127, 161, 0.26)", "size", "large", "color", "#ff586b", "type", "timer", 3, "fullScreen"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.backToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ngx-spinner", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"]], styles: ["#myBtn[_ngcontent-%COMP%] {\r\n    display: none;\r\n    position: fixed;\r\n    bottom: 20px;\r\n    right: 30px;\r\n    z-index: 99;\r\n    font-size: 18px;\r\n    border: none;\r\n    outline: none;\r\n    background-color: #e92330;\r\n    color: white;\r\n    cursor: pointer;\r\n    \r\n    border-radius: 4px;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 500%;\r\n    overflow: hidden;\r\n}\r\n#myBtn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{-webkit-animation: move 0.8s infinite alternate;animation: move 0.8s infinite alternate;}\r\n@-webkit-keyframes move {\r\n    0%{transform: translateY(0px);}\r\n    50%{transform: translateY(2px);}\r\n    100%{transform: translateY(0px);}\r\n\r\n}\r\n@keyframes move {\r\n    0%{transform: translateY(0px);}\r\n    50%{transform: translateY(2px);}\r\n    100%{transform: translateY(0px);}\r\n\r\n}\r\n#myBtn[_ngcontent-%COMP%]:hover {\r\n    background-color: #d6504f8f;\r\n    transform: rotate(360deg);\r\n}\r\n#myBtn[_ngcontent-%COMP%]:hover {}\r\n.lightSpeedIn[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: lightSpeedIn;\r\n    animation-name: lightSpeedIn;\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n}\r\n@-webkit-keyframes lightSpeedIn {\r\n    0% {\r\n        transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n        opacity: 0;\r\n    }\r\n    60% {\r\n        transform: skewX(20deg);\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        transform: skewX(-5deg);\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: none;\r\n        opacity: 1;\r\n    }\r\n}\r\n@keyframes lightSpeedIn {\r\n    0% {\r\n        transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n        opacity: 0;\r\n    }\r\n    60% {\r\n        transform: skewX(20deg);\r\n        opacity: 1;\r\n    }\r\n    80% {\r\n        transform: skewX(-5deg);\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: none;\r\n        opacity: 1;\r\n    }\r\n}\r\n.lightSpeedOut[_ngcontent-%COMP%] {\r\n    -webkit-animation-name: lightSpeedOut;\r\n    animation-name: lightSpeedOut;\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n    display: none\r\n}\r\n@-webkit-keyframes lightSpeedOut {\r\n    0% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate3d(100%, 0, 0) skewX(30deg);\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes lightSpeedOut {\r\n    0% {\r\n        opacity: 1;\r\n    }\r\n    100% {\r\n        transform: translate3d(100%, 0, 0) skewX(30deg);\r\n        opacity: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0EsU0FBUywrQ0FBdUMsQ0FBdkMsdUNBQXVDLENBQUM7QUFFakQ7SUFDSSxHQUFHLDBCQUEwQixDQUFDO0lBQzlCLElBQUksMEJBQTBCLENBQUM7SUFDL0IsS0FBSywwQkFBMEIsQ0FBQzs7QUFFcEM7QUFMQTtJQUNJLEdBQUcsMEJBQTBCLENBQUM7SUFDOUIsSUFBSSwwQkFBMEIsQ0FBQztJQUMvQixLQUFLLDBCQUEwQixDQUFDOztBQUVwQztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLHlCQUF5QjtBQUM3QjtBQUVBLGNBQWM7QUFFZDtJQUNJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMkNBQTJDO0lBQzNDLG1DQUFtQztJQUNuQyw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLGlDQUFpQztJQUNqQyx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJO1FBRUksZ0RBQWdEO1FBQ2hELFVBQVU7SUFDZDtJQUNBO1FBRUksdUJBQXVCO1FBQ3ZCLFVBQVU7SUFDZDtJQUNBO1FBRUksdUJBQXVCO1FBQ3ZCLFVBQVU7SUFDZDtJQUNBO1FBRUksZUFBZTtRQUNmLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUVJLGdEQUFnRDtRQUNoRCxVQUFVO0lBQ2Q7SUFDQTtRQUVJLHVCQUF1QjtRQUN2QixVQUFVO0lBQ2Q7SUFDQTtRQUVJLHVCQUF1QjtRQUN2QixVQUFVO0lBQ2Q7SUFDQTtRQUVJLGVBQWU7UUFDZixVQUFVO0lBQ2Q7QUFDSjtBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDZCQUE2QjtJQUM3QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QjtBQUNKO0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBRUksK0NBQStDO1FBQy9DLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBRUksK0NBQStDO1FBQy9DLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbXlCdG4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5MjMzMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIHBhZGRpbmc6IDE1cHg7ICovXHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiNteUJ0biBpe2FuaW1hdGlvbjogbW92ZSAwLjhzIGluZmluaXRlIGFsdGVybmF0ZTt9XHJcblxyXG5Aa2V5ZnJhbWVzIG1vdmUge1xyXG4gICAgMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7fVxyXG4gICAgNTAle3RyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO31cclxuICAgIDEwMCV7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7fVxyXG5cclxufVxyXG4jbXlCdG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2NTA0ZjhmO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxufVxyXG5cclxuI215QnRuOmhvdmVyIHt9XHJcblxyXG4ubGlnaHRTcGVlZEluIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRJbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW47XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICA2MCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDgwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGlnaHRTcGVlZEluIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKC0zMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIDYwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgODAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuLmxpZ2h0U3BlZWRPdXQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZE91dDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgbGlnaHRTcGVlZE91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsaWdodFNwZWVkT3V0IHtcclxuICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_aos__WEBPACK_IMPORTED_MODULE_1__["AosToken"]]
            }] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _material_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material */ "./src/app/material/material.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./aos */ "./src/app/aos.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentPackage/navbar/navbar.component */ "./src/app/componentPackage/navbar/navbar.component.ts");
/* harmony import */ var _componentPackage_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentPackage/home/home.component */ "./src/app/componentPackage/home/home.component.ts");
/* harmony import */ var _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentPackage/advertisments/advertisments.component */ "./src/app/componentPackage/advertisments/advertisments.component.ts");
/* harmony import */ var _componentPackage_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentPackage/contactus/contactus.component */ "./src/app/componentPackage/contactus/contactus.component.ts");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/full/full.component */ "./src/app/layout/full/full.component.ts");
/* harmony import */ var _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentPackage/footer/footer.component */ "./src/app/componentPackage/footer/footer.component.ts");
/* harmony import */ var _componentPackage_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentPackage/faq/faq.component */ "./src/app/componentPackage/faq/faq.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/blank/blank.component */ "./src/app/layout/blank/blank.component.ts");
/* harmony import */ var _componentPackage_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentPackage/aboutus/aboutus.component */ "./src/app/componentPackage/aboutus/aboutus.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _layout_blank_loginandsignup_blank_loginandsignup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/blank-loginandsignup/blank-loginandsignup.component */ "./src/app/layout/blank-loginandsignup/blank-loginandsignup.component.ts");
/* harmony import */ var _componentPackage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentPackage/login-signup/login-signup.component */ "./src/app/componentPackage/login-signup/login-signup.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _componentPackage_profileshow_profileshow_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentPackage/profileshow/profileshow.component */ "./src/app/componentPackage/profileshow/profileshow.component.ts");
/* harmony import */ var _componentPackage_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentPackage/delivery/delivery.component */ "./src/app/componentPackage/delivery/delivery.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var agm_direction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! agm-direction */ "./node_modules/agm-direction/__ivy_ngcc__/fesm2015/agm-direction.js");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _aos__WEBPACK_IMPORTED_MODULE_7__["AosToken"], useValue: _aos__WEBPACK_IMPORTED_MODULE_7__["aos"] },
        // { provide: lo, useClass: HashLocationStrategy },
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__["CookieService"],
        _agm_core__WEBPACK_IMPORTED_MODULE_26__["GoogleMapsAPIWrapper"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _material_material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBMrKj9G0-f3QPF-P1D99iBChHT-PIICwo',
                libraries: ["places", "geometry"]
            }),
            agm_direction__WEBPACK_IMPORTED_MODULE_27__["AgmDirectionModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
        _componentPackage_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_11__["AdvertismentsComponent"],
        _componentPackage_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"],
        _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"],
        _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _componentPackage_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FaqComponent"],
        _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_17__["BlankComponent"],
        _componentPackage_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_18__["AboutusComponent"],
        _layout_blank_loginandsignup_blank_loginandsignup_component__WEBPACK_IMPORTED_MODULE_21__["BlankLoginandsignupComponent"],
        _componentPackage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_22__["LoginSignupComponent"],
        _componentPackage_profileshow_profileshow_component__WEBPACK_IMPORTED_MODULE_24__["ProfileshowComponent"],
        _componentPackage_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_25__["DeliveryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _material_material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"], agm_direction__WEBPACK_IMPORTED_MODULE_27__["AgmDirectionModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                    _componentPackage_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_11__["AdvertismentsComponent"],
                    _componentPackage_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_12__["ContactusComponent"],
                    _layout_full_full_component__WEBPACK_IMPORTED_MODULE_13__["FullComponent"],
                    _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _componentPackage_faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FaqComponent"],
                    _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_17__["BlankComponent"],
                    _componentPackage_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_18__["AboutusComponent"],
                    _layout_blank_loginandsignup_blank_loginandsignup_component__WEBPACK_IMPORTED_MODULE_21__["BlankLoginandsignupComponent"],
                    _componentPackage_login_signup_login_signup_component__WEBPACK_IMPORTED_MODULE_22__["LoginSignupComponent"],
                    _componentPackage_profileshow_profileshow_component__WEBPACK_IMPORTED_MODULE_24__["ProfileshowComponent"],
                    _componentPackage_delivery_delivery_component__WEBPACK_IMPORTED_MODULE_25__["DeliveryComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _material_material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_19__["NgxSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_26__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyBMrKj9G0-f3QPF-P1D99iBChHT-PIICwo',
                        libraries: ["places", "geometry"]
                    }),
                    agm_direction__WEBPACK_IMPORTED_MODULE_27__["AgmDirectionModule"],
                ],
                providers: [
                    { provide: _aos__WEBPACK_IMPORTED_MODULE_7__["AosToken"], useValue: _aos__WEBPACK_IMPORTED_MODULE_7__["aos"] },
                    // { provide: lo, useClass: HashLocationStrategy },
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__["CookieService"],
                    _agm_core__WEBPACK_IMPORTED_MODULE_26__["GoogleMapsAPIWrapper"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/backendServices/userpanel-service.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/backendServices/userpanel-service.service.ts ***!
  \**************************************************************/
/*! exports provided: UserpanelServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserpanelServiceService", function() { return UserpanelServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utillpackage/constant */ "./src/app/utillpackage/constant.ts");
/* harmony import */ var _utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utillpackage/utillpackage/my-cookies */ "./src/app/utillpackage/utillpackage/my-cookies.ts");
/* harmony import */ var _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modalPackages/cookies */ "./src/app/modalPackages/cookies.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");










class UserpanelServiceService {
    constructor(http, cookiesServices) {
        this.http = http;
        this.cookiesServices = cookiesServices;
        this.getAdvertisementUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].BASEURL + "user/getAdvertisments?name=";
        this.contactUsUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].BASEURL + "user/makeConsultant";
        this.signupUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].BASEURL + "user/register";
        this.loginUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].BASEURL + "user/login";
        this.userForgotPasswordUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].BASEURL + "user/forget-password";
        this.updateUSerPwdUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].BASEURL + "user/updateProfile";
        this.profilePic = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentProfilePic = this.profilePic.asObservable();
        this.profileName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentProfileName = this.profileName.asObservable();
    }
    setCurrentProfilePic(profilePicUrl) {
        this.profilePic.next(profilePicUrl);
    }
    setCurrentProfileName(profileName) {
        this.profileName.next(profileName);
    }
    getCurrentProfilePic() {
        return this.profilePic.asObservable();
    }
    /**
      * mw=ethod to create new advertisement
      * @param searchString string to search in advertisements
    */
    getAdvertisement(searchString, pageNo) {
        //for setting token in headers
        let searchurl = '';
        searchurl = this.getAdvertisementUrl + searchString + "&page=" + pageNo;
        ;
        return this.http.get(searchurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => { return data; }));
    }
    /**
     * method to send contact us detail via mail
     * @param contactUsData
     */
    contactUs(contactUsData) {
        return this.http.post(this.contactUsUrl, contactUsData);
    }
    /**
     * method to send contact us detail via mail
     * @param contactUsData
     */
    signUp(signupData) {
        return this.http.post(this.signupUrl, signupData);
    }
    /**
     * method to login for admin
     * @param username username to login
     * @param password password to login
     */
    userLoginAPI(userData) {
        let data = {};
        data.email = userData.email;
        data.password = userData.password;
        return this.http.post(this.loginUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            // login successful if there's a token in thedata response
            if (response.success && response.user.token) {
                _utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_5__["MyCookies"].saveLoginDataInCookies(this.cookiesServices, new _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__["CookiesModel"](response.user));
                // this.profilePic.next(this.cookiesServices.get('profilePic'));
            }
            return response;
        }));
    }
    /**
    * method to set token for header
    */
    setHeader() {
        this.userId = _utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_5__["MyCookies"].getId(this.cookiesServices);
        this.token = _utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_5__["MyCookies"].getToken(this.cookiesServices);
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().append('token', this.token);
        this.userIdRequestParam = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set("_id", this.userId);
    }
    /**
    * method for forgotpassword
    * email id to send reset link
  */
    forgotPassword(email) {
        let data = {};
        data.email = email;
        return this.http.post(this.userForgotPasswordUrl, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(data => {
            return data;
        }));
    }
    /**
        * method to update admin details
        * @param userDetails admin details to update
       */
    updateDetails(userDetails) {
        //for setting token in headers
        this.setHeader();
        const httpOptions = {
            headers: this.header
        };
        return this.http.patch(this.updateUSerPwdUrl, userDetails, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(response => {
            if (response.success && response.data.token) {
                _utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_5__["MyCookies"].saveLoginDataInCookies(this.cookiesServices, new _modalPackages_cookies__WEBPACK_IMPORTED_MODULE_6__["CookiesModel"](response.data));
            }
            return response;
        }));
    }
    /**Get  Selected Location */
    getSelectedLocationsId() {
        return this.http.get('../../../assets/arraylocation/location.json');
    }
}
UserpanelServiceService.ɵfac = function UserpanelServiceService_Factory(t) { return new (t || UserpanelServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"])); };
UserpanelServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserpanelServiceService, factory: UserpanelServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserpanelServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/aboutus/aboutus.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/componentPackage/aboutus/aboutus.component.ts ***!
  \***************************************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutusComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutusComponent.ɵfac = function AboutusComponent_Factory(t) { return new (t || AboutusComponent)(); };
AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusComponent, selectors: [["app-aboutus"]], decls: 10, vars: 0, consts: [[1, "site-section", "about-us"], [1, "container"], [1, "text-center"], ["data-aos", "fade-left", 1, "title-heading"], [1, "about-text"]], template: function AboutusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Get It Home Now is the perfect service for your oversized delivery. No job is too big or small for Get It Home Now. The best part about it is that we will beat any rate in town. Our mission is to deliver the highest quality of service with the best licensed, bonded and insured drivers in Florida. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Affordability, speed and customer satisfaction are our main priorities. We charge a flat fee per hour per move which gives a stress-free moving experience. We charge a flat rate of $99/hr which includes the truck, moving equipment and the men to get the job done. Are you still reading? What are you waiting for? GET IT HOME NOW! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".about-us[_ngcontent-%COMP%] {\n    padding: 80px 0;\n}\n\n.about-text[_ngcontent-%COMP%] {\n    max-width: 800px;\n    margin: 0 auto;\n    padding-top: 20px;\n}\n\n.about-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    padding-bottom: 15px;\n    line-height: 26px;\n    font-size: 16px;\n    letter-spacing: 0.3px;\n    text-align: justify;\n}\n\n@media (max-width: 576px) {\n    .about-us[_ngcontent-%COMP%] {\n        padding: 45px 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9hYm91dHVzL2Fib3V0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtdXMge1xuICAgIHBhZGRpbmc6IDgwcHggMDtcbn1cblxuLmFib3V0LXRleHQge1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5hYm91dC10ZXh0IHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3B4O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xuICAgIC5hYm91dC11cyB7XG4gICAgICAgIHBhZGRpbmc6IDQ1cHggMTBweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus',
                templateUrl: './aboutus.component.html',
                styleUrls: ['./aboutus.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/advertisments/advertisments.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/componentPackage/advertisments/advertisments.component.ts ***!
  \***************************************************************************/
/*! exports provided: AdvertismentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertismentsComponent", function() { return AdvertismentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utillpackage/common-method */ "./src/app/utillpackage/common-method.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/backendServices/userpanel-service.service */ "./src/app/backendServices/userpanel-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function AdvertismentsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertismentsComponent_div_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.clickOnshowAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show All Ads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertismentsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Promotions Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "font-size": "9px" }; };
function AdvertismentsComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Store,Estate,Garage Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The Uber\u00AE of Moving Stuff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ads_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ads_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r8.createContent(ads_r9.mainContent)[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.createContent(ads_r9.mainContent)[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r8.createContent(ads_r9.mainContent)[2].length > 25 && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.createContent(ads_r9.mainContent)[2]);
} }
function AdvertismentsComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvertismentsComponent_div_19_div_1_Template, 21, 6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.adsList);
} }
const _c1 = function (a0) { return { "current": a0 }; };
function AdvertismentsComponent_div_20_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertismentsComponent_div_20_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const page_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.pageNumberClick(page_r11.pageNo); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, page_r11.status == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](page_r11.pageNo);
} }
const _c2 = function (a0) { return { "disabled": a0 }; };
function AdvertismentsComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertismentsComponent_div_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.previous(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdvertismentsComponent_div_20_a_3_Template, 2, 4, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertismentsComponent_div_20_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r5.previousButton))("disabled", ctx_r5.previousButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.paggination);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r5.nextButton))("disabled", ctx_r5.nextButton);
} }
class AdvertismentsComponent {
    constructor(router, userpanelServiceService, modalService, spinner) {
        this.router = router;
        this.userpanelServiceService = userpanelServiceService;
        this.modalService = modalService;
        this.spinner = spinner;
        this.Tag = "AdvertismentsComponent";
        this.searchString = "";
        this.noDataFound = false;
        this.adsList = [];
        this.showTable = false;
        this.nextButton = false;
        this.previousButton = false;
        this.isLoadingPaggition = false;
        this.showTable = false;
        this.noDataFound = false;
        this.previousButton = true;
        this.nextButton = false;
        this.pageNumber = 1;
        this.pageLimit = 6;
        this.paggination = [];
        this.lastPageNumber = 0;
        this.isLoadingPaggition = false;
        this.getAdvertisment();
    }
    ngOnInit() {
    }
    /**GEt AdverTisMEnt List */
    getAdvertisment(searchTerm) {
        this.spinner.show();
        this.adsList = [];
        // if (searchTerm || searchTerm == '') {
        //   this.searchString = searchTerm;
        // }
        this.userpanelServiceService.getAdvertisement(this.searchString, this.pageNumber).subscribe(response => {
            if (response.success) {
                this.adsList = response.data;
                this.showTable = true;
                if (this.pageNumber == response.totalPages) {
                    this.nextButton = true;
                }
                else {
                    this.nextButton = false;
                }
                this.lastPageNumber = response.totalPages;
                src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, ' Is lOAgin into get function:- ' + this.isLoadingPaggition);
                if (this.isLoadingPaggition == false) {
                    this.paggination = [];
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "Function Is woking Once Time ");
                    for (var i = 0; i < response.totalPages; i++) {
                        // CommonMethods.showconsole(this.Tag, "Paggition " + i)
                        var state = false;
                        if (i == 0) {
                            state = true;
                        }
                        this.paggination.push({
                            "pageNo": i + 1,
                            "status": state
                        });
                    }
                    this.isLoadingPaggition = true;
                }
                src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "Array :- " + JSON.stringify(this.paggination));
                this.spinner.hide();
                setTimeout(() => {
                    this.spinner.hide();
                }, 1000);
                if (this.adsList.length == 0) {
                    this.showTable = false;
                }
            }
            else {
                this.noDataFound = true;
            }
        });
    }
    createContent(content) {
        let contentArray = content.split("%");
        return contentArray;
    }
    /**
     *  Click Show All Button
     */
    clickOnshowAll() {
        this.pageNumber = 1;
        this.searchString = "";
        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "isLoadingPaggition:- " + this.isLoadingPaggition);
        this.isLoadingPaggition = false;
        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "after isLoadingPaggition:- " + this.isLoadingPaggition);
        this.getAdvertisment("");
    }
    onKeypressSearch() {
        this.pageNumber = 1;
        this.isLoadingPaggition = false;
        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "after isLoadingPaggition:- Function IS working  " + this.isLoadingPaggition);
        this.getAdvertisment("");
    }
    /**
    *   Previous  Click Function
    */
    previous() {
        this.pageNumber--;
        this.pageNumberClick(this.pageNumber);
    }
    /**
     * End
     */
    /**
     *   next  Click Function
     */
    next() {
        this.previousButton = false;
        this.pageNumber++;
        this.pageNumberClick(this.pageNumber);
    }
    /**
     * End
     */
    /**
     * Page Number Click
     */
    pageNumberClick(currentPageNumber) {
        this.pageNumber = 0;
        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "Page Number :- " + currentPageNumber);
        for (var i = 0; i < this.paggination.length; i++) {
            if (this.paggination[i].pageNo == currentPageNumber) {
                this.paggination[i].status = true;
            }
            else {
                this.paggination[i].status = false;
            }
        }
        this.pageNumber = currentPageNumber;
        if (this.pageNumber == 1) {
            this.previousButton = true;
        }
        else {
            this.previousButton = false;
        }
        if (this.pageNumber == this.lastPageNumber) {
            this.nextButton = true;
        }
        else {
            this.nextButton = false;
        }
        this.getAdvertisment();
    }
    gotoInstaPage() {
        window.open('https://www.instagram.com/getithomenow/', '_blank');
    }
}
AdvertismentsComponent.ɵfac = function AdvertismentsComponent_Factory(t) { return new (t || AdvertismentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_3__["UserpanelServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"])); };
AdvertismentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvertismentsComponent, selectors: [["app-advertisments"]], decls: 21, vars: 5, consts: [[1, "site-section", 2, "padding-top", "90px"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], ["data-aos", "fade-left", 1, "title-heading"], [1, "header-left-outer"], ["class", "getAllAd-btn", 4, "ngIf"], [1, "search-box-outer"], ["name", "searchBar", "id", "searchBarforAds", "value", "", "placeholder", "Search..", "type", "text", "autocomplete", "off", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup"], ["id", "search-box-icon", "type", "submit", 1, "search", "btn", "btn-link", "text-danger", 3, "click"], [1, "fa", "fa-search", "search-icon"], ["behavior", "scroll", "scrollamount", "5", "loop", "INFINITE", "onmouseover", "this.stop();", "onmouseout", "this.start();"], [3, "click"], [4, "ngIf"], ["class", "card-wrapper", 4, "ngIf"], ["class", "pagination-wrapper", 4, "ngIf"], [1, "getAllAd-btn"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "card-wrapper"], ["class", " card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "topStatic"], [1, "Image"], ["src", "./assets/imgs/logoSmall3.png", "alt", "", 1, "imageLogo"], [1, "bodyCenter"], [1, "big-stuff"], [1, "title-1"], [1, "title-2"], [1, "title-3", 3, "ngStyle"], [1, "bottom"], [1, "imageBottom"], ["src", "./assets/imgs/contact.png", "alt", ""], [1, "bottom-title"], [1, "pagination-wrapper"], [1, "paginate_btn", "previous", 3, "ngClass", "disabled", "click"], ["class", "paginate_btn ", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginate_btn", "next", 3, "ngClass", "disabled", "click"], [1, "paginate_btn", 3, "ngClass", "click"]], template: function AdvertismentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdvertismentsComponent_div_8_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvertismentsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.searchString = $event; })("keyup.enter", function AdvertismentsComponent_Template_input_keyup_enter_10_listener() { return ctx.onKeypressSearch(); })("keyup", function AdvertismentsComponent_Template_input_keyup_10_listener() { return ctx.onKeypressSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertismentsComponent_Template_button_click_11_listener() { return ctx.onKeypressSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "marquee", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \"For more promotions, Kindly visit our Instagram page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertismentsComponent_Template_a_click_15_listener() { return ctx.gotoInstaPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "#Getithomwenow");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AdvertismentsComponent_div_18_Template, 3, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, AdvertismentsComponent_div_19_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AdvertismentsComponent_div_20_Template, 6, 9, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchString != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.adsList.length != 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".top-n-margin[_ngcontent-%COMP%] {\r\n    margin-top: -65px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: flex-start;\r\n    \r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    width: 220px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .imageBottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    width: calc(33.3% - 10px);\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n    transition: 0.3s all;\r\n    border-bottom-left-radius: 50px;\r\n    border-top-right-radius: 50px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n    transform: scale(1.02);\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    padding: 0;\r\n    font-style: italic;\r\n    background: #e92330;\r\n    margin-bottom: 0px;\r\n    padding: 10px;\r\n    color: #fff;\r\n    border-top-right-radius: 50px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%], .card-wrapper[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 50px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #70707050;\r\n    z-index: 0;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    visibility: hidden;\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 10px;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    margin: 0 5px;\r\n    height: 50px;\r\n    width: 50px;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 22px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\r\n    background: green;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .action-btn[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .big-stuff[_ngcontent-%COMP%] {\r\n    color: #e92330;\r\n    font-size: 22px;\r\n    font-weight: 800;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    font-weight: 800;\r\n    padding: 6px 0;\r\n    margin-bottom: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n    margin-bottom: 12px;\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\r\n    color: #e92330;\r\n    font-size: 22px;\r\n    font-style: italic;\r\n    font-weight: 800;\r\n    padding-top: 10px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    background: #444;\r\n    border-bottom-left-radius: 50px;\r\n}\r\n\r\n\r\n.cardButton[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 500px;\r\n    left: 0;\r\n    top: 180px;\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity .35s ease;\r\n}\r\n\r\n\r\n.bodyCenter[_ngcontent-%COMP%] {\r\n    padding: 0 15px;\r\n}\r\n\r\n\r\n.cardButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    padding: 12px 48px;\r\n    text-align: center;\r\n    color: white;\r\n    border: solid 2px white;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%]:hover   .cardButton[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    display: block;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 4px;\r\n    text-align: left;\r\n    display: block;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 6px 15px;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    padding: 12px 10px;\r\n    min-width: 300px;\r\n    display: inline-block;\r\n    color: #fff;\r\n    margin-top: 15px;\r\n    text-decoration: none;\r\n    transition: 0.3s all;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\r\n    background: #444;\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: #707070;\r\n}\r\n\r\n\r\nmarquee[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    letter-spacing: 0.4px;\r\n    padding: 0 10px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n\r\nmarquee[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    color: #e92330;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    padding: 20px 0px;\r\n    padding-bottom: 0;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn.current[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    color: #fff;\r\n    border-color: #e92330;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn[_ngcontent-%COMP%]:hover {\r\n    background: #e92330;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    min-width: 35px;\r\n    line-height: 33px;\r\n    text-align: center;\r\n    margin-left: 0px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    color: #585050;\r\n    vertical-align: top;\r\n    font-size: 13px;\r\n    border: 1px solid #ddd;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn.disabled[_ngcontent-%COMP%]:hover, .pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn.disabled[_ngcontent-%COMP%] {\r\n    background: none;\r\n    color: #2f2f2f;\r\n    border-color: #ddd;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%], .pagination-wrapper[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    font-size: 0px;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:after {\r\n    transform: rotate(135deg);\r\n    left: 14px;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:after, .pagination-wrapper[_ngcontent-%COMP%]   .next[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    border-top: 2px solid #2f2f2f;\r\n    border-left: 2px solid #2f2f2f;\r\n    width: 6px;\r\n    height: 6px;\r\n    top: 50%;\r\n    left: 12.5px;\r\n    margin-top: -4px;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .previous[_ngcontent-%COMP%]:after {\r\n    transform: rotate(-45deg);\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn[_ngcontent-%COMP%]:hover:after {\r\n    border-color: #fff;\r\n}\r\n\r\n\r\n.pagination-wrapper[_ngcontent-%COMP%]   .paginate_btn.disabled[_ngcontent-%COMP%]:hover:after {\r\n    background: none;\r\n    color: #2f2f2f;\r\n    border-color: #2f2f2f;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.search-box-outer[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    padding: 0 40px 0px 5px;\r\n    transition: .3s;\r\n    width: 100%;\r\n    max-width: 300px;\r\n    background-color: #fff;\r\n    border: 1px solid #d7d7e3;\r\n    position: relative;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n.search-box-outer[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n\r\n.search-box-outer[_ngcontent-%COMP%]   input.search-box[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    color: #666;\r\n    border: none;\r\n    padding-left: 10px;\r\n    outline: none;\r\n    width: 100%;\r\n    height: 38px;\r\n    font-size: 15px\r\n}\r\n\r\n\r\n.search-box-outer[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\r\n    \r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 50%;\r\n    cursor: pointer;\r\n    margin-top: -17.5px;\r\n    margin-left: -8px;\r\n    border: none;\r\n    background-size: contain;\r\n}\r\n\r\n\r\n.search-icon[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n\r\n\r\n.getAllAd-btn[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-right: 15px;\r\n    \r\n}\r\n\r\n\r\n.header-left-outer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    top: 0;\r\n    justify-content: flex-end;\r\n    text-align: right;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n\r\n#advertisments[_ngcontent-%COMP%]   .title-heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n@media (max-width: 1279px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        border-top-right-radius: 20px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        border-bottom-left-radius: 20px;\r\n        border-top-right-radius: 20px;\r\n        margin-right: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 180px;\r\n        padding: 15px 0;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .big-stuff[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        letter-spacing: 1px;\r\n    }\r\n    .bodyCenter[_ngcontent-%COMP%] {\r\n        padding: 0 10px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        margin-bottom: 8px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .imageBottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 230px;\r\n        max-width: 80%;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        border-bottom-left-radius: 20px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 991px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n        margin-bottom: 8px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        width: calc(50% - 10px);\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n        min-width: auto;\r\n        padding: 10px 15px;\r\n        width: 100%;\r\n    }\r\n    .search-box-outer[_ngcontent-%COMP%] {\r\n        max-width: 200px;\r\n    }\r\n    .getAllAd-btn[_ngcontent-%COMP%] {\r\n        margin-right: 8px;\r\n        margin-top: 3px;\r\n    }\r\n    .getAllAd-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        width: 100px;\r\n        padding: 6px 5px;\r\n    }\r\n    .search-box-outer[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        top: 0;\r\n    }\r\n    .header-left-outer[_ngcontent-%COMP%] {\r\n        top: 0;\r\n        justify-content: flex-start;\r\n        margin: 25px 0;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 576px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-right: 0;\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n        display: block\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9hZHZlcnRpc21lbnRzL2FkdmVydGlzbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOzs7QUFHYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWtOOEI7OztBQUU5QjtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0EsYUFBYTs7O0FBRWI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQiw2QkFBNkI7QUFDakM7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDhCQUE4QjtBQUNsQzs7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOzs7QUFFQTs7SUFFSSw2QkFBNkI7QUFDakM7OztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osT0FBTztJQUNQLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFGQTtJQUNJLGNBQWM7QUFDbEI7OztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFHQSxhQUFhOzs7QUFFYjtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7OztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0FBQ2Q7OztBQUVBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsV0FBVztJQUNYLFFBQVE7SUFDUixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7OztBQUdBLE9BQU87OztBQUVQO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFHdkIsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsV0FBVztBQUNmOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1o7QUFDSjs7O0FBRUE7SUFDSSxrRUFBa0U7SUFDbEUsUUFBUTtJQUNSLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFFBQVE7SUFDUixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO2lCQUNhO0FBQ2pCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLCtCQUErQjtRQUMvQiw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7UUFDWixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsK0JBQStCO0lBQ25DO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsTUFBTTtJQUNWO0lBQ0E7UUFDSSxNQUFNO1FBQ04sMkJBQTJCO1FBQzNCLGNBQWM7SUFDbEI7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25CO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvYWR2ZXJ0aXNtZW50cy9hZHZlcnRpc21lbnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBjYXJkIGNzcyAqL1xyXG5cclxuXHJcbi8qIFxyXG4uY2FyZC1maXhlZGhlaWdodCB7XHJcbiAgICBoZWlnaHQ6IDE5MHB4ICEgaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuaW1hZ2VCb3R0b20ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmltYWdlQm90dG9tIGltZyB7XHJcbiAgICB3aWR0aDogMjcwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZCBoMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0bjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDUwO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gYSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biBhIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biAuYnRucyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gLmRlbGV0ZS1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biAuZWRpdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmNhcmQ6aG92ZXIgLmFjdGlvbi1idG4ge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5iaWctc3R1ZmYge1xyXG4gICAgY29sb3I6ICNlOTIzMzA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC50aXRsZS0xIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nOiA2cHggMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLnRpdGxlLTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC50aXRsZS0zIHtcclxuICAgIGNvbG9yOiAjZTkyMzMwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYm90dG9tLXRpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6ICM0NDQ7XHJcbn1cclxuXHJcbi5jYXJkQnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cyBlYXNlO1xyXG59XHJcblxyXG4uYm9keUNlbnRlciB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcclxuICAgIC5jYXJkLXdyYXBwZXIgLmNhcmQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAuYmlnLXN0dWZmIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLnRpdGxlLTEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLnRpdGxlLTIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLnRpdGxlLTMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLmltYWdlQm90dG9tIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgfVxyXG4gICAgLmJvZHlDZW50ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge30gKi9cclxuXHJcbi50b3Atbi1tYXJnaW4ge1xyXG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XHJcbn1cclxuXHJcblxyXG4vKiBjYXJkIGNzcyAqL1xyXG5cclxuLmNhcmQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyAqL1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5pbWFnZUJvdHRvbSBpbWcge1xyXG4gICAgd2lkdGg6IDI3MHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDMzLjMlIC0gMTBweCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZCBoMiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkLmNhcmQtMixcclxuLmNhcmQtd3JhcHBlciAuY2FyZC5jYXJkLTIgaDIge1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA1MDtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIGEge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gYSBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gLmJ0bnMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIC5kZWxldGUtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmFjdGlvbi1idG4gLmVkaXQtYnRuIHtcclxuICAgIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkOmhvdmVyIC5hY3Rpb24tYnRuIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYmlnLXN0dWZmIHtcclxuICAgIGNvbG9yOiAjZTkyMzMwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAudGl0bGUtMSB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZzogNnB4IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC50aXRsZS0yIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAudGl0bGUtMyB7XHJcbiAgICBjb2xvcjogI2U5MjMzMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmJvdHRvbS10aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDQ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmNhcmRCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzIGVhc2U7XHJcbn1cclxuXHJcbi5ib2R5Q2VudGVyIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxufVxyXG5cclxuLmNhcmRCdXR0b24gYSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkQnV0dG9uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5jb2wtMTIge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5jb2wtMTIgLmZvcm0tZWxlbWVudCB7XHJcbiAgICB3aWR0aDogNDglO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50LnN1Ym1pdC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAxMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNzA3MDcwO1xyXG59XHJcblxyXG5tYXJxdWVlIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjRweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbm1hcnF1ZWUgYSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2U5MjMzMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi8qcGFnaW5hdGlvbiovXHJcblxyXG4ucGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLnBhZ2luYXRlX2J0bi5jdXJyZW50IHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2U5MjMzMDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMzVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjNTg1MDUwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLnBhZ2luYXRlX2J0bi5kaXNhYmxlZDpob3ZlcixcclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuLmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucHJldmlvdXMsXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLm5leHQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAwcHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLm5leHQ6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIGxlZnQ6IDE0cHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uLXdyYXBwZXIgLnByZXZpb3VzOmFmdGVyLFxyXG4ucGFnaW5hdGlvbi13cmFwcGVyIC5uZXh0OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzJmMmYyZjtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzJmMmYyZjtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMTIuNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucHJldmlvdXM6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuOmhvdmVyOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnBhZ2luYXRpb24td3JhcHBlciAucGFnaW5hdGVfYnRuLmRpc2FibGVkOmhvdmVyOmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxuICAgIGJvcmRlci1jb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuXHJcbi8qZW5kcyovXHJcblxyXG4uc2VhcmNoLWJveC1vdXRlciB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHggMHB4IDVweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogLjNzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkN2Q3ZTM7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJveC1vdXRlcjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LW91dGVyIGlucHV0LnNlYXJjaC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94LW91dGVyIC5zZWFyY2gge1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9zZWFyY2gucG5nJykgbm8tcmVwZWF0OyAqL1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTE3LjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG59XHJcblxyXG4uc2VhcmNoLWljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG59XHJcblxyXG4uZ2V0QWxsQWQtYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIC8qIHJpZ2h0OiAyNjVweDtcclxuICAgIHRvcDogLTM4cHg7ICovXHJcbn1cclxuXHJcbi5oZWFkZXItbGVmdC1vdXRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxufVxyXG5cclxuI2FkdmVydGlzbWVudHMgLnRpdGxlLWhlYWRpbmcge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgLmNhcmQtd3JhcHBlciAuY2FyZCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAuY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAuYmlnLXN0dWZmIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIH1cclxuICAgIC5ib2R5Q2VudGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC50aXRsZS0xIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC50aXRsZS0yIHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC50aXRsZS0zIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAuaW1hZ2VCb3R0b20gaW1nIHtcclxuICAgICAgICB3aWR0aDogMjMwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC5ib3R0b20tdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAgIC5jYXJkLXdyYXBwZXIgLmNhcmQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLnRpdGxlLTIge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICAgIH1cclxuICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG4ge1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJveC1vdXRlciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuICAgIC5nZXRBbGxBZC1idG4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuICAgIC5nZXRBbGxBZC1idG4gYnV0dG9uIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCA1cHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLWJveC1vdXRlciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbGVmdC1vdXRlciB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1vdXRlciAuY29sLTEyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgfVxyXG4gICAgLmZvcm0tb3V0ZXIgLmNvbC0xMiAuZm9ybS1lbGVtZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertismentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advertisments',
                templateUrl: './advertisments.component.html',
                styleUrls: ['./advertisments.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_3__["UserpanelServiceService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/contactus/contactus.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/componentPackage/contactus/contactus.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utillpackage/common-method */ "./src/app/utillpackage/common-method.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/backendServices/userpanel-service.service */ "./src/app/backendServices/userpanel-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");










class ContactusComponent {
    constructor(snackBar, router, userpanelServiceService, modalService, spinner) {
        this.snackBar = snackBar;
        this.router = router;
        this.userpanelServiceService = userpanelServiceService;
        this.modalService = modalService;
        this.spinner = spinner;
        this.userName = '';
        this.userEmail = '';
        this.userContactNo = '';
        this.userMessage = '';
    }
    ngOnInit() {
    }
    /**
     * Validation Contact Us
     */
    validation() {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.userName.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, " Enter user name ");
            return false;
        }
        else if (this.userEmail.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, " Enter email address ");
            return false;
        }
        else if (!EMAIL_REGEXP.test(this.userEmail.trim())) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, "Email is invalid");
            return false;
        }
        else if (this.userContactNo.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, " Enter  contact number ");
            return false;
        }
        else if (this.userMessage.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, " Enter  message ");
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * method to send contact us detail to admin via mail.
     */
    sendDetails() {
        if (this.validation()) {
            this.spinner.show();
            let contactUsDetails = {
                name: this.userName,
                email: this.userEmail,
                contact: this.userContactNo,
                message: this.userMessage
            };
            this.userpanelServiceService.contactUs(contactUsDetails).subscribe(res => {
                if (res.success) {
                    this.spinner.hide();
                    this.resetFields();
                    // CommonMethods.showSuccessDialog(this.snackBar, res.message);
                    this.opensweetalert(res.message);
                }
                else {
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, res.message);
                }
            });
        }
    }
    /**
     * method to reset all details
     */
    resetFields() {
        this.userName = '';
        this.userEmail = '';
        this.userContactNo = '';
        this.userMessage = '';
    }
    /**
     * Sweet Alert   Show
     */
    opensweetalert(message) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            text: message,
            icon: 'success'
        });
    }
    /**
     *
     *   Numarical Number only Press
     */
    keyPress(event) {
        const pattern = /[0-9\+\-\ ]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_5__["UserpanelServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 23, vars: 4, consts: [[1, "site-section", "contact-us-section"], [1, "container"], [1, "row", "mb-5"], [1, "col-12", "text-center"], ["data-aos", "fade-down", 1, "title-heading"], [1, "sub-text"], [1, "contact-form", "siteForm"], [1, "paper-clip"], [1, "form-wrapper"], ["type", "text", "placeholder", "Name", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Email", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Contact Number", "onkeypress", "", "autocomplete", "off", "maxlength", "11", 3, "ngModel", "keypress", "ngModelChange"], ["placeholder", "Message", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "form-wrapper", "submit-btn"], [3, "click"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Reach the right person the first time. Our contact forms will help you.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Need consultation? We provide it for free!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_input_ngModelChange_15_listener($event) { return ctx.userEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ContactusComponent_Template_input_keypress_17_listener($event) { return ctx.keyPress($event); })("ngModelChange", function ContactusComponent_Template_input_ngModelChange_17_listener($event) { return ctx.userContactNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.userMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactusComponent_Template_a_click_21_listener() { return ctx.sendDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userContactNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["MaxLengthValidator"]], styles: [".contact-us-section[_ngcontent-%COMP%] {\r\n    padding: 60px 0;\r\n    \r\n    background: url('bg.svg') no-repeat bottom center;\r\n    ;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.contact-us-section[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    \r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.contact-us-section[_ngcontent-%COMP%]   .title-heading[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contact-us-section[_ngcontent-%COMP%]   .sub-text[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    max-width: 550px;\r\n    margin: 0 auto 35px;\r\n    font-size: 23px;\r\n    line-height: 26px;\r\n}\r\n\r\n\r\n\r\n.contact-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    color: #4c525a;\r\n    margin: 0 0 5px;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    position: relative;\r\n    border-radius: 0 0 5px 5px;\r\n    box-shadow: 0 -9px 50px rgba(0, 0, 0, .12);\r\n    padding: 50px;\r\n    max-width: 450px;\r\n    margin: 0 auto;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background: url('paper-icon.png') repeat-x;\r\n    width: 100%;\r\n    height: 10px;\r\n    top: -10px;\r\n    left: 0;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   .paper-clip[_ngcontent-%COMP%] {\r\n    background: url('paper-clip.png') no-repeat;\r\n    width: 66px;\r\n    height: 87px;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    background: #fff;\r\n    top: 5px;\r\n    width: 100px;\r\n    bottom: 15px;\r\n    box-shadow: 0 20px 30px rgba(0, 0, 0, .15);\r\n    border-radius: 5px;\r\n    transform: rotate(2deg);\r\n    left: -21px;\r\n    z-index: -1;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid #c1c1c1;\r\n    padding: 12px 0;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #e92330;\r\n}\r\n\r\n.form-wrapper.submit-btn[_ngcontent-%COMP%] {\r\n    margin-top: 35px;\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.form-wrapper.submit-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border-radius: 30px;\r\n    background: #e92330;\r\n    color: #fff;\r\n    min-width: 200px;\r\n    padding: 15px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    resize: none;\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid #c1c1c1;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n    border-color: #e92330;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .contact-us-section[_ngcontent-%COMP%] {\r\n        background: #e92330;\r\n        padding: 45px 10px;\r\n    }\r\n    .contact-form[_ngcontent-%COMP%] {\r\n        padding: 40px;\r\n        max-width: 400px;\r\n        margin-top: 80px;\r\n    }\r\n    .contact-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n    .contact-us-section[_ngcontent-%COMP%]   .sub-text[_ngcontent-%COMP%] {\r\n        margin-bottom: 15px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .contact-us-section[_ngcontent-%COMP%] {\r\n        background: #e92330;\r\n        padding: 45px 10px;\r\n    }\r\n    .contact-us-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    .contact-form[_ngcontent-%COMP%] {\r\n        padding: 35px 10px;\r\n        max-width: 100%;\r\n        margin-top: 70px;\r\n        margin-bottom: 0;\r\n    }\r\n    .contact-form[_ngcontent-%COMP%]:before {\r\n        display: none\r\n    }\r\n    .form-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n        height: 70px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUZBQW1GO0lBQ25GLGlEQUFzRTs7SUFFdEUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBR0EsY0FBYzs7QUFFZDtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCwwQ0FBK0Q7SUFDL0QsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsT0FBTztBQUNYOztBQUVBO0lBQ0ksMkNBQWdFO0lBQ2hFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsWUFBWTtJQUNaLFlBQVk7SUFFWiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBR2xCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0lBQ2hDLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL2NvbnRhY3R1cy9jb250YWN0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWN0LXVzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG4gICAgLyogYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9jb250YWN0YmcuanBnJykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXI7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2JnLnN2ZycpIG5vLXJlcGVhdCBib3R0b20gY2VudGVyO1xyXG4gICAgO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5jb250YWN0LXVzLXNlY3Rpb246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZTkyMzMwNzA7ICovXHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5jb250YWN0LXVzLXNlY3Rpb24gLnRpdGxlLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC11cy1zZWN0aW9uIC5zdWItdGV4dCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0byAzNXB4O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcblxyXG4vKiBjbGlwIGZvcm0gKi9cclxuXHJcbi5jb250YWN0LWZvcm0gaDIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICM0YzUyNWE7XHJcbiAgICBtYXJnaW46IDAgMCA1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAtOXB4IDUwcHggcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm06YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvcGFwZXItaWNvbi5wbmcnKSByZXBlYXQteDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gLnBhcGVyLWNsaXAge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9wYXBlci1jbGlwLnBuZycpIG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiA2NnB4O1xyXG4gICAgaGVpZ2h0OiA4N3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtNTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybTpiZWZvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGJvdHRvbTogMTVweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gICAgbGVmdDogLTIxcHg7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYzFjMTtcclxuICAgIHBhZGRpbmc6IDEycHggMDtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlciBpbnB1dDpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOTIzMzA7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIuc3VibWl0LWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlci5zdWJtaXQtYnRuIGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIgdGV4dGFyZWEge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjMWMxYzE7XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTkyMzMwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jb250YWN0LXVzLXNlY3Rpb24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICAgICAgcGFkZGluZzogNDVweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1mb3JtIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC11cy1zZWN0aW9uIC5zdWItdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY29udGFjdC11cy1zZWN0aW9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG4gICAgICAgIHBhZGRpbmc6IDQ1cHggMTBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LXVzLXNlY3Rpb24gLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDM1cHggMTBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3QtZm9ybTpiZWZvcmUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgIH1cclxuICAgIC5mb3JtLXdyYXBwZXIgdGV4dGFyZWEge1xyXG4gICAgICAgIGhlaWdodDogNzBweDtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactus',
                templateUrl: './contactus.component.html',
                styleUrls: ['./contactus.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_5__["UserpanelServiceService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/delivery/delivery.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componentPackage/delivery/delivery.component.ts ***!
  \*****************************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utillpackage/common-method */ "./src/app/utillpackage/common-method.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/backendServices/userpanel-service.service */ "./src/app/backendServices/userpanel-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = ["search"];
class DeliveryComponent {
    constructor(mapsAPILoader, ngZone, userBackEndService) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.userBackEndService = userBackEndService;
        this.Tag = "DeliveryComponent";
        this.origin = "";
        this.selectedLocationIds = [];
        this.loadMap();
        this.getSelectedLocationIds();
    }
    ngOnInit() {
    }
    getSelectedLocationIds() {
        this.userBackEndService.getSelectedLocationsId().subscribe(responseData => {
            // CommonMethods.showconsole(this.Tag,"Selected arary:- "+JSON.stringify(responseData))
            this.selectedLocationIds = responseData;
        });
    }
    loadMap() {
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {});
            this.origin = new google.maps.LatLng(30.7333148, 76.7794179);
            this.destination = new google.maps.LatLng(30.3752011, 76.782122);
            let distance = google.maps.geometry.spherical.computeDistanceBetween(this.origin, this.destination);
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole("Distance:- ", distance);
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    // let place = autocomplete.getPlace();
                    let place = autocomplete.getPlace();
                    // var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    let found = this.selectedLocationIds.filter(element => element.place_Id == place.place_id && element.id == place.id);
                    if (found.length != 0) {
                        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "IN Found");
                    }
                    else {
                        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "not Found");
                    }
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "Found:- " + found);
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole("place without stringfy:- ", place);
                    //  CommonMethods.showconsole(this.Tag,"place:- "+JSON.stringify(place) )
                    this.lat = place.geometry.location.lat();
                    this.lng = place.geometry.location.lng();
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "lat " + this.lat);
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "long " + this.lng);
                });
            });
        });
    }
    // calculate the distances from point1 to point2
    calculateDistance(point1, point2) {
        const p1 = new google.maps.LatLng(point1.lat, point1.lng);
        const p2 = new google.maps.LatLng(point2.lat, point2.lng);
        return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    }
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                // this.zoom = 16;
                // this.getAddress( this.addSubStoreModel.lat, this.addSubStoreModel.lng);
                this.origin = { lat: position.coords.latitude, lng: position.coords.longitude };
            });
        }
    }
}
DeliveryComponent.ɵfac = function DeliveryComponent_Factory(t) { return new (t || DeliveryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_3__["UserpanelServiceService"])); };
DeliveryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeliveryComponent, selectors: [["app-delivery"]], viewQuery: function DeliveryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElementRef = _t.first);
    } }, decls: 26, vars: 11, consts: [[1, "nav"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/imgs/logoSmall3.png", 1, "logo-small"], [1, "faltu-text"], [1, "positiondiv"], [1, "card"], [1, "card-body"], [1, "login100-form"], [1, "form-element"], ["aria-hidden", "true", 1, "fa", "fa-arrow-circle-up"], ["placeholder", "Enter pickup point", "type", "text", "id", "address", "autocomplete", "off", "name", "address", "required", "", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "off"], ["search", ""], ["gestureHandling", "none", 3, "latitude", "longitude", "zoom", "mapTypeControl", "streetViewControl", "rotateControl", "fullscreenControl", "zoomControl"], [3, "latitude", "longitude", "markerDraggable"], [1, "stepper"], [1, "rightSide"], [1, "leftside"], [1, "backbutton"], [1, "nextbuton"]], template: function DeliveryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Uber\u00AE of Moving Stuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Pickup Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "agm-map", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "agm-marker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("zoom", 13)("mapTypeControl", true)("streetViewControl", true)("rotateControl", true)("fullscreenControl", true)("zoomControl", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng)("markerDraggable", false);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMap"], _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmMarker"]], styles: [".faltu-text[_ngcontent-%COMP%] {\n    color: #000000;\n    font-size: 14px;\n    padding: 10px;\n}\n\n.nav[_ngcontent-%COMP%] {\n    padding: 8px;\n}\n\n.nav.navbar-brand[_ngcontent-%COMP%] {\n    color: #66615b;\n    text-transform: uppercase;\n    display: flex;\n    flex-flow: row;\n}\n\n.nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 120px;\n    transition: 0.5s all;\n}\n\nagm-map[_ngcontent-%COMP%] {\n    height: calc(100vh - 117px);\n}\n\n.positiondiv[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 100%;\n    z-index: 1;\n    bottom: 90px;\n    background: transparent;\n    text-align: center;\n}\n\n.positiondiv[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    width: 25%;\n    margin: 0 auto;\n    padding-bottom: 10px;\n}\n\n.stepper[_ngcontent-%COMP%] {\n    position: fixed;\n    box-shadow: 0px 0px 21px 0px #000000ad;\n    width: 100%;\n    bottom: 0;\n    height: 65px;\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    padding: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n    font-size: 14px;\n    border: unset;\n    padding: 8px 0px;\n    min-width: 82px;\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n    color: #fff;\n    border-radius: 4px;\n    transition: 0.3s all;\n    cursor: pointer;\n    -webkit-animation: scale 2s infinite;\n    animation: scale 2s infinite;\n}\n\n.stepper[_ngcontent-%COMP%]   .rightSide[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background: #a9a9a985;\n}\n\n.stepper[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%]   .backbutton[_ngcontent-%COMP%] {\n    background: #a9a9a985;\n}\n\n.stepper[_ngcontent-%COMP%]   .leftside[_ngcontent-%COMP%]   .nextbuton[_ngcontent-%COMP%] {\n    background: #ec3441;\n    margin-left: 10px;\n}\n\n\n\n.form-outer[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    width: 30%;\n    padding: 20px;\n    margin: 0 auto;\n    background: #00000057;\n    position: absolute;\n    right: 30px;\n    border-radius: 4px;\n    box-shadow: 0px 0px 10px 4px #ffffff91;\n}\n\n.form-outer-signup[_ngcontent-%COMP%] {\n    top: 20px;\n}\n\n.form-outer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    color: #fff;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    display: block;\n}\n\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    padding: 0;\n    display: flex;\n    justify-content: space-between;\n}\n\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    width: 48%;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n    text-align: left;\n    display: block;\n    color: #fff;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 6px 15px;\n}\n\n.login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n\n.login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 10px;\n    text-align: left;\n    display: block;\n    text-transform: none;\n}\n\n.login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0px 10px;\n    color: #ec3441;\n}\n\n.login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 8px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9kZWxpdmVyeS9kZWxpdmVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBR0EsYUFBYTs7QUFFYjtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1YsYUFBYTtJQUNiLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvZGVsaXZlcnkvZGVsaXZlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWx0dS10ZXh0IHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuLm5hdiB7XG4gICAgcGFkZGluZzogOHB4O1xufVxuXG4ubmF2Lm5hdmJhci1icmFuZCB7XG4gICAgY29sb3I6ICM2NjYxNWI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xufVxuXG4ubmF2IC5uYXZiYXItYnJhbmQgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xuICAgIHRyYW5zaXRpb246IDAuNXMgYWxsO1xufVxuXG5hZ20tbWFwIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTdweCk7XG59XG5cbi5wb3NpdGlvbmRpdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm90dG9tOiA5MHB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBvc2l0aW9uZGl2IC5jYXJkIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uc3RlcHBlciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjFweCAwcHggIzAwMDAwMGFkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyOiB1bnNldDtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xuICAgIG1pbi13aWR0aDogODJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBzY2FsZSAycyBpbmZpbml0ZTtcbn1cblxuLnN0ZXBwZXIgLnJpZ2h0U2lkZSBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6ICNhOWE5YTk4NTtcbn1cblxuLnN0ZXBwZXIgLmxlZnRzaWRlIC5iYWNrYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjYTlhOWE5ODU7XG59XG5cbi5zdGVwcGVyIC5sZWZ0c2lkZSAubmV4dGJ1dG9uIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWMzNDQxO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5cbi8qRm9ybSBGaWVsZCovXG5cbi5mb3JtLW91dGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICMwMDAwMDA1NztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA0cHggI2ZmZmZmZjkxO1xufVxuXG4uZm9ybS1vdXRlci1zaWdudXAge1xuICAgIHRvcDogMjBweDtcbn1cblxuLmZvcm0tb3V0ZXIgaDEge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9ybS1vdXRlciAuY29sLTEyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9ybS1vdXRlciAuY29sLTEyIC5mb3JtLWVsZW1lbnQge1xuICAgIHdpZHRoOiA0OCU7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQuc3VibWl0LWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcbn1cblxuLmxvZ2luMTAwLWZvcm0gLmZvcm0tZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmxvZ2luMTAwLWZvcm0gLmZvcm0tZWxlbWVudCBsYWJlbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmxvZ2luMTAwLWZvcm0gLmZvcm0tZWxlbWVudCBsYWJlbCBpIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBjb2xvcjogI2VjMzQ0MTtcbn1cblxuLmxvZ2luMTAwLWZvcm0gLmZvcm0tZWxlbWVudCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeliveryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-delivery',
                templateUrl: './delivery.component.html',
                styleUrls: ['./delivery.component.css']
            }]
    }], function () { return [{ type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_3__["UserpanelServiceService"] }]; }, { searchElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/componentPackage/faq/faq.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/componentPackage/faq/faq.component.ts ***!
  \*******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 91, vars: 0, consts: [[1, "site-section", "faq-section"], [1, "container"], [1, "row", "mb-5"], [1, "col-12", "text-center"], ["data-aos", "fade-down", 1, "title-heading"], ["id", "accordion", "role", "tablist", "aria-multiselectable", "true"], [1, "card"], ["role", "tab", "id", "accordionHeadingOne", 1, "card-header"], [1, "mb-0", "row"], [1, "col-12", "accordion-head"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#accordionBodyOne", "aria-expanded", "false", "aria-controls", "accordionBodyOne", 1, "collapsed"], ["aria-hidden", "true", 1, "fa", "fa-angle-down"], ["id", "accordionBodyOne", "role", "tabpanel", "aria-labelledby", "accordionHeadingOne", "aria-expanded", "false", "data-parent", "accordion", 1, "collapse"], [1, "card-block", "col-12"], ["role", "tab", "id", "accordionHeadingTwo", 1, "card-header"], [1, "col-12", "no-padding", "accordion-head"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#accordionBodyTwo", "aria-expanded", "false", "aria-controls", "accordionBodyTwo", 1, "collapsed"], ["id", "accordionBodyTwo", "role", "tabpanel", "aria-labelledby", "accordionHeadingTwo", "aria-expanded", "false", "data-parent", "accordion", 1, "collapse"], ["role", "tab", "id", "accordionHeadingThree", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#accordionBodyThree", "aria-expanded", "false", "aria-controls", "accordionBodyThree", 1, "collapsed"], ["id", "accordionBodyThree", "role", "tabpanel", "aria-labelledby", "accordionHeadingThree", "aria-expanded", "false", "data-parent", "accordion", 1, "collapse"], ["role", "tab", "id", "accordionHeading4", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#accordionBody4", "aria-expanded", "false", "aria-controls", "accordionBody4", 1, "collapsed"], ["id", "accordionBody4", "role", "tabpanel", "aria-labelledby", "accordionHeading4", "aria-expanded", "false", "data-parent", "accordion", 1, "collapse"], ["role", "tab", "id", "accordionHeading5", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#accordionBody5", "aria-expanded", "false", "aria-controls", "accordionBody5", 1, "collapsed"], ["id", "accordionBody5", "role", "tabpanel", "aria-labelledby", "accordionHeading5", "aria-expanded", "false", "data-parent", "accordion", 1, "collapse"], ["role", "tab", "id", "accordionHeading6", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#accordionBody6", "aria-expanded", "false", "aria-controls", "accordionBody6", 1, "collapsed"], ["id", "accordionBody6", "role", "tabpanel", "aria-labelledby", "accordionHeading6", "aria-expanded", "false", "data-parent", "accordion", 1, "collapse"], ["role", "tab", "id", "accordionHeading7", 1, "card-header"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#accordionBody7", "aria-expanded", "false", "aria-controls", "accordionBody7", 1, "collapsed"], ["id", "accordionBody7", "role", "tabpanel", "aria-labelledby", "accordionHeading7", "aria-expanded", "false", "data-parent", "accordion", 1, "collapse"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Are there restrictions on the goods that I can send via GetitHomeService??");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "No illegal items, No livestock, commemorative weapons only.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "How do I pay for the logistics services that I will be using?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Credit Cards, Cheque and Cash.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "I want to send a (very) heavy consignment (an anvil, 35 kilograms). How will Select Courier handle this?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Equipped for heavy items. All purchases come with truck, necessary equipment to move items and the manpower. Bed Trucks, cargo vans, chevy silvarado and 2 axel box trucks available for moving.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "What are your office hours?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "We operate 24/7.Please feel free to contact us whenever you like.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "How can I submit a claim for loss or damage?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "If you have renters insurance, then insurance is included in your hourly purchase. If you do not have renters insurance, you must purchase Lions Group insurance at favorable rates from us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "How can I track the status of my shipment during transit?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "All drivers are able to be tracked via a gps tracking app that we will equip you with before transporting your item.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "What area do you serve? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "25 mile radius of 33021 for a flat rate of $99/hr. Included in this rate is the truck, moving equipment and the men to get the job done.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".accordion-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    float: right;\r\n    color: #ffffff;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 5px;\r\n    transform: translate(0%, -50%);\r\n}\r\n\r\n.accordion-head[_ngcontent-%COMP%] > .collapsed[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]:before {\r\n    content: \"\\f105\";\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.accordion-head[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.faq-section[_ngcontent-%COMP%] {\r\n    padding: 80px 0;\r\n    background: url('banner-img.jpg') no-repeat top center;\r\n    overflow: hidden;\r\n    padding-bottom: 150px;\r\n    position: relative;\r\n    margin-bottom: 50px;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.faq-section[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgba(27, 27, 27, 0.9)\r\n}\r\n\r\n.faq-section[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    border-left: 1900px solid transparent;\r\n    border-bottom: 150px solid #ffffff;\r\n    z-index: 0;\r\n}\r\n\r\n.faq-section[_ngcontent-%COMP%]   .title-heading[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\n#accordion[_ngcontent-%COMP%] {\r\n    max-width: 550px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #333;\r\n    border-radius: 0;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    background: none;\r\n    padding: 0;\r\n    border-bottom: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    margin-bottom: 0;\r\n    font-size: 18px;\r\n    padding: 15px 0;\r\n    padding-right: 25px;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    letter-spacing: 0.8px;\r\n    line-height: 24px;\r\n    color: #fff;\r\n    font-family: serif;\r\n    padding-left: 15px;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .faq-section[_ngcontent-%COMP%] {\r\n        padding: 45px 0;\r\n        padding-bottom: 60px;\r\n    }\r\n    .card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        line-height: 26px;\r\n        ;\r\n        letter-spacing: normal;\r\n    }\r\n    .faq-section[_ngcontent-%COMP%]:after {\r\n        display: none;\r\n    }\r\n    .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        letter-spacing: normal;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9mYXEvZmFxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDViw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNEQUEyRTtJQUMzRSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxpQkFBaUI7O1FBRWpCLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLHNCQUFzQjtJQUMxQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb3JkaW9uLWhlYWQgaSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTtcclxufVxyXG5cclxuLmFjY29yZGlvbi1oZWFkPi5jb2xsYXBzZWQ+aTpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcXGYxMDVcIjtcclxufVxyXG5cclxuYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taGVhZCBhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmZhcS1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDgwcHggMDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmFubmVyLWltZy5qcGcnKSBuby1yZXBlYXQgdG9wIGNlbnRlcjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG5cclxuLmZhcS1zZWN0aW9uOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjcsIDI3LCAyNywgMC45KVxyXG59XHJcblxyXG4uZmFxLXNlY3Rpb246YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDE5MDBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDE1MHB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uZmFxLXNlY3Rpb24gLnRpdGxlLWhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNhY2NvcmRpb24ge1xyXG4gICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC1oZWFkZXIgaDMge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG4uY2FyZC1ibG9jayBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmZhcS1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiA0NXB4IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1ibG9jayBwIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5mYXEtc2VjdGlvbjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5jYXJkIC5jYXJkLWhlYWRlciBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/footer/footer.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentPackage/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 0, consts: [[1, "footer-section"], [1, "icons"], ["href", "https://www.instagram.com/getithomenow/", "target", "_blank", 1, "colorless-icons", "social-icon", "instagram"], ["aria-hidden", "true", 1, "fa", "fa-instagram"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "GetItHomeNow and logo \u00A92020 All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Like/Follow us for latest updates ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-section[_ngcontent-%COMP%] {\r\n    padding: 25px 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: #1b1b1b;\r\n    flex-flow: row wrap;\r\n    margin-top: 50px;\r\n}\r\n\r\n.footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #fff;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-bottom: 10px;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.colorless-icons[_ngcontent-%COMP%] {\r\n    color: inherit;\r\n    text-decoration: none;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\r\n    padding: 0 10px;\r\n    cursor: pointer;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before {\r\n    font-size: 26px;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover {\r\n    color: #e1306c;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover {\r\n    color: #0077fb;\r\n    transition: 0.3s all;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%]:hover {\r\n    color: #DD4B39;\r\n    ;\r\n    transition: 0.3s all;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .footer-section[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7O0lBRWQsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyNXB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogIzFiMWIxYjtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLXNlY3Rpb24gcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uaWNvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2xvcmxlc3MtaWNvbnMge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5pY29ucyAuc29jaWFsLWljb24ge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbi5pY29ucyAuc29jaWFsLWljb24gaTpiZWZvcmUge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4uaWNvbnMgLmluc3RhZ3JhbTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2UxMzA2YztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG4uaWNvbnMgLmZhY2Vib29rOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDA3N2ZiO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbi5pY29ucyAuZ29vZ2xlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjREQ0QjM5O1xyXG4gICAgO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmZvb3Rlci1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/componentPackage/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    toTop(event) {
        //  CommonMethods.showLog(this.Tag,'Page Offset : '+window.pageYOffset)
        //  CommonMethods.showLog(this.Tag,'Page Offset : '+window.innerHeight)
        var nav = jquery__WEBPACK_IMPORTED_MODULE_1__('nav'), nav_height = nav.outerHeight();
        jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__('#advertisments').offset().top - nav_height + 45
        }, 0);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, consts: [[1, "banner-content"], ["routerLink", "/promotions", 1, "common-btn"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Look no further! You already made your best move! Now let\u2019s move forward.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "We are a band of creative people who know that we are in an era of perfection where we care for your products and deliver them with integrity and seamless integration, all with the click of a mouse or the ease of a phone call. We\u2019re not your grandfather\u2019s moving company, we are the best in-class. GET IT HOME NOW! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    font-size: 18px;\r\n    min-height: 100vh;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    flex-flow: row wrap;\r\n    background-image: url('homebackLogo.jpg');\r\n    background-size: cover;\r\n    z-index: 0;\r\n    padding: 50px 20px;\r\n    padding-top: 130px;\r\n    text-align: left;\r\n    justify-content: flex-start;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    z-index: 1;\r\n}\r\n\r\n\r\n\r\n.banner-content[_ngcontent-%COMP%] {\r\n    padding: 50px;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    z-index: 2;\r\n    color: #fff;\r\n}\r\n\r\n.banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 30px;\r\n    letter-spacing: 1px;\r\n    line-height: 1.2;\r\n}\r\n\r\n.banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin-top: 40px;\r\n    line-height: 28px;\r\n}\r\n\r\n.banner-content[_ngcontent-%COMP%]   .common-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    margin-top: 30px;\r\n    padding: 15px 20px;\r\n    min-width: 150px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background: #e92330;\r\n    border-radius: 4px;\r\n    transition: 0.3s all;\r\n    cursor: pointer;\r\n    -webkit-animation: scale 2s infinite;\r\n            animation: scale 2s infinite;\r\n}\r\n\r\n\r\n\r\n.banner-content[_ngcontent-%COMP%]   .common-btn[_ngcontent-%COMP%]:hover {\r\n    background: #333;\r\n    transition: 0.3s all;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], a[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: Roboto;\r\n    text-decoration: none;\r\n}\r\n\r\np[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    color: #fd084a;\r\n}\r\n\r\n.blink[_ngcontent-%COMP%] {\r\n    -webkit-animation: blink 0.5s infinite;\r\n            animation: blink 0.5s infinite;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    to {\r\n        opacity: .0;\r\n    }\r\n}\r\n\r\n@keyframes blink {\r\n    to {\r\n        opacity: .0;\r\n    }\r\n}\r\n\r\n.flex[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.header-sub-title[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: \"Courier\";\r\n    font-size: 20px;\r\n    padding: 0.1em;\r\n}\r\n\r\n@media (max-width: 1025px) {\r\n    .banner-content[_ngcontent-%COMP%] {\r\n        padding: 30px;\r\n    }\r\n    .banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 36px;\r\n        letter-spacing: 1px;\r\n    }\r\n    .banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        margin-top: 25px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .banner-content[_ngcontent-%COMP%] {\r\n        padding: 30px 15px;\r\n        margin: 0;\r\n    }\r\n    .banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n        letter-spacing: normal;\r\n    }\r\n    .banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n    }\r\n    header[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        padding: 40px 10px;\r\n        padding-top: 100px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlDQUE4RDtJQUM5RCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBR0EsZ0JBQWdCOztBQUVoQjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRzs7QUFFSDtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7OztJQUdJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHNDQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUpBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO0lBQ2I7SUFDQTtRQUNJLGVBQWU7UUFDZixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2hvbWViYWNrTG9nby5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgcGFkZGluZzogNTBweCAyMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuaGVhZGVyIC5iYW5uZXItY29udGVudCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmhlYWRlcjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi8qIHRvcCBDb250ZW50ICovXHJcblxyXG4uYmFubmVyLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJhbm5lci1jb250ZW50IGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4uYmFubmVyLWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5iYW5uZXItY29udGVudCAuY29tbW9uLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG5cclxuLyogQGtleWZyYW1lcyBzY2FsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Q2NTA0ZjtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgMzUlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGUwNDBhO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Q2NTA0ZjtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG59ICovXHJcblxyXG4uYmFubmVyLWNvbnRlbnQgLmNvbW1vbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG5oMixcclxuYSxcclxucCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnA+YSB7XHJcbiAgICBjb2xvcjogI2ZkMDg0YTtcclxufVxyXG5cclxuLmJsaW5rIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC41cyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogLjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5oZWFkZXItc3ViLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllclwiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMC4xZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcclxuICAgIC5iYW5uZXItY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIC5iYW5uZXItY29udGVudCBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmJhbm5lci1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lci1jb250ZW50IGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5iYW5uZXItY29udGVudCBwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/login-signup/login-signup.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/componentPackage/login-signup/login-signup.component.ts ***!
  \*************************************************************************/
/*! exports provided: LoginSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupComponent", function() { return LoginSignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_modalPackages_login_signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modalPackages/login_signup */ "./src/app/modalPackages/login_signup.ts");
/* harmony import */ var src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utillpackage/common-method */ "./src/app/utillpackage/common-method.ts");
/* harmony import */ var src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utillpackage/utillpackage/my-cookies */ "./src/app/utillpackage/utillpackage/my-cookies.ts");
/* harmony import */ var src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utillpackage/utillpackage/my-routing-methods */ "./src/app/utillpackage/utillpackage/my-routing-methods.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/backendServices/userpanel-service.service */ "./src/app/backendServices/userpanel-service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















function LoginSignupComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginSignupComponent_div_7_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.loginsignup.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginSignupComponent_div_7_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r25.loginsignup.password = $event; })("onkeyup.enter", function LoginSignupComponent_div_7_Template_input_onkeyup_enter_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.callLoginApi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_div_7_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx_r27.CallModalForm(_r21); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Forgot?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_div_7_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.callLoginApi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.loginsignup.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r17.loginsignup.password);
} }
function LoginSignupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginSignupComponent_div_8_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.loginsignup.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginSignupComponent_div_8_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.loginsignup.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginSignupComponent_div_8_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.loginsignup.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function LoginSignupComponent_div_8_Template_input_keypress_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.keyPress($event); })("ngModelChange", function LoginSignupComponent_div_8_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.loginsignup.contact = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginSignupComponent_div_8_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.loginsignup.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginSignupComponent_div_8_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.loginsignup.confirm_password = $event; })("onkeyup.enter", function LoginSignupComponent_div_8_Template_input_onkeyup_enter_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.sigupServiceCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_div_8_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r38.sigupServiceCall(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.loginsignup.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.loginsignup.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.loginsignup.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.loginsignup.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.loginsignup.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.loginsignup.confirm_password);
} }
function LoginSignupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Not Member yet?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_div_9_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.toggleButtonFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.titlebelow);
} }
function LoginSignupComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Go back to");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_div_10_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r41.toggleButtonFunction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.titlebelow);
} }
function LoginSignupComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_ng_template_11_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.JoinAndClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginSignupComponent_ng_template_11_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.forgetPassword(_r43.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "logonotshosignup": a0 }; };
const _c1 = function (a0) { return { "form-outer-signup": a0 }; };
class LoginSignupComponent {
    constructor(snackbar, modalService, userPanelServices, snackBar, spinner, cookiesService, router) {
        this.snackbar = snackbar;
        this.modalService = modalService;
        this.userPanelServices = userPanelServices;
        this.snackBar = snackBar;
        this.spinner = spinner;
        this.cookiesService = cookiesService;
        this.router = router;
        this.tag = "loginsignup";
        this.signupForm = false;
        this.titlebelow = "";
        this.mainTitle = "";
        this.loginsignup = new src_app_modalPackages_login_signup__WEBPACK_IMPORTED_MODULE_1__["LoginSignupModal"]();
        this.signupForm = false;
        this.titlebelow = "Signup";
        this.mainTitle = "Login";
        this.checkLogin();
    }
    checkLogin() {
        var logincheck = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_3__["MyCookies"].checkLoginStatus(this.cookiesService);
        if (logincheck) {
            src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_4__["MyRoutingMethods"].gotoHome(this.router);
        }
        else {
            this.resetFields();
        }
    }
    /**Reset All Fields */
    resetFields() {
        this.loginsignup.firstName = "";
        this.loginsignup.lastName = "";
        this.loginsignup.email = "";
        this.loginsignup.contact = "";
        this.loginsignup.password = "";
        this.loginsignup.confirm_password = "";
    }
    /**
    * login Validation Function
    */
    loginValidation() {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.loginsignup.email.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Enter email");
            return false;
        }
        else if (!EMAIL_REGEXP.test(this.loginsignup.email.trim())) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Email is invalid");
            return false;
        }
        else if (this.loginsignup.password.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Enter password");
            return false;
        }
        else {
            return true;
        }
    }
    /**End */
    ngOnInit() {
    }
    /** LoginAPI call */
    callLoginApi() {
        if (this.loginValidation()) {
            this.spinner.show();
            this.userPanelServices.userLoginAPI(this.loginsignup).subscribe(responseData => {
                if (responseData.success) {
                    this.spinner.hide();
                    // CommonMethods.showSuccessDialog(this.snackBar, responseData.message);
                    src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_4__["MyRoutingMethods"].gotoHome(this.router);
                    //  CommonMethods.showconsole(this.tag,"Respinse:- "+JSON.stringify(responseData))
                }
                else {
                    this.spinner.hide();
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, responseData.message);
                }
            });
        }
    }
    /** Signup Validation call */
    signupValidation() {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.loginsignup.firstName.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Enter first name");
            return false;
        }
        else if (this.loginsignup.lastName.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Enter last name");
            return false;
        }
        else if (this.loginsignup.email.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Enter email");
            return false;
        }
        else if (!EMAIL_REGEXP.test(this.loginsignup.email.trim())) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Email is invalid");
            return false;
        }
        else if (this.loginsignup.contact.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Enter contact number");
            return false;
        }
        else if (this.loginsignup.password.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Enter password");
            return false;
        }
        else if (this.loginsignup.confirm_password.trim().length == 0) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Enter Confirm password");
            return false;
        }
        else if (this.loginsignup.password.trim() != this.loginsignup.confirm_password.trim()) {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackbar, "Password is not match");
            return false;
        }
        else {
            return true;
        }
    }
    toggleButtonFunction() {
        if (this.signupForm == false) {
            this.titlebelow = "Login";
            this.mainTitle = "Signup";
            this.signupForm = true;
            this.resetFields();
        }
        else {
            this.titlebelow = "Signup";
            this.signupForm = false;
            this.mainTitle = "Login";
            this.resetFields();
        }
    }
    /**
          *
          * Open  Modal Function
          */
    openModal(content) {
        this.modalReference = this.modalService.open(content, { centered: true });
        //  this. modalReference.componentInstance.actionMessage = this.actionmessage;
    }
    /**
     *
     * close Modal Function
     */
    JoinAndClose() {
        this.modalReference.close();
    }
    /**CallIng Modal Function */
    CallModalForm(content) {
        this.openModal(content);
    }
    /**Calling Signup Api */
    sigupServiceCall() {
        if (this.signupValidation()) {
            this.spinner.show();
            this.userPanelServices.signUp(this.loginsignup).subscribe(response => {
                src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(this.tag, "Response:- " + JSON.stringify(response));
                if (response.success) {
                    this.spinner.hide();
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showSuccessDialog(this.snackBar, "Resgister Successfully");
                    this.signupForm = false;
                    this.resetFields();
                }
                else {
                    this.spinner.hide();
                    // this.noDataFound = true;
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
                }
            });
        }
    }
    keyPress(event) {
        const patt = /^[0-9]{1,4}(\.[0-9][0-9])?$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !patt.test(inputChar)) {
            event.preventDefault();
        }
    }
    /**
   * Sweet Alert   Show
   */
    opensweetalert(message) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            text: message,
            icon: 'success'
        });
    }
    /**
     * method to send revocery mail on specific email
     * @param email email to send recovery link
     */
    forgetPassword(email) {
        this.spinner.show();
        this.userPanelServices.forgotPassword(email).subscribe(response => {
            this.spinner.hide();
            this.JoinAndClose();
            if (response.success) {
                this.opensweetalert(response.message);
            }
            else {
                src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showErrorDialog(this.snackBar, response.message);
            }
        });
    }
}
LoginSignupComponent.ɵfac = function LoginSignupComponent_Factory(t) { return new (t || LoginSignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_8__["UserpanelServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"])); };
LoginSignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginSignupComponent, selectors: [["app-login-signup"]], decls: 13, vars: 11, consts: [[1, "backlayer"], ["repulse-particles", ""], [1, "imagediv", 3, "ngClass"], ["src", "./assets/imgs/mainlogo.png", "alt", ""], [1, "form-outer", 3, "ngClass"], ["class", "form", 4, "ngIf"], ["class", "signuplink", 4, "ngIf"], ["content", ""], [1, "form"], [1, "form-element"], ["for", "email"], ["placeholder", "Enter Email Address", "type", "email", "id", "email", "autocomplete", "off", "required", "", 3, "ngModel", "ngModelChange"], [1, "form-element", 2, "position", "relative"], ["for", "password"], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter Password ", "required", "", 3, "ngModel", "ngModelChange", "onkeyup.enter"], ["id", "moveleft", "href", "javascript:void(0)", 1, "linkright", "linkslide", 3, "click"], [1, "field", 2, "margin-bottom", "0"], ["type", "submit", 1, "submit", "button", 3, "click"], ["type", "text", "name", "first_name", "id", "first_name", "placeholder", "Enter First Name ", "autocomplete", "off", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "last_name", "id", "last_name", "placeholder", "Enter Last Name ", "autocomplete", "off", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "contact_Number", "id", "contact_Number", "placeholder", "Enter Contact Number ", "autocomplete", "off", "required", "", 3, "ngModel", "keypress", "ngModelChange"], ["type", "password", "name", "password", "id", "password", "placeholder", "Enter Password", "required", "", 3, "ngModel", "ngModelChange"], ["for", "c_password"], ["type", "password", "name", "c_password", "id", "c_password", "placeholder", "Enter Confirm Password ", "required", "", 3, "ngModel", "ngModelChange", "onkeyup.enter"], [1, "signuplink"], [3, "click"], [1, "modal-body", 2, "text-align", "center"], [1, "close-icon", 3, "click"], [1, "fa", "fa-times"], [1, "title-heading"], [1, "login100-form"], ["placeholder", "Enter Email", "type", "email", "autocomplete", "off"], ["inputEmail", ""]], template: function LoginSignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginSignupComponent_div_7_Template, 14, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginSignupComponent_div_8_Template, 28, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginSignupComponent_div_9_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginSignupComponent_div_10_Template, 5, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginSignupComponent_ng_template_11_Template, 15, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.signupForm == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.signupForm == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mainTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n        font-size: 100%;\n        font-weight: normal;\n        text-transform: capitalize;\n        color: #555;\n        padding: 0 0 10px 0;\n    }\n    \n    h1[_ngcontent-%COMP%] {\n        font-size: 30px;\n    }\n    \n    h2[_ngcontent-%COMP%] {\n        font-size: 28px;\n    }\n    \n    h3[_ngcontent-%COMP%] {\n        font-size: 26px;\n    }\n    \n    h4[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n    \n    h5[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n    \n    h6[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n    \n    html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n        height: 100%;\n    }\n    \n    body[_ngcontent-%COMP%] {\n        margin: 0;\n        font-family: Roboto, \"Helvetica Neue\", sans-serif;\n        background: #f7f7ff;\n    }\n    \n    .backlayer[_ngcontent-%COMP%] {\n        background: url('mainBackGround.png') no-repeat;\n        height: 100%;\n        background-size: cover;\n        position: relative;\n    }\n    \n    \n    \n    .backlayer[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n        z-index: 1;\n        width: 70%;\n        margin: 0 auto;\n        background: transparent;\n        border: none;\n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n        background: transparent;\n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .logoIMage[_ngcontent-%COMP%] {\n        width: 150px;\n        height: 150px;\n    }\n    \n    .backlayer[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .logoIMage[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n    }\n    \n    .form-outer[_ngcontent-%COMP%] {\n        padding: 20px 0;\n        width: 30%;\n        padding: 20px;\n        margin: 0 auto;\n        background: #00000057;\n        position: absolute;\n        right: 30px;\n        border-radius: 4px;\n        box-shadow: 0px 0px 10px 4px #ffffff91;\n    }\n    \n    .form-outer-signup[_ngcontent-%COMP%] {\n        top: 20px;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        color: #fff;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n        display: block;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n        padding: 0;\n        display: flex;\n        justify-content: space-between;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n        width: 48%;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\n        width: 100%;\n        margin-bottom: 0;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin-bottom: 4px;\n        text-align: left;\n        display: block;\n        color: #fff;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        padding: 6px 15px;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n        background: #e92330;\n        border-radius: 4px;\n        text-align: center;\n        padding: 12px 10px;\n        min-width: 100%;\n        display: inline-block;\n        color: #fff;\n        margin-top: 15px;\n        text-decoration: none;\n        transition: 0.3s all;\n        font-size: 16px;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n        cursor: pointer;\n    }\n    \n    \n    \n    .submit.button[_ngcontent-%COMP%] {\n        font-size: 14px;\n        border-radius: 2px;\n        display: block;\n        width: 100%;\n        padding: 10px 20px;\n        border: 0 none;\n        text-transform: uppercase;\n        position: relative;\n        overflow: hidden;\n        cursor: pointer;\n        vertical-align: middle;\n        border: none;\n        background: #ff586b;\n        color: #fff;\n        margin-top: 25px;\n    }\n    \n    .submit[_ngcontent-%COMP%]::before {\n        content: \"\";\n        width: 0;\n        height: 1px;\n        position: absolute;\n        transition: all 0.2s linear;\n        background: #fff;\n    }\n    \n    .submit[_ngcontent-%COMP%]::after {\n        content: \"\";\n        width: 0;\n        height: 1px;\n        position: absolute;\n        transition: all 0.2s linear;\n        background: #fff;\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover {\n        background: #333;\n    }\n    \n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n        content: \"\";\n        width: 1px;\n        height: 0;\n        position: absolute;\n        transition: all 0.2s linear;\n        background: #fff;\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover::before, .submit[_ngcontent-%COMP%]:hover::after {\n        width: 100%;\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\n        height: 100%;\n    }\n    \n    .submit[_ngcontent-%COMP%]::before {\n        left: 50%;\n        top: 3px;\n        transition-duration: 0.4s;\n    }\n    \n    .submit[_ngcontent-%COMP%]::after {\n        left: 50%;\n        bottom: 3px;\n        transition-duration: 0.4s;\n    }\n    \n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n        left: 3px;\n        top: 50%;\n        transition-duration: 0.4s;\n    }\n    \n    .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n        right: 3px;\n        top: 50%;\n        transition-duration: 0.4s;\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover::before, .submit[_ngcontent-%COMP%]:hover::after {\n        left: 3px;\n        width: calc(100% - 6px);\n    }\n    \n    .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\n        top: 3px;\n        height: calc(100% - 6px);\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n        margin-top: 20px;\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        font-size: 14px;\n        margin-bottom: 4px;\n        text-align: left;\n        display: block;\n        text-transform: none;\n    }\n    \n    .login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: 100%;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        padding: 8px 15px;\n    }\n    \n    .signuplink[_ngcontent-%COMP%] {\n        text-align: center;\n        padding: 15x 15px;\n        padding-top: 18px;\n    }\n    \n    .signuplink[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        color: #fff;\n        font-size: 14px;\n        letter-spacing: 0.5px;\n    }\n    \n    .signuplink[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: #fff;\n        cursor: pointer;\n        margin-left: 5px;\n    }\n    \n    .signuplink[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n        color: #ff586b !important;\n        text-decoration: underline;\n    }\n    \n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n        background: #fff;\n        transition: 0.3s all;\n    }\n    \n    [_ngcontent-%COMP%]::-webkit-input-placeholder {\n        color: #707070;\n    }\n    \n    [_ngcontent-%COMP%]::-moz-placeholder {\n        color: #707070;\n    }\n    \n    [_ngcontent-%COMP%]::-ms-input-placeholder {\n        color: #707070;\n    }\n    \n    [_ngcontent-%COMP%]::placeholder {\n        color: #707070;\n    }\n    \n    .imagediv[_ngcontent-%COMP%] {\n        text-align: center;\n        width: 207px;\n        height: 134px;\n        border-radius: 50%;\n        position: absolute;\n        margin: auto;\n        top: 0;\n        left: 0\n    }\n    \n    .imagediv[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        max-width: 100%;\n        width: 100%;\n        height: 100%;\n        padding: 16px;\n        padding-top: 24px;\n    }\n    \n    .textdiv[_ngcontent-%COMP%] {\n        border: 2px solid#d6504f;\n        width: 90%;\n        margin: auto;\n        display: flex;\n        flex-flow: column;\n        align-items: center;\n        border-radius: 15px;\n        padding-top: 78px;\n        background: #fff;\n    }\n    \n    .linkright[_ngcontent-%COMP%] {\n        text-decoration: none;\n        text-transform: capitalize;\n        color: #ffffff;\n        padding: 8px 0px;\n        position: absolute;\n        right: 11px;\n        color: #007bff;\n    }\n    \n    .linkright[_ngcontent-%COMP%]:hover {\n        text-decoration: underline;\n    }\n    \n    \n    \n    @media (max-width: 991px) {\n        .logonotshosignup[_ngcontent-%COMP%] {\n            display: none;\n        }\n        .imagediv[_ngcontent-%COMP%] {\n            top: 12%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 150px;\n            height: 107px;\n        }\n        .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n            margin-bottom: 3px;\n        }\n        .form-outer[_ngcontent-%COMP%] {\n            width: 60%;\n            transform: translate(-50%, -50%);\n        }\n    }\n    \n    @media (max-width: 767px) {\n        .logonotshosignup[_ngcontent-%COMP%] {\n            display: none;\n        }\n        .form-outer[_ngcontent-%COMP%] {\n            padding: 20px 0;\n            width: 60%;\n            padding: 20px;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n        .imagediv[_ngcontent-%COMP%] {\n            top: 94px;\n            left: 50%;\n            transform: translate(-50%, -50%);\n        }\n    }\n    \n    @media (max-width: 576px) {\n        .logonotshosignup[_ngcontent-%COMP%] {\n            display: none;\n        }\n        .form-outer[_ngcontent-%COMP%] {\n            padding: 20px 0;\n            width: 80%;\n            padding: 20px;\n            transform: translate(-50%, -50%);\n        }\n        .imagediv[_ngcontent-%COMP%] {\n            top: 73px;\n            left: 50%;\n            transform: translate(-50%, -50%);\n            width: 150px;\n            height: 105px;\n        }\n        .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n            margin-bottom: 3px;\n        }\n        .form-outer[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n            color: #fff;\n            font-size: 20px;\n        }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9sb2dpbi1zaWdudXAvbG9naW4tc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7Ozs7OztRQU1JLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsMEJBQTBCO1FBQzFCLFdBQVc7UUFDWCxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7O1FBRUksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxpREFBaUQ7UUFDakQsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksK0NBQTZFO1FBQzdFLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsa0JBQWtCO0lBQ3RCOztJQUNBOzs7Ozs7Ozs7T0FTRzs7SUFFSDtRQUNJLFVBQVU7UUFDVixVQUFVO1FBQ1YsY0FBYztRQUNkLHVCQUF1QjtRQUN2QixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixVQUFVO1FBQ1YsYUFBYTtRQUNiLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsc0NBQXNDO0lBQzFDOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztRQUNYLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBQ0EsY0FBYzs7SUFFZDtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksV0FBVztRQUNYLFFBQVE7UUFDUixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLDJCQUEyQjtRQUMzQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsUUFBUTtRQUNSLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTs7UUFFSSxXQUFXO1FBQ1gsVUFBVTtRQUNWLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsMkJBQTJCO1FBQzNCLGdCQUFnQjtJQUNwQjs7SUFFQTs7UUFFSSxXQUFXO0lBQ2Y7O0lBRUE7O1FBRUksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksU0FBUztRQUNULFdBQVc7UUFDWCx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFVBQVU7UUFDVixRQUFRO1FBQ1IseUJBQXlCO0lBQzdCOztJQUVBOztRQUVJLFNBQVM7UUFDVCx1QkFBdUI7SUFDM0I7O0lBRUE7O1FBRUksUUFBUTtRQUNSLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxvQkFBb0I7SUFDeEI7O0lBSUE7UUFDSSxXQUFXO1FBQ1gsc0JBQXNCO1FBQ3RCLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLFdBQVc7UUFDWCxlQUFlO1FBQ2YscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSx5QkFBeUI7UUFDekIsMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLG9CQUFvQjtJQUN4Qjs7SUFFQztRQUNHLGNBQWM7SUFDbEI7O0lBRkM7UUFDRyxjQUFjO0lBQ2xCOztJQUZDO1FBQ0csY0FBYztJQUNsQjs7SUFGQztRQUNHLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixNQUFNO1FBQ047SUFDSjs7SUFFQTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsVUFBVTtRQUNWLFlBQVk7UUFDWixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFDMUIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSwwQkFBMEI7SUFDOUI7O0lBQ0Esa0NBQWtDOztJQUVsQztRQUNJO1lBQ0ksYUFBYTtRQUNqQjtRQUNBO1lBQ0ksUUFBUTtZQUNSLFNBQVM7WUFDVCxnQ0FBZ0M7WUFDaEMsWUFBWTtZQUNaLGFBQWE7UUFDakI7UUFDQTtZQUNJLGtCQUFrQjtRQUN0QjtRQUNBO1lBQ0ksVUFBVTtZQUNWLGdDQUFnQztRQUNwQztJQUNKOztJQUVBO1FBQ0k7WUFDSSxhQUFhO1FBQ2pCO1FBQ0E7WUFDSSxlQUFlO1lBQ2YsVUFBVTtZQUNWLGFBQWE7WUFDYixRQUFRO1lBQ1IsU0FBUztZQUNULGdDQUFnQztRQUNwQztRQUNBO1lBQ0ksU0FBUztZQUNULFNBQVM7WUFDVCxnQ0FBZ0M7UUFDcEM7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksYUFBYTtRQUNqQjtRQUNBO1lBQ0ksZUFBZTtZQUNmLFVBQVU7WUFDVixhQUFhO1lBQ2IsZ0NBQWdDO1FBQ3BDO1FBQ0E7WUFDSSxTQUFTO1lBQ1QsU0FBUztZQUNULGdDQUFnQztZQUNoQyxZQUFZO1lBQ1osYUFBYTtRQUNqQjtRQUNBO1lBQ0ksa0JBQWtCO1FBQ3RCO1FBQ0E7WUFDSSxXQUFXO1lBQ1gsZUFBZTtRQUNuQjtJQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9sb2dpbi1zaWdudXAvbG9naW4tc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaDEsXG4gICAgaDIsXG4gICAgaDMsXG4gICAgaDQsXG4gICAgaDUsXG4gICAgaDYge1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgcGFkZGluZzogMCAwIDEwcHggMDtcbiAgICB9XG4gICAgXG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIFxuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgIH1cbiAgICBcbiAgICBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgXG4gICAgaDQge1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxuICAgIFxuICAgIGg1IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICBoNiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgXG4gICAgaHRtbCxcbiAgICBib2R5IHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmN2Y3ZmY7XG4gICAgfVxuICAgIFxuICAgIC5iYWNrbGF5ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLy4uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1ncy9tYWluQmFja0dyb3VuZC5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG4gICAgLyogLmJhY2tsYXllcjphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwicGF0dGVybi5wbmdcIik7XG4gICAgfSAqL1xuICAgIFxuICAgIC5iYWNrbGF5ZXIgLmNhcmQge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmJhY2tsYXllciAuY2FyZCAuY2FyZC1ib2R5IHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIFxuICAgIC5iYWNrbGF5ZXIgLmNhcmQgLmxvZ29JTWFnZSB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICB9XG4gICAgXG4gICAgLmJhY2tsYXllciAuY2FyZCAubG9nb0lNYWdlIC5pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLW91dGVyIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDAwMDU3O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA0cHggI2ZmZmZmZjkxO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1vdXRlci1zaWdudXAge1xuICAgICAgICB0b3A6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLW91dGVyIGgxIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tb3V0ZXIgLmNvbC0xMiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tb3V0ZXIgLmNvbC0xMiAuZm9ybS1lbGVtZW50IHtcbiAgICAgICAgd2lkdGg6IDQ4JTtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudC5zdWJtaXQtYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZzogNnB4IDE1cHg7XG4gICAgfVxuICAgIFxuICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTJweCAxMHB4O1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAvKiBsb2dpbiBidG4gKi9cbiAgICBcbiAgICAuc3VibWl0LmJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjU4NmI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0OjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0OjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0IHNwYW46OmJlZm9yZSxcbiAgICAuc3VibWl0IHNwYW46OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG4gICAgXG4gICAgLnN1Ym1pdDpob3Zlcjo6YmVmb3JlLFxuICAgIC5zdWJtaXQ6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YmVmb3JlLFxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YWZ0ZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6OmJlZm9yZSB7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3R0b206IDNweDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbiAgICB9XG4gICAgXG4gICAgLnN1Ym1pdCBzcGFuOjpiZWZvcmUge1xuICAgICAgICBsZWZ0OiAzcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICAgIH1cbiAgICBcbiAgICAuc3VibWl0IHNwYW46OmFmdGVyIHtcbiAgICAgICAgcmlnaHQ6IDNweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXI6OmJlZm9yZSxcbiAgICAuc3VibWl0OmhvdmVyOjphZnRlciB7XG4gICAgICAgIGxlZnQ6IDNweDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG4gICAgfVxuICAgIFxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YmVmb3JlLFxuICAgIC5zdWJtaXQ6aG92ZXIgc3Bhbjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xuICAgIH1cbiAgICBcbiAgICAubG9naW4xMDAtZm9ybSAuZm9ybS1lbGVtZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLmxvZ2luMTAwLWZvcm0gLmZvcm0tZWxlbWVudCBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICAgIFxuXG4gICAgXG4gICAgLmxvZ2luMTAwLWZvcm0gLmZvcm0tZWxlbWVudCBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCAxNXB4O1xuICAgIH1cbiAgICBcbiAgICAuc2lnbnVwbGluayB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTV4IDE1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxOHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2lnbnVwbGluayBzcGFuIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIH1cbiAgICBcbiAgICAuc2lnbnVwbGluayBzcGFuIGEge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgICBcbiAgICAuc2lnbnVwbGluayBzcGFuOmhvdmVyIGEge1xuICAgICAgICBjb2xvcjogI2ZmNTg2YiAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgXG4gICAgLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCAuc3VibWl0LWJ0bjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICAgIH1cbiAgICBcbiAgICAgOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIH1cbiAgICBcbiAgICAuaW1hZ2VkaXYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyMDdweDtcbiAgICAgICAgaGVpZ2h0OiAxMzRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwXG4gICAgfVxuICAgIFxuICAgIC5pbWFnZWRpdiBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIH1cbiAgICBcbiAgICAudGV4dGRpdiB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkI2Q2NTA0ZjtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDc4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgfVxuICAgIFxuICAgIC5saW5rcmlnaHQge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgcGFkZGluZzogOHB4IDBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTFweDtcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgfVxuICAgIFxuICAgIC5saW5rcmlnaHQ6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgLyogQG1lZGlhIChtYXgtd2lkdGg6IDEyNzlweCkge30gKi9cbiAgICBcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICAgICAgLmxvZ29ub3RzaG9zaWdudXAge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2VkaXYge1xuICAgICAgICAgICAgdG9wOiAxMiU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTA3cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0tb3V0ZXIge1xuICAgICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgICAubG9nb25vdHNob3NpZ251cCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLW91dGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2VkaXYge1xuICAgICAgICAgICAgdG9wOiA5NHB4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XG4gICAgICAgIC5sb2dvbm90c2hvc2lnbnVwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmZvcm0tb3V0ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2VkaXYge1xuICAgICAgICAgICAgdG9wOiA3M3B4O1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5mb3JtLW91dGVyIGgxIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginSignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-signup',
                templateUrl: './login-signup.component.html',
                styleUrls: ['./login-signup.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_8__["UserpanelServiceService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/componentPackage/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utillpackage/utillpackage/my-cookies */ "./src/app/utillpackage/utillpackage/my-cookies.ts");
/* harmony import */ var src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utillpackage/common-method */ "./src/app/utillpackage/common-method.ts");
/* harmony import */ var src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utillpackage/utillpackage/my-routing-methods */ "./src/app/utillpackage/utillpackage/my-routing-methods.ts");
/* harmony import */ var src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utillpackage/constant */ "./src/app/utillpackage/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/backendServices/userpanel-service.service */ "./src/app/backendServices/userpanel-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");











const _c0 = function (a0) { return { "navbar-transparent": a0 }; };
const _c1 = function (a0) { return { "advertismentshow": a0 }; };
class NavbarComponent {
    constructor(router, location, cookiesService, userPanelBackEndService) {
        this.router = router;
        this.location = location;
        this.cookiesService = cookiesService;
        this.userPanelBackEndService = userPanelBackEndService;
        this.Tag = "NavbarComponent";
        this.showAdvertisment = false;
        this.cookiesIsExit = false;
        this.showAdvertisment = false;
        this.cookiesIsExit = false;
        // this.profilepic = "";
        this.fullname = "";
        // console.log("Current Url:- "+this.router.url)
        if (this.router.url == "/home") {
            this.showAdvertisment = false;
        }
        else {
            this.showAdvertisment = true;
        }
        this.checkLoginStatus();
    }
    /* Check Login status  */
    checkLoginStatus() {
        this.setTopImage();
        var loginStatus = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].checkLoginStatus(this.cookiesService);
        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(this.Tag, "LoginStatus:- " + loginStatus);
        if (loginStatus) {
            this.setTopUserName();
            // this.profilepic = this.cookiesService.get("profilePic");
            this.cookiesIsExit = true;
        }
        else {
            this.cookiesIsExit = false;
        }
    }
    ngOnInit() {
    }
    goBack() {
        this.router.navigate(["/home"]);
        window.scrollTo(0, 0);
    }
    /**Logout */
    clickLogoutFunction() {
        src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].deletecookies(this.cookiesService);
        if (this.router.url == '/home') {
            location.reload(true);
        }
        else {
            src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_3__["MyRoutingMethods"].gotoHome(this.router);
        }
        //  
    }
    /**Set Current Image */
    setTopImage() {
        this.userPanelBackEndService.currentProfilePic.subscribe(profilePicUrl => {
            this.profilepic = profilePicUrl;
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_2__["CommonMethods"].showconsole(this.Tag, "profile Pic:- " + this.profilepic);
            if (profilePicUrl == '') {
                this.profilepic = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getProfileIMage(this.cookiesService);
            }
            if (!this.profilepic) {
                this.profilepic = "./assets/imgs/default-admin.jpg";
            }
            else {
                this.profilepic = src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].IMAGESERVERURL + this.profilepic;
            }
        });
    }
    /**Set UserName*/
    setTopUserName() {
        this.userPanelBackEndService.currentProfileName.subscribe(profileName => {
            this.fullname = profileName;
            if (profileName == '') {
                this.fullname = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserFistName(this.cookiesService) + " " + src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUseLastName(this.cookiesService);
            }
            // if (!this.profilepic) {
            //   this.profilepic = "./assets/imgs/default-admin.jpg";
            // }
            // else {
            //   this.profilepic = MyConstants.IMAGESERVERURL + this.profilepic;
            // }
        });
        // Authorization not correct?
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_8__["UserpanelServiceService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 27, vars: 15, consts: [["id", "navbar", "color-on-scroll", "50", 1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", 3, "ngClass"], [1, "container-nav"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/imgs/mainLogo copy.png", 1, "logo-big"], ["src", "assets/imgs/logoSmall3.png", 1, "logo-small"], [1, "faltu-text"], ["id", "mytoggle", "type", "button", "data-toggle", "collapse", "data-target", "#probootstrap-navbar", "aria-controls", "probootstrap-navbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ml-auto"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["id", "probootstrap-navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 3, "ngClass"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link", 3, "click"], [1, "nav-item"], ["routerLink", "/promotions", "routerLinkActive", "active", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link"], ["href", "#aboutUS", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link"], ["href", "#faq", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link"], ["href", "#contactus", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The Uber\u00AE of Moving Stuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_13_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Promotions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "About US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showAdvertisment == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.showAdvertisment == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.showAdvertisment == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.showAdvertisment == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.showAdvertisment == true));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"]], styles: [".mat-icon[_ngcontent-%COMP%] {\r\n    color: #fff\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.navbutton[_ngcontent-%COMP%] {\r\n    background: initial;\r\n    padding: 9px;\r\n    color: #d6504f;\r\n    border-bottom: 2px solid #d6504f;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.btn2nd[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.navbar-dark.navbar-transparent[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.navbar-transparent[_ngcontent-%COMP%]   .faltu-text[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-size: 16px;\r\n    padding-left: 10px;\r\n}\r\n\r\n\r\n.navbar-transparent[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\n\r\n.navbar-transparent[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\n\r\n.profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    border: unset;\r\n    padding: 8px 0px;\r\n    min-width: 150px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background: #e92330;\r\n    color: #fff;\r\n    border-radius: 4px;\r\n    transition: 0.3s all;\r\n    cursor: pointer;\r\n    -webkit-animation: scale 2s infinite;\r\n    animation: scale 2s infinite;\r\n}\r\n\r\n\r\n.navbar-transparent[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n    top: 84px;\r\n}\r\n\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n    border: 1px solid #e92330;\r\n    color: #e92330;\r\n    font-size: 22px;\r\n    font-weight: 300;\r\n}\r\n\r\n\r\n.navbar-collapse.collapse.show[_ngcontent-%COMP%] {\r\n    display: unset !important;\r\n}\r\n\r\n\r\n.profile-settings[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 40px;\r\n    max-height: 40px;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n    margin-right: 4px;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    padding: 1px;\r\n}\r\n\r\n\r\n.profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 8px;\r\n    margin: 2px;\r\n    font-size: 14px;\r\n    color: #000000;\r\n    cursor: pointer;\r\n    text-transform: capitalize;\r\n}\r\n\r\n\r\n.profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 11px;\r\n    margin-left: 9px;\r\n    color: #000000;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.profile-settings[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\r\n    transform: scaleY(1);\r\n    transition: 0.3s all;\r\n    display: unset;\r\n    position: absolute;\r\n    top: 74px;\r\n    right: 29px;\r\n}\r\n\r\n\r\n.dropdown-menu[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 100%;\r\n    width: 180px;\r\n    max-width: 180px;\r\n    border-radius: 5px;\r\n    background: #fff;\r\n    right: 0;\r\n    left: unset;\r\n    text-align: center;\r\n    box-shadow: 0 0 25px rgba(0, 0, 0, 0.12);\r\n    cursor: default;\r\n    transform: scaleY(0);\r\n    transition: 0.3s all;\r\n    display: unset;\r\n    transform-origin: top;\r\n}\r\n\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    color: #2d96f1;\r\n    text-transform: uppercase;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    padding: 15px;\r\n    display: block;\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    background: #f1f1f1;\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n.dropdown-menu-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    \r\n    padding: 12px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.dropdown-menu.show[_ngcontent-%COMP%] {\r\n    transform: scaleY(1);\r\n    transition: 0.3s all;\r\n    display: unset;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media screen and (max-width:340px) {\r\n    .btn2nd[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width:600px) {\r\n    .btn2nd[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 991px) {\r\n    .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        font-size: 13px;\r\n        padding: 10px 6px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width:762px) {\r\n    .btn2nd[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 575px) {\r\n    .navbar[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    .navbar-collapse[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 100%;\r\n        background: #fff;\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        color: #1b1b1b;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%] {\r\n        display: flex;\r\n        justify-content: flex-start;\r\n        padding: 10px 5px;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n        color: #000000;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .profile-settings[_ngcontent-%COMP%]   .navdrop-box[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        color: #000000;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n        color: #fff;\r\n    }\r\n    .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n\r\n.advertismentshow[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOzs7QUFHQTs7OztHQUlHOzs7QUFFSDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG9DQUFvQztJQUNwQyw0QkFBNEI7QUFDaEM7OztBQUVBO0lBQ0ksU0FBUztBQUNiOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7OztBQUdBLGFBQWE7OztBQUViO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxPQUFPO0lBQ1g7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGFBQWE7UUFDYiwyQkFBMkI7UUFDM0IsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKOzs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG5cclxuLyogLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2Q2NTA0ZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkNjUwNGY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGF1dG87XHJcbn0gKi9cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBjb2xvcjogI2Q2NTA0ZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDY1MDRmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuMm5kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXItdHJhbnNwYXJlbnQgLmZhbHR1LXRleHQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItdHJhbnNwYXJlbnQgLnByb2ZpbGUtc2V0dGluZ3MgLm5hdmRyb3AtYm94IGg1IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YmFyLXRyYW5zcGFyZW50IC5wcm9maWxlLXNldHRpbmdzIC5uYXZkcm9wLWJveCBpIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zZXR0aW5ncyAubmF2ZHJvcC1ib3ggYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzY2FsZSAycyBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogc2NhbGUgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5uYXZiYXItdHJhbnNwYXJlbnQgLnByb2ZpbGUtc2V0dGluZ3MgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgdG9wOiA4NHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsgLm5hdmJhci10b2dnbGVyIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5MjMzMDtcclxuICAgIGNvbG9yOiAjZTkyMzMwO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZS5jb2xsYXBzZS5zaG93IHtcclxuICAgIGRpc3BsYXk6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNldHRpbmdzIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDQwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuXHJcbi5wcm9maWxlLXNldHRpbmdzIC5uYXZkcm9wLWJveCBoNSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnByb2ZpbGUtc2V0dGluZ3MgLm5hdmRyb3AtYm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2ZpbGUtc2V0dGluZ3MgLm5hdmRyb3AtYm94IGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxMXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucHJvZmlsZS1zZXR0aW5nczpob3ZlciAuZHJvcGRvd24tbWVudSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDc0cHg7XHJcbiAgICByaWdodDogMjlweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDI1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgaDUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMyZDk2ZjE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LWZvb3RlciBhIHtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNkZGQ7ICovXHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5zaG93IHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBkaXNwbGF5OiB1bnNldDtcclxufVxyXG5cclxuXHJcbi8qY2hpbGQgbWVudSovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjM0MHB4KSB7XHJcbiAgICAuYnRuMm5kIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgIC5idG4ybmQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzYycHgpIHtcclxuICAgIC5idG4ybmQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLnByb2ZpbGUtc2V0dGluZ3MgLm5hdmRyb3AtYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5wcm9maWxlLXNldHRpbmdzIC5uYXZkcm9wLWJveCBoNSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAucHJvZmlsZS1zZXR0aW5ncyAubmF2ZHJvcC1ib3ggaSB7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5uYXZiYXItbmF2IC5uYXYtaXRlbSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWR2ZXJ0aXNtZW50c2hvdyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }, { type: src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_8__["UserpanelServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/componentPackage/profileshow/profileshow.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/componentPackage/profileshow/profileshow.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileshowComponent", function() { return ProfileshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utillpackage/utillpackage/my-cookies */ "./src/app/utillpackage/utillpackage/my-cookies.ts");
/* harmony import */ var src_app_modalPackages_login_signup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modalPackages/login_signup */ "./src/app/modalPackages/login_signup.ts");
/* harmony import */ var src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utillpackage/common-method */ "./src/app/utillpackage/common-method.ts");
/* harmony import */ var src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utillpackage/constant */ "./src/app/utillpackage/constant.ts");
/* harmony import */ var src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utillpackage/utillpackage/my-routing-methods */ "./src/app/utillpackage/utillpackage/my-routing-methods.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/backendServices/userpanel-service.service */ "./src/app/backendServices/userpanel-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















function ProfileshowComponent_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileshowComponent_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return ctx_r53.showUpdateProfileMOdal(_r49, "Edit Profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit |");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileshowComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileshowComponent_div_47_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return ctx_r55.showUpdateProfileMOdal(_r49, "Compelte Profile"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Complete Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileshowComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileshowComponent_ng_template_48_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.JoinAndClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_48_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r59.userDetailsModal.firstName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_48_Template_input_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r60.userDetailsModal.lastName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Contact Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ProfileshowComponent_ng_template_48_Template_input_keypress_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r61.keyPress($event); })("ngModelChange", function ProfileshowComponent_ng_template_48_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r62.userDetailsModal.contact = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_48_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r63.userDetailsModal.address = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "city");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_48_Template_input_ngModelChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r64.userDetailsModal.city = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_48_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r65.userDetailsModal.state = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Zip Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_48_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.userDetailsModal.zip = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileshowComponent_ng_template_48_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.updateUserDeatils(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Update Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r50.modalTitle, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.userDetailsModal.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.userDetailsModal.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.userDetailsModal.contact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.userDetailsModal.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.userDetailsModal.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.userDetailsModal.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r50.userDetailsModal.zip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.errorMessage);
} }
function ProfileshowComponent_ng_template_50_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileshowComponent_ng_template_50_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r68.JoinAndClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Old Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_50_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r70.oldPwd = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "New password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_50_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r71.userDetailsModal.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confirm password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProfileshowComponent_ng_template_50_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r72.userDetailsModal.confirm_password = $event; })("keyup.enter", function ProfileshowComponent_ng_template_50_Template_input_keyup_enter_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r73.updatePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileshowComponent_ng_template_50_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.updatePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r52.oldPwd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r52.userDetailsModal.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r52.userDetailsModal.confirm_password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r52.errorMessage);
} }
class ProfileshowComponent {
    constructor(modalService, snackBar, router, cookiesService, spiner, userBackEndServices) {
        this.modalService = modalService;
        this.snackBar = snackBar;
        this.router = router;
        this.cookiesService = cookiesService;
        this.spiner = spiner;
        this.userBackEndServices = userBackEndServices;
        this.Tag = "ProfileshowComponent";
        this.showCompleteProfileButton = false;
        this.userDetailsModal = new src_app_modalPackages_login_signup__WEBPACK_IMPORTED_MODULE_2__["LoginSignupModal"]();
        this.userName = "";
        this.address = "";
        this.errorMessage = "";
        this.oldPwd = "";
        this.modalTitle = "";
        this.showCompleteProfileButton = false;
        this.resetVeriable();
        this.checkLogin();
    }
    ngOnInit() {
    }
    /**
     * Initalize variable
     */
    resetVeriable() {
        this.userDetailsModal.firstName = "";
        this.userDetailsModal.lastName = "";
        this.userDetailsModal.email = "";
        this.userDetailsModal.contact = "";
        this.userDetailsModal.password = "";
        this.userDetailsModal.address = "";
        this.userDetailsModal.city = "";
        this.userDetailsModal.state = "";
        this.userDetailsModal.zip = "";
        this.userDetailsModal.confirm_password = "";
    }
    checkLogin() {
        var logincheck = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].checkLoginStatus(this.cookiesService);
        if (logincheck) {
            this.setShowuserData();
            this.setImage();
        }
        else {
            src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_5__["MyRoutingMethods"].gotoHome(this.router);
        }
    }
    setImage() {
        this.userDetailsModal.profilePic = this.cookiesService.get('profilePic');
        if (!this.userDetailsModal.profilePic) {
            this.userDetailsModal.profilePic = "./assets/imgs/default-admin.jpg";
        }
        else {
            this.userDetailsModal.profilePic = src_app_utillpackage_constant__WEBPACK_IMPORTED_MODULE_4__["MyConstants"].IMAGESERVERURL + this.userDetailsModal.profilePic;
        }
    }
    /**Set Show Data Into Personal Deatils */
    setShowuserData() {
        this.userName = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserFistName(this.cookiesService) + " " + src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUseLastName(this.cookiesService);
        this.userDetailsModal.email = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getEmaild(this.cookiesService);
        this.userDetailsModal.contact = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUsercontact(this.cookiesService);
        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].showconsole(this.Tag, "Show User Panel :- " + src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserAddress(this.cookiesService));
        if (src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserAddress(this.cookiesService) != "undefined"
            && src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUsercity(this.cookiesService) != "undefined"
            && src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserstate(this.cookiesService) != "undefined"
            && src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserzip(this.cookiesService) != "undefined") {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].showconsole(this.Tag, "else is working");
            this.address = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserAddress(this.cookiesService) + " "
                + " " + src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUsercity(this.cookiesService)
                + " " + src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserstate(this.cookiesService)
                + " " + src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserzip(this.cookiesService);
            this.showCompleteProfileButton = true;
        }
        else {
            src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].showconsole(this.Tag, "If is working");
            this.address = "Nil";
            this.showCompleteProfileButton = false;
        }
    }
    /**Image Selection Code */
    onSelectFile(event) {
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (innerEvent) => {
                this.imageurl = innerEvent.target.result;
                this.selectedImageUrl = event.target.files[0];
                const adminDetails = new FormData();
                adminDetails.append('profilePic', this.selectedImageUrl, this.selectedImageUrl.name);
                this.updateUsersDetails(adminDetails);
            };
        }
    }
    /**
       * method to update admin details
       * @param userDetails updated admin details object
       */
    updateUsersDetails(userDetails) {
        this.spiner.show();
        this.userBackEndServices.updateDetails(userDetails).subscribe(response => {
            this.spiner.hide();
            if (response.success) {
                this.userBackEndServices.setCurrentProfilePic(this.cookiesService.get('profilePic'));
                this.setImage();
                src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].opensweetalert(response.message);
            }
            else {
                this.spiner.hide();
                if (response.message == "Authorization not correct") {
                    src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].deletecookies(this.cookiesService);
                    src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_5__["MyRoutingMethods"].gotoHome(this.router);
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].opensweetalertError(response.message);
                }
                else {
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].opensweetalertError(response.message);
                }
            }
        });
    }
    /**
           *
           * Open  Modal Function
           */
    openModal(content) {
        this.modalReference = this.modalService.open(content, { centered: true });
        //  this.modalReference.componentInstance.actionMessage = this.actionmessage;
    }
    /**
     *
     * close Modal Function
     */
    JoinAndClose() {
        this.modalReference.close();
    }
    /**Numarical Enter Code Only */
    keyPress(event) {
        const patt = /^[0-9]{1,4}(\.[0-9][0-9])?$/;
        let inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !patt.test(inputChar)) {
            event.preventDefault();
        }
    }
    /**Set MOdal Data Edit */
    setModalUserData() {
        this.errorMessage = "";
        this.userDetailsModal.firstName = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserFistName(this.cookiesService);
        this.userDetailsModal.lastName = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUseLastName(this.cookiesService);
        this.userDetailsModal.contact = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUsercontact(this.cookiesService);
        if (src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserAddress(this.cookiesService) == "undefined"
            || src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUsercity(this.cookiesService) == "undefined"
            || src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserstate(this.cookiesService) == "undefined"
            || src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserzip(this.cookiesService) == "undefined") {
            this.userDetailsModal.address = "";
            this.userDetailsModal.city = "";
            this.userDetailsModal.state = "";
            this.userDetailsModal.zip = "";
        }
        else {
            this.userDetailsModal.address = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserAddress(this.cookiesService);
            this.userDetailsModal.city = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUsercity(this.cookiesService);
            this.userDetailsModal.state = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserstate(this.cookiesService);
            this.userDetailsModal.zip = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserzip(this.cookiesService);
        }
    }
    /**Open Edit MOdal  */
    showUpdateProfileMOdal(content, modalTitleString) {
        this.modalTitle = modalTitleString;
        this.setModalUserData();
        this.openModal(content);
    }
    /**
     * Validation Forms Edit And Complete Profile
     */
    validationProfile() {
        // var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.userDetailsModal.firstName.trim().length == 0) {
            this.errorMessage = "Enter first name";
            return false;
        }
        else if (this.userDetailsModal.lastName.trim().length == 0) {
            this.errorMessage = "Enter last name";
            return false;
        }
        // else if (this.userDetailsModal.email.trim().length == 0) {
        //   this.errorMessage = "Enter email";
        //   return false;
        // } else if (!EMAIL_REGEXP.test(this.userDetailsModal.email.trim())) {
        //   this.errorMessage = "Email is invalid";
        //   return false;
        // } 
        else if (this.userDetailsModal.contact.trim().length == 0) {
            this.errorMessage = "Enter contact number";
            return false;
        }
        else if (this.userDetailsModal.address.trim().length == 0) {
            this.errorMessage = "Enter address";
            return false;
        }
        else if (this.userDetailsModal.city.trim().length == 0) {
            this.errorMessage = "Enter City";
            return false;
        }
        else if (this.userDetailsModal.state.trim().length == 0) {
            this.errorMessage = "Enter state";
            return false;
        }
        else if (this.userDetailsModal.zip.trim().length == 0) {
            this.errorMessage = "Enter zip code";
            return false;
        }
        else {
            this.errorMessage = "";
            return true;
        }
    }
    /**Update USer Profile */
    updateUserDeatils() {
        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].showconsole(this.Tag, "Working");
        if (this.validationProfile()) {
            let userdata = {};
            userdata.firstName = this.userDetailsModal.firstName;
            userdata.lastName = this.userDetailsModal.lastName;
            // userdata.email = this.userDetailsModal.email;
            userdata.contact = this.userDetailsModal.contact;
            userdata.address = this.userDetailsModal.address;
            userdata.city = this.userDetailsModal.city;
            userdata.state = this.userDetailsModal.state;
            userdata.zip = this.userDetailsModal.zip;
            this.spiner.show();
            this.userBackEndServices.updateDetails(userdata).subscribe(response => {
                this.spiner.hide();
                if (response.success) {
                    this.JoinAndClose();
                    var profilename = src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUserFistName(this.cookiesService) + " " + src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].getUseLastName(this.cookiesService);
                    this.userBackEndServices.setCurrentProfileName(profilename);
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].opensweetalert(response.message);
                    this.setShowuserData();
                }
                else {
                    this.spiner.hide();
                    this.JoinAndClose();
                    if (response.message == "Authorization not correct") {
                        src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].deletecookies(this.cookiesService);
                        src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_5__["MyRoutingMethods"].gotoHome(this.router);
                        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].opensweetalertError(response.message);
                    }
                    else {
                        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].opensweetalertError(response.message);
                    }
                }
            });
        }
    }
    /**
            *
            * Open Change Password  Modal Function
            */
    openChangePasswordModal(changePasswordModal) {
        this.modalReference = this.modalService.open(changePasswordModal, { centered: true });
        //  this.modalReference.componentInstance.actionMessage = this.actionmessage;
    }
    changePassword(changePasswordModal) {
        this.openChangePasswordModal(changePasswordModal);
    }
    /**Validationchange Password Password */
    validationChangePassword() {
        if (this.oldPwd.trim().toString() == '') {
            this.errorMessage = "old Password field can't be empty.";
            return false;
        }
        if (this.userDetailsModal.password.trim().toString() == '') {
            this.errorMessage = "New Password field can't be empty.";
            return false;
        }
        if (this.userDetailsModal.confirm_password.trim().toString() == '') {
            this.errorMessage = "Confirm Password field can't be empty.";
            return false;
        }
        else if (this.userDetailsModal.password.toUpperCase() == this.oldPwd.toUpperCase()) {
            this.errorMessage = "New Password can't be same as Old Password";
            return false;
        }
        else if (this.userDetailsModal.password.toUpperCase() != this.userDetailsModal.confirm_password.toUpperCase()) {
            this.errorMessage = "Oops, New Password & Confirm Password are not same";
            return false;
        }
        else {
            this.errorMessage = "";
            return true;
        }
    }
    /**Change Password */
    updatePassword() {
        if (this.validationChangePassword()) {
            this.spiner.show();
            let userDetails = {};
            userDetails.password = this.userDetailsModal.password;
            userDetails.oldPassword = this.oldPwd;
            this.userBackEndServices.updateDetails(userDetails).subscribe(response => {
                this.JoinAndClose();
                if (response.success) {
                    this.spiner.hide();
                    src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].deletecookies(this.cookiesService);
                    src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_5__["MyRoutingMethods"].gotoHome(this.router);
                    src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].opensweetalert(response.message + " please Login Again");
                }
                else {
                    this.spiner.hide();
                    this.JoinAndClose();
                    if (response.message == "Authorization not correct") {
                        src_app_utillpackage_utillpackage_my_cookies__WEBPACK_IMPORTED_MODULE_1__["MyCookies"].deletecookies(this.cookiesService);
                        src_app_utillpackage_utillpackage_my_routing_methods__WEBPACK_IMPORTED_MODULE_5__["MyRoutingMethods"].gotoHome(this.router);
                        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_3__["CommonMethods"].opensweetalertError(response.message);
                    }
                    else {
                        this.errorMessage = response.message;
                        // CommonMethods.opensweetalertError(response.message)
                    }
                }
            });
        }
    }
}
ProfileshowComponent.ɵfac = function ProfileshowComponent_Factory(t) { return new (t || ProfileshowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_11__["UserpanelServiceService"])); };
ProfileshowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileshowComponent, selectors: [["app-profileshow"]], decls: 52, vars: 8, consts: [[1, "site-section", 2, "padding-top", "90px"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], ["data-aos", "fade-left", 1, "title-heading"], [1, "profilediv"], [1, "card", "imageCard"], [1, "card-body"], [1, "cabinet", "center-block"], ["id", "item-img-output", 1, "gambar", "img-responsive", "img-thumbnail", 3, "src"], [1, "fa", "fa-camera"], ["type", "file", "accept", "image/*", "name", "file_photo", 1, "item-img", "file", "center-block", 3, "change"], [1, "card", "contentcard"], [1, "topview"], [2, "color", "#000"], [1, "editbutton"], [3, "click", 4, "ngIf"], [3, "click"], [1, "mainTextDiv"], [1, "textshow"], ["for", ""], ["class", "field", "style", "margin-bottom: 0;", 4, "ngIf"], ["content", ""], ["changepassword", ""], [1, "field", 2, "margin-bottom", "0"], ["type", "submit", 1, "submit", "button", 3, "click"], [1, "modal-body", 2, "text-align", "center"], [1, "close-icon", 3, "click"], [1, "fa", "fa-times"], [1, "title-heading"], [1, "login100-form"], [1, "formconatiner"], [1, "form-element"], ["placeholder", "Enter first name", "type", "text", "name", "first_name", "id", "first_name", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter last name", "type", "text", "name", "last_name", "id", "last_name", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter contact number", "type", "text", "name", "conatct_number", "id", "contact_number", "required", "", "autocomplete", "off", 3, "ngModel", "keypress", "ngModelChange"], ["placeholder", "Enter address", "type", "text", "name", "address", "id", "address", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter city", "type", "text", "name", "city", "id", "city", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter state", "type", "text", "name", "state", "id", "state", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["placeholder", "Enter zip code", "type", "text", "name", "zip_code", "id", "zip_code", "required", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "errorMessage"], [1, "form-outer"], ["for", "oldpassword"], ["placeholder", "Old Password", "type", "password", "id", "oldpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "npassword"], ["placeholder", "New Password", "type", "password", "id", "npassword", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["for", "cpassword"], ["placeholder", "Confirm Password", "type", "password", "id", "cpassword", "autocomplete", "off", 3, "ngModel", "ngModelChange", "keyup.enter"], [1, "form-element", 2, "text-align", "center"], [1, "submit-btn", 3, "click"]], template: function ProfileshowComponent_Template(rf, ctx) { if (rf & 1) {
        const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Profile Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "figcaption");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProfileshowComponent_Template_input_change_14_listener($event) { return ctx.onSelectFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Personal Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProfileshowComponent_a_23_Template, 2, 0, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileshowComponent_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](51); return ctx.changePassword(_r51); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Change Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contact Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProfileshowComponent_div_47_Template, 3, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProfileshowComponent_ng_template_48_Template, 42, 9, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProfileshowComponent_ng_template_50_Template, 25, 4, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.userDetailsModal.profilePic, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCompleteProfileButton == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetailsModal.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userDetailsModal.contact);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showCompleteProfileButton == false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"]], styles: [".top-n-margin[_ngcontent-%COMP%] {\n    margin-top: -65px;\n}\n\n.title-heading[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n\n.profilediv[_ngcontent-%COMP%] {\n    display: flex;\n    flex-flow: row;\n    justify-content: space-between;\n    padding: 20px;\n}\n\n.profilediv[_ngcontent-%COMP%]   .imageCard[_ngcontent-%COMP%] {\n    width: 316px;\n}\n\n.profilediv[_ngcontent-%COMP%]   .imageCard[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-top: 10px;\n    text-transform: capitalize;\n}\n\n.profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%] {\n    width: calc(100% - 316px);\n    margin: 0px 10px;\n}\n\n.profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .topview[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    color: #007bff;\n}\n\n.profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .topview[_ngcontent-%COMP%]   .editbutton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #007bff;\n    text-transform: uppercase;\n    cursor: pointer;\n    padding-left: 4px;\n}\n\n.profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .topview[_ngcontent-%COMP%]   .editbutton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #e92330;\n    text-decoration: underline;\n}\n\n.profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    \n}\n\n.profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%] {\n    display: inline-block;\n    padding: 10px;\n    width: 100%;\n    \n}\n\n.profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 500;\n    color: #a7a3a3b8;\n    margin-right: 14px\n}\n\n.profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-weight: 200;\n    color: #000000;\n}\n\nlabel.cabinet[_ngcontent-%COMP%] {\n    display: block;\n    cursor: pointer;\n    position: relative;\n    width: 200px;\n    height: 200px;\n    background: #fff;\n    border-radius: 50%;\n    border: 1px solid #707070;\n    padding: 2px;\n    margin: auto;\n    z-index: 1;\n}\n\nlabel.cabinet[_ngcontent-%COMP%]   input.file[_ngcontent-%COMP%] {\n    position: absolute;\n    opacity: 0;\n    -moz-opacity: 0;\n    width: 100%;\n    top: 0;\n    height: 100%;\n    left: 0;\n    cursor: pointer;\n    padding: 0;\n}\n\n.floating-label[_ngcontent-%COMP%] {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin-top: 19px;\n}\n\n.cabinet[_ngcontent-%COMP%]   .img-thumbnail[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n}\n\n#upload-demo[_ngcontent-%COMP%] {\n    width: 250px;\n    height: 250px;\n    padding-bottom: 25px;\n}\n\nfigure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    color: #ef555d;\n    text-shadow: 0 0 10px #fce1e0;\n    text-align: justify;\n}\n\nfigure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 25px;\n}\n\n.profile-section[_ngcontent-%COMP%] {\n    border: none;\n}\n\n.profile-name[_ngcontent-%COMP%] {\n    text-align: center;\n    padding-bottom: 20px;\n}\n\n.profile-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 25px;\n    padding-top: 5px;\n    text-transform: uppercase;\n    letter-spacing: 1.2px;\n}\n\n.profile-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 22px;\n    padding-top: 4px;\n}\n\n.profile-name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    display: inline-block;\n    padding: 10px 15px;\n    background: #e92330;\n    min-width: 180px;\n    color: #fff;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n\n\n.submit.button[_ngcontent-%COMP%] {\n    font-size: 14px;\n    border-radius: 2px;\n    display: block;\n    width: 100%;\n    padding: 10px 20px;\n    border: 0 none;\n    text-transform: uppercase;\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n    vertical-align: middle;\n    border: none;\n    background: #ff586b;\n    color: #fff;\n    margin-top: 25px;\n}\n\n.submit[_ngcontent-%COMP%]::before {\n    content: \"\";\n    width: 0;\n    height: 1px;\n    position: absolute;\n    transition: all 0.2s linear;\n    background: #fff;\n}\n\n.submit[_ngcontent-%COMP%]::after {\n    content: \"\";\n    width: 0;\n    height: 1px;\n    position: absolute;\n    transition: all 0.2s linear;\n    background: #fff;\n}\n\n.submit[_ngcontent-%COMP%]:hover {\n    background: #333;\n}\n\n.submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    content: \"\";\n    width: 1px;\n    height: 0;\n    position: absolute;\n    transition: all 0.2s linear;\n    background: #fff;\n}\n\n.submit[_ngcontent-%COMP%]:hover::before, .submit[_ngcontent-%COMP%]:hover::after {\n    width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\n    height: 100%;\n}\n\n.submit[_ngcontent-%COMP%]::before {\n    left: 50%;\n    top: 3px;\n    transition-duration: 0.4s;\n}\n\n.submit[_ngcontent-%COMP%]::after {\n    left: 50%;\n    bottom: 3px;\n    transition-duration: 0.4s;\n}\n\n.submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n    left: 3px;\n    top: 50%;\n    transition-duration: 0.4s;\n}\n\n.submit[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::after {\n    right: 3px;\n    top: 50%;\n    transition-duration: 0.4s;\n}\n\n.submit[_ngcontent-%COMP%]:hover::before, .submit[_ngcontent-%COMP%]:hover::after {\n    left: 3px;\n    width: calc(100% - 6px);\n}\n\n.submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::before, .submit[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]::after {\n    top: 3px;\n    height: calc(100% - 6px);\n}\n\n\n\n.form-outer[_ngcontent-%COMP%] {\n    padding: 20px 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n    display: block;\n}\n\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n    padding: 0;\n    display: flex;\n    justify-content: space-between;\n}\n\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    width: 48%;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n    text-align: left;\n    display: block;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 6px 15px;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n    background: #e92330;\n    border-radius: 4px;\n    text-align: center;\n    padding: 12px 10px;\n    min-width: 300px;\n    display: inline-block;\n    color: #fff;\n    margin-top: 15px;\n    text-decoration: none;\n    transition: 0.3s all;\n    font-size: 16px;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    cursor: pointer;\n}\n\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\n    background: #444;\n    transition: 0.3s all;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n    color: #707070;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n    color: #707070;\n}\n\n.login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n    margin-top: 20px;\n}\n\n.login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-bottom: 4px;\n    text-align: left;\n    display: block;\n    text-transform: none;\n}\n\n.login100-form[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    padding: 8px 15px;\n}\n\n.formconatiner[_ngcontent-%COMP%] {\n    max-height: 100%;\n    height: 300px;\n    overflow-y: auto;\n}\n\n\n\n.errorMessage[_ngcontent-%COMP%] {\n    color: red;\n    text-align: start;\n    padding: 10px 0px;\n    font-size: 14px;\n}\n\n@media (max-width: 991px) {\n    label.cabinet[_ngcontent-%COMP%] {\n        height: 180px;\n        width: 180px;\n    }\n    .profilediv[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: column;\n        padding: 15px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .imageCard[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .profilediv[_ngcontent-%COMP%]   .imageCard[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        text-align: center;\n        padding-top: 10px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 10px 0px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-size: 14px;\n        word-break: break-all;\n        display: block;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n}\n\n@media (max-width: 767px) {\n    label.cabinet[_ngcontent-%COMP%] {\n        height: 150px;\n        width: 150px;\n    }\n    figure[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n    .profile-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 22px;\n        letter-spacing: 1px;\n        margin-bottom: 0px;\n    }\n    .profile-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n        font-size: 18px;\n    }\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\n        margin-bottom: 20px;\n    }\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n        min-width: auto;\n        padding: 10px 15px;\n        width: 100%;\n    }\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]:last-child {\n        margin-bottom: 0;\n    }\n    .form-outer[_ngcontent-%COMP%] {\n        padding-bottom: 0;\n    }\n    .profilediv[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: column;\n        padding: 15px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .imageCard[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .profilediv[_ngcontent-%COMP%]   .imageCard[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        text-align: center;\n        padding-top: 10px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 10px 0px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-size: 14px;\n        word-break: break-all;\n        display: block;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n}\n\n@media (max-width: 575px) {\n    .profilediv[_ngcontent-%COMP%] {\n        display: flex;\n        flex-flow: column;\n        padding: 15px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .imageCard[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .profilediv[_ngcontent-%COMP%]   .imageCard[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        text-align: center;\n        padding-top: 10px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%] {\n        width: 100%;\n        margin: 10px 0px;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%] {\n        padding-left: 0;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n        font-size: 14px;\n        word-break: break-all;\n        display: block;\n    }\n    .profilediv[_ngcontent-%COMP%]   .contentcard[_ngcontent-%COMP%]   .mainTextDiv[_ngcontent-%COMP%]   .textshow[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        font-size: 14px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9wcm9maWxlc2hvdy9wcm9maWxlc2hvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLFdBQVc7SUFDWCxNQUFNO0lBQ04sWUFBWTtJQUNaLE9BQU87SUFDUCxlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUdBLHNCQUFzQjs7QUFFdEI7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFFBQVE7SUFDUixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksV0FBVztJQUNYLFVBQVU7SUFDVixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsUUFBUTtJQUNSLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLFFBQVE7SUFDUix3QkFBd0I7QUFDNUI7O0FBR0EsTUFBTTs7QUFFTjtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7QUFGQTtJQUNJLGNBQWM7QUFDbEI7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUdBOzs7Ozs7R0FNRzs7QUFFSDtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLHFCQUFxQjtRQUNyQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YscUJBQXFCO1FBQ3JCLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9wcm9maWxlc2hvdy9wcm9maWxlc2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcC1uLW1hcmdpbiB7XG4gICAgbWFyZ2luLXRvcDogLTY1cHg7XG59XG5cbi50aXRsZS1oZWFkaW5nIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4ucHJvZmlsZWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogMjBweDtcbn1cblxuLnByb2ZpbGVkaXYgLmltYWdlQ2FyZCB7XG4gICAgd2lkdGg6IDMxNnB4O1xufVxuXG4ucHJvZmlsZWRpdiAuaW1hZ2VDYXJkIGgyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wcm9maWxlZGl2IC5jb250ZW50Y2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMxNnB4KTtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xufVxuXG4ucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLnRvcHZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5wcm9maWxlZGl2IC5jb250ZW50Y2FyZCAudG9wdmlldyAuZWRpdGJ1dHRvbiBhIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLnByb2ZpbGVkaXYgLmNvbnRlbnRjYXJkIC50b3B2aWV3IC5lZGl0YnV0dG9uIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjZTkyMzMwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4ucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLm1haW5UZXh0RGl2IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgLyogcGFkZGluZy1ib3R0b206IDI4cHg7ICovXG59XG5cbi5wcm9maWxlZGl2IC5jb250ZW50Y2FyZCAubWFpblRleHREaXYgLnRleHRzaG93IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBhbGlnbi1jb250ZW50OiBjZW50ZXI7ICovXG59XG5cbi5wcm9maWxlZGl2IC5jb250ZW50Y2FyZCAubWFpblRleHREaXYgLnRleHRzaG93IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogI2E3YTNhM2I4O1xuICAgIG1hcmdpbi1yaWdodDogMTRweFxufVxuXG4ucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLm1haW5UZXh0RGl2IC50ZXh0c2hvdyBzcGFuIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxubGFiZWwuY2FiaW5ldCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgei1pbmRleDogMTtcbn1cblxubGFiZWwuY2FiaW5ldCBpbnB1dC5maWxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtbW96LW9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uZmxvYXRpbmctbGFiZWwge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xufVxuXG4uY2FiaW5ldCAuaW1nLXRodW1ibmFpbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbiN1cGxvYWQtZGVtbyB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbmZpZ3VyZSBmaWdjYXB0aW9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGNvbG9yOiAjZWY1NTVkO1xuICAgIHRleHQtc2hhZG93OiAwIDAgMTBweCAjZmNlMWUwO1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbmZpZ3VyZSBmaWdjYXB0aW9uIGkge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnByb2ZpbGUtc2VjdGlvbiB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ucHJvZmlsZS1uYW1lIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5wcm9maWxlLW5hbWUgaDIge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xufVxuXG4ucHJvZmlsZS1uYW1lIHAge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4ucHJvZmlsZS1uYW1lIGEge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4vKlN1Yk1pdCBCdXR0b24gQ2Fsc3MqL1xuXG4uc3VibWl0LmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogI2ZmNTg2YjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4uc3VibWl0OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uc3VibWl0OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zdWJtaXQ6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMzMzM7XG59XG5cbi5zdWJtaXQgc3Bhbjo6YmVmb3JlLFxuLnN1Ym1pdCBzcGFuOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB3aWR0aDogMXB4O1xuICAgIGhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5zdWJtaXQ6aG92ZXI6OmJlZm9yZSxcbi5zdWJtaXQ6aG92ZXI6OmFmdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Ym1pdDpob3ZlciBzcGFuOjpiZWZvcmUsXG4uc3VibWl0OmhvdmVyIHNwYW46OmFmdGVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zdWJtaXQ6OmJlZm9yZSB7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogM3B4O1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5zdWJtaXQ6OmFmdGVyIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYm90dG9tOiAzcHg7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcbn1cblxuLnN1Ym1pdCBzcGFuOjpiZWZvcmUge1xuICAgIGxlZnQ6IDNweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xufVxuXG4uc3VibWl0IHNwYW46OmFmdGVyIHtcbiAgICByaWdodDogM3B4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNHM7XG59XG5cbi5zdWJtaXQ6aG92ZXI6OmJlZm9yZSxcbi5zdWJtaXQ6aG92ZXI6OmFmdGVyIHtcbiAgICBsZWZ0OiAzcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDZweCk7XG59XG5cbi5zdWJtaXQ6aG92ZXIgc3Bhbjo6YmVmb3JlLFxuLnN1Ym1pdDpob3ZlciBzcGFuOjphZnRlciB7XG4gICAgdG9wOiAzcHg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cHgpO1xufVxuXG5cbi8qRW5kKi9cblxuLmZvcm0tb3V0ZXIge1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm0tb3V0ZXIgLmNvbC0xMiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvcm0tb3V0ZXIgLmNvbC0xMiAuZm9ybS1lbGVtZW50IHtcbiAgICB3aWR0aDogNDglO1xufVxuXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50LnN1Ym1pdC1idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNnB4IDE1cHg7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG4ge1xuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHg7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG46aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICM0NDQ7XG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4ubG9naW4xMDAtZm9ybSAuZm9ybS1lbGVtZW50IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubG9naW4xMDAtZm9ybSAuZm9ybS1lbGVtZW50IGxhYmVsIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5sb2dpbjEwMC1mb3JtIC5mb3JtLWVsZW1lbnQgaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDhweCAxNXB4O1xufVxuXG4uZm9ybWNvbmF0aW5lciB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cblxuLyogLmZvcm1jb25hdGluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50XG59XG5cbi5mb3JtY29uYXRpbmVyIHtcbiAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG59ICovXG5cbi5lcnJvck1lc3NhZ2Uge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgICBsYWJlbC5jYWJpbmV0IHtcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiAuaW1hZ2VDYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5wcm9maWxlZGl2IC5pbWFnZUNhcmQgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiAuY29udGVudGNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICB9XG4gICAgLnByb2ZpbGVkaXYgLmNvbnRlbnRjYXJkIC5tYWluVGV4dERpdiB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgLnByb2ZpbGVkaXYgLmNvbnRlbnRjYXJkIC5tYWluVGV4dERpdiAudGV4dHNob3cgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLnByb2ZpbGVkaXYgLmNvbnRlbnRjYXJkIC5tYWluVGV4dERpdiAudGV4dHNob3cgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICBsYWJlbC5jYWJpbmV0IHtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICBmaWd1cmUgZmlnY2FwdGlvbiBpIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAucHJvZmlsZS1uYW1lIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIC5wcm9maWxlLW5hbWUgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG4ge1xuICAgICAgICBtaW4td2lkdGg6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIC5mb3JtLW91dGVyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgfVxuICAgIC5wcm9maWxlZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICAgIC5wcm9maWxlZGl2IC5pbWFnZUNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnByb2ZpbGVkaXYgLmltYWdlQ2FyZCBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5wcm9maWxlZGl2IC5jb250ZW50Y2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLm1haW5UZXh0RGl2IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLm1haW5UZXh0RGl2IC50ZXh0c2hvdyBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLm1haW5UZXh0RGl2IC50ZXh0c2hvdyBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xuICAgIC5wcm9maWxlZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgfVxuICAgIC5wcm9maWxlZGl2IC5pbWFnZUNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnByb2ZpbGVkaXYgLmltYWdlQ2FyZCBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5wcm9maWxlZGl2IC5jb250ZW50Y2FyZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLm1haW5UZXh0RGl2IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLm1haW5UZXh0RGl2IC50ZXh0c2hvdyBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAucHJvZmlsZWRpdiAuY29udGVudGNhcmQgLm1haW5UZXh0RGl2IC50ZXh0c2hvdyBsYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileshowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profileshow',
                templateUrl: './profileshow.component.html',
                styleUrls: ['./profileshow.component.css']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerService"] }, { type: src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_11__["UserpanelServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/blank-loginandsignup/blank-loginandsignup.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/blank-loginandsignup/blank-loginandsignup.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BlankLoginandsignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankLoginandsignupComponent", function() { return BlankLoginandsignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class BlankLoginandsignupComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlankLoginandsignupComponent.ɵfac = function BlankLoginandsignupComponent_Factory(t) { return new (t || BlankLoginandsignupComponent)(); };
BlankLoginandsignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankLoginandsignupComponent, selectors: [["app-blank-loginandsignup"]], decls: 1, vars: 0, template: function BlankLoginandsignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibGFuay1sb2dpbmFuZHNpZ251cC9ibGFuay1sb2dpbmFuZHNpZ251cC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankLoginandsignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank-loginandsignup',
                templateUrl: './blank-loginandsignup.component.html',
                styleUrls: ['./blank-loginandsignup.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/blank/blank.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/blank/blank.component.ts ***!
  \*************************************************/
/*! exports provided: BlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankComponent", function() { return BlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utillpackage/common-method */ "./src/app/utillpackage/common-method.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../componentPackage/navbar/navbar.component */ "./src/app/componentPackage/navbar/navbar.component.ts");
/* harmony import */ var _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentPackage/footer/footer.component */ "./src/app/componentPackage/footer/footer.component.ts");







function BlankComponent_app_navbar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
} }
function BlankComponent_app_footer_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-footer");
} }
class BlankComponent {
    constructor(router) {
        this.router = router;
        this.Tag = "BlankComponent";
        this.showFooter = true;
        src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showconsole(this.Tag, "SHow Current Url :- " + router.url);
        if (router.url == "/delivery") {
            this.showFooter = false;
        }
        else {
            this.showFooter = true;
        }
    }
    ngOnInit() {
    }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], decls: 4, vars: 2, consts: [[4, "ngIf"], [1, "mainblanck"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BlankComponent_app_navbar_0_Template, 1, 0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BlankComponent_app_footer_3_Template, 1, 0, "app-footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFooter == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: [".footerhide[_ngcontent-%COMP%] {\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JsYW5rL2JsYW5rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2JsYW5rL2JsYW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAubWFpbmJsYW5jayB7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG59ICovXG5cbi5mb290ZXJoaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: ['./blank.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/full/full.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/full/full.component.ts ***!
  \***********************************************/
/*! exports provided: FullComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullComponent", function() { return FullComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/componentPackage/navbar/navbar.component */ "./src/app/componentPackage/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _componentPackage_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../componentPackage/home/home.component */ "./src/app/componentPackage/home/home.component.ts");
/* harmony import */ var _componentPackage_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../componentPackage/aboutus/aboutus.component */ "./src/app/componentPackage/aboutus/aboutus.component.ts");
/* harmony import */ var _componentPackage_faq_faq_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../componentPackage/faq/faq.component */ "./src/app/componentPackage/faq/faq.component.ts");
/* harmony import */ var _componentPackage_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../componentPackage/contactus/contactus.component */ "./src/app/componentPackage/contactus/contactus.component.ts");
/* harmony import */ var _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../componentPackage/footer/footer.component */ "./src/app/componentPackage/footer/footer.component.ts");











class FullComponent {
    constructor(renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.Tag = "FullComponent";
        // CommonMethods.showLog(this.Tag,'Window Resolution :'+window.innerWidth)
        this.url = this.router.url;
        //  console.log("constructor is working:- "+this.url)
    }
    ngOnInit() {
        //  console.log("on  ngOnInit  working", this.url);
        if (this.url != "/delivery") {
            var navbar = this.element.nativeElement.children[0].children[0];
            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                if (number > 350 || window.pageYOffset > 350) {
                    // add logic
                    navbar.classList.remove('navbar-transparent');
                    document.getElementById("myBtn").style.display = "block";
                    document.getElementById("myBtn").classList.add("lightSpeedIn");
                    document.getElementById("myBtn").classList.remove("lightSpeedOut");
                    // document.getElementById("bounce").classList.add("bounceIn");
                }
                else {
                    navbar.classList.add('navbar-transparent');
                    document.getElementById("myBtn").classList.remove("lightSpeedIn");
                    document.getElementById("myBtn").classList.add("lightSpeedOut");
                }
            });
            navbar.scrollIntoView({ behavior: "smooth", block: "start" });
            var sections = jquery__WEBPACK_IMPORTED_MODULE_1__('section'), nav = jquery__WEBPACK_IMPORTED_MODULE_1__('nav'), nav_height = nav.outerHeight();
            jquery__WEBPACK_IMPORTED_MODULE_1__(window).on('scroll', function () {
                var cur_pos = jquery__WEBPACK_IMPORTED_MODULE_1__(this).scrollTop();
                //  CommonMethods.showLog(this.Tag,"cur_pos:- "+cur_pos);
                sections.each(function () {
                    // sections.addClass('active');
                    // nav.find('a').addClass('active')
                    var top = jquery__WEBPACK_IMPORTED_MODULE_1__(this).offset().top - nav_height, bottom = top + jquery__WEBPACK_IMPORTED_MODULE_1__(this).outerHeight();
                    // CommonMethods.showLog(this.Tag,"top:- "+top);
                    // CommonMethods.showLog(this.Tag,"bottom:- "+bottom);
                    if (cur_pos >= top && cur_pos <= bottom) {
                        nav.find('a').removeClass('active');
                        sections.removeClass('active');
                        jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass('active');
                        nav.find('a[href="#' + jquery__WEBPACK_IMPORTED_MODULE_1__(this).attr('id') + '"]').addClass('active');
                        jquery__WEBPACK_IMPORTED_MODULE_1__("#mytoggle").attr("aria-expanded", "false");
                        document.getElementById('probootstrap-navbar').classList.remove('show');
                        document.getElementById('mytoggle').classList.add('collapsed');
                        document.getElementById('probootstrap-navbar').style.display = "none";
                    }
                });
            });
            // if( this.router.url == "/advertisment" || this.router.url != "/advertisment"){
            nav.find('a').on('click', function () {
                var $el = jquery__WEBPACK_IMPORTED_MODULE_1__(this);
                var id = $el.attr('href');
                // if(this.url == "/advertisment"){
                if (id.includes("/")) {
                    var newid = id.split("/");
                    var ID = newid[0] + newid[1];
                    // console.log("$id :- " + ID);
                    window.scrollTo(0, 0);
                }
                else {
                    var ID = id;
                    // console.log("else is working")
                    jquery__WEBPACK_IMPORTED_MODULE_1__('html, body').animate({
                        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_1__(ID).offset().top - nav_height + 10
                    }, 0);
                }
                // }else{
                // }
                return false;
            });
            // }else{
            // console.log("Show Function else working")
            // nav.find('a').on('click', function () {
            //   var $el = $(this)
            //     , id = $el.attr('href');
            //   $('html, body').animate({
            //     scrollTop: $(id).offset().top - nav_height+10
            //   }, 0);
            //   return false;
            // });
            // }
            nav.find('a').on('click', function () {
                jquery__WEBPACK_IMPORTED_MODULE_1__('.navbar-collapse').hide();
                jquery__WEBPACK_IMPORTED_MODULE_1__("#mytoggle").attr("aria-expanded", "false");
                document.getElementById('probootstrap-navbar').classList.remove('show');
                document.getElementById('mytoggle').classList.add('collapsed');
                document.getElementById('probootstrap-navbar').style.display = "none";
                // document.getElementById('probootstrap-navbar').style.background="initial"
            });
            nav.find('#mytoggle').on('click', function () {
                //  CommonMethods.showLog(this.Tag,'aria Value : '+$("#mytoggle").attr("aria-expanded"))
                if (jquery__WEBPACK_IMPORTED_MODULE_1__("#mytoggle").attr("aria-expanded") == 'true') {
                    document.getElementById('probootstrap-navbar').style.display = "none";
                    // document.getElementById('probootstrap-navbar').style.background="initial"
                    //  CommonMethods.showLog(this.Tag,'If working')
                }
                else {
                    // CommonMethods.showLog(this.Tag,'else working')
                    document.getElementById('probootstrap-navbar').style.display = "unset";
                    // document.getElementById('probootstrap-navbar').style.background="rgba(44, 154, 155, 0.47)"
                }
            });
        }
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
FullComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full"]], viewQuery: function FullComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](src_app_componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], true, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.navbar = _t.first);
    } }, decls: 10, vars: 0, consts: [["id", "home", 1, "active"], ["id", "aboutUS"], ["id", "faq"], ["id", "contactus"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-aboutus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-faq");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-contactus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-footer");
    } }, directives: [src_app_componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _componentPackage_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _componentPackage_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["AboutusComponent"], _componentPackage_faq_faq_component__WEBPACK_IMPORTED_MODULE_6__["FaqComponent"], _componentPackage_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_7__["ContactusComponent"], _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mdWxsL2Z1bGwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FullComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-full',
                templateUrl: './full.component.html',
                styleUrls: ['./full.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { navbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [src_app_componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], { read: true, static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/material/material.ts":
/*!**************************************!*\
  !*** ./src/app/material/material.ts ***!
  \**************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");











class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]
        ],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]], exports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]
                ],
                exports: [
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modalPackages/cookies.ts":
/*!******************************************!*\
  !*** ./src/app/modalPackages/cookies.ts ***!
  \******************************************/
/*! exports provided: CookiesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookiesModel", function() { return CookiesModel; });
class CookiesModel {
    constructor(user) {
        this._id = user._id;
        this.firstname = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.token = user.token;
        this.profilePic = user.profilePic;
        this.contact = user.contact;
        this.address = user.address;
        this.city = user.city;
        this.state = user.state;
        this.zip = user.zip;
    }
}


/***/ }),

/***/ "./src/app/modalPackages/login_signup.ts":
/*!***********************************************!*\
  !*** ./src/app/modalPackages/login_signup.ts ***!
  \***********************************************/
/*! exports provided: LoginSignupModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSignupModal", function() { return LoginSignupModal; });
class LoginSignupModal {
    constructor() { }
}


/***/ }),

/***/ "./src/app/utillpackage/common-method.ts":
/*!***********************************************!*\
  !*** ./src/app/utillpackage/common-method.ts ***!
  \***********************************************/
/*! exports provided: CommonMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonMethods", function() { return CommonMethods; });
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0__);

class CommonMethods {
    static showconsole(tag, message) {
        // console.log(tag, message);
    }
    /*
     *Show Error Dialog Message Common Method
     */
    static showErrorDialog(snackBar, message) {
        snackBar.open(message, "", {
            duration: 3000,
            verticalPosition: 'top',
            horizontalPosition: 'end',
            panelClass: ['blue-snackbar']
        });
    }
    /*
          Show Success Dialog Message Common Method
    */
    static showSuccessDialog(snackBar, message) {
        snackBar.open(message, "", {
            duration: 3000,
            panelClass: ['sucess-snackbar'],
            verticalPosition: 'top',
            horizontalPosition: 'right',
        });
    }
    /**
   * Sweet Alert   Show
   */
    static opensweetalert(message) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            text: message,
            icon: 'success'
        });
    }
    static opensweetalertError(message) {
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
            text: message,
            icon: 'error'
        });
    }
}


/***/ }),

/***/ "./src/app/utillpackage/constant.ts":
/*!******************************************!*\
  !*** ./src/app/utillpackage/constant.ts ***!
  \******************************************/
/*! exports provided: MyConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyConstants", function() { return MyConstants; });
class MyConstants {
}
// static BASEURL = "http://localhost:8081/api/";
// static BASEURL = "http://3.21.83.36:8081/api/";
MyConstants.BASEURL = "https://getithomenow.com:8081";
MyConstants.IMAGESERVERURL = "https://getithomenow.com:8081";


/***/ }),

/***/ "./src/app/utillpackage/utillpackage/my-cookies.ts":
/*!*********************************************************!*\
  !*** ./src/app/utillpackage/utillpackage/my-cookies.ts ***!
  \*********************************************************/
/*! exports provided: MyCookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCookies", function() { return MyCookies; });
class MyCookies {
    static saveLoginDataInCookies(cookieService, cookiesModel) {
        cookieService.set('_id', cookiesModel._id, this.getExpiryTime(), '');
        cookieService.set('email', cookiesModel.email, this.getExpiryTime(), '');
        cookieService.set('token', cookiesModel.token, this.getExpiryTime(), '');
        cookieService.set('profilePic', cookiesModel.profilePic, this.getExpiryTime(), '');
        cookieService.set('contact', cookiesModel.contact, this.getExpiryTime(), '');
        cookieService.set('firstName', cookiesModel.firstname, this.getExpiryTime(), '');
        cookieService.set('lastName', cookiesModel.lastName, this.getExpiryTime(), '');
        cookieService.set('address', cookiesModel.address, this.getExpiryTime(), '');
        cookieService.set('city', cookiesModel.city, this.getExpiryTime(), '');
        cookieService.set('state', cookiesModel.state, this.getExpiryTime(), '');
        cookieService.set('zip', cookiesModel.zip, this.getExpiryTime(), '');
    }
    static checkLoginStatus(cookieService) {
        var cookieExists = cookieService.check('_id');
        cookieExists = cookieService.get('_id') != "";
        if (cookieExists) {
            cookieExists = cookieService.check('email');
            cookieExists = cookieService.get('email') != "";
            if (cookieExists) {
                cookieExists = cookieService.check('token');
                cookieExists = cookieService.get('token') != "";
                if (cookieExists) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    static getId(cookieService) {
        return cookieService.get('_id');
    }
    static getEmaild(cookieService) {
        return cookieService.get('email');
    }
    static getToken(cookieService) {
        return cookieService.get('token');
    }
    static getProfileIMage(cookieService) {
        return cookieService.get('profilePic');
    }
    static getUserFistName(cookieService) {
        return cookieService.get('firstName');
    }
    static getUseLastName(cookieService) {
        return cookieService.get('lastName');
    }
    static getUsercontact(cookieService) {
        return cookieService.get('contact');
    }
    static getUserAddress(cookieService) {
        return cookieService.get('address');
    }
    static getUsercity(cookieService) {
        return cookieService.get('city');
    }
    static getUserstate(cookieService) {
        return cookieService.get('state');
    }
    static getUserzip(cookieService) {
        return cookieService.get('zip');
    }
    static getExpiryTime() {
        let date = new Date();
        date.setDate(date.getDate() + 1);
        return date;
    }
    static deletecookies(cookieService) {
        cookieService.deleteAll();
    }
}


/***/ }),

/***/ "./src/app/utillpackage/utillpackage/my-routing-methods.ts":
/*!*****************************************************************!*\
  !*** ./src/app/utillpackage/utillpackage/my-routing-methods.ts ***!
  \*****************************************************************/
/*! exports provided: MyRoutingMethods */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyRoutingMethods", function() { return MyRoutingMethods; });
class MyRoutingMethods {
    static gotoHome(router) {
        router.navigate(['home']);
    }
    static gotoAds(router) {
        router.navigate(['promotions']);
    }
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pawan/AngularProjects/GetItHomeNowUser_Ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map