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







const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        component: _layout_full_full_component__WEBPACK_IMPORTED_MODULE_2__["FullComponent"],
        children: []
    },
    {
        path: '',
        component: _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_3__["BlankComponent"],
        children: [
            { path: 'advertisment', component: _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_4__["AdvertismentsComponent"] },
        ]
    },
    { path: '***', redirectTo: 'home' }
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["id", "myBtn", "title", "Go to top", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up"], ["bdColor", "rgb(254,250,250)", "size", "large", "color", "#ff586b", "type", "timer", 3, "fullScreen"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentPackage/navbar/navbar.component */ "./src/app/componentPackage/navbar/navbar.component.ts");
/* harmony import */ var _componentPackage_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentPackage/home/home.component */ "./src/app/componentPackage/home/home.component.ts");
/* harmony import */ var _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentPackage/advertisments/advertisments.component */ "./src/app/componentPackage/advertisments/advertisments.component.ts");
/* harmony import */ var _componentPackage_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentPackage/contactus/contactus.component */ "./src/app/componentPackage/contactus/contactus.component.ts");
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/full/full.component */ "./src/app/layout/full/full.component.ts");
/* harmony import */ var _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./componentPackage/footer/footer.component */ "./src/app/componentPackage/footer/footer.component.ts");
/* harmony import */ var _componentPackage_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./componentPackage/faq/faq.component */ "./src/app/componentPackage/faq/faq.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/blank/blank.component */ "./src/app/layout/blank/blank.component.ts");
/* harmony import */ var _componentPackage_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componentPackage/aboutus/aboutus.component */ "./src/app/componentPackage/aboutus/aboutus.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _aos__WEBPACK_IMPORTED_MODULE_7__["AosToken"], useValue: _aos__WEBPACK_IMPORTED_MODULE_7__["aos"] },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _material_material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _componentPackage_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
        _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_12__["AdvertismentsComponent"],
        _componentPackage_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_13__["ContactusComponent"],
        _layout_full_full_component__WEBPACK_IMPORTED_MODULE_14__["FullComponent"],
        _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
        _componentPackage_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["FaqComponent"],
        _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_18__["BlankComponent"],
        _componentPackage_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _material_material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _componentPackage_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                    _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_12__["AdvertismentsComponent"],
                    _componentPackage_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_13__["ContactusComponent"],
                    _layout_full_full_component__WEBPACK_IMPORTED_MODULE_14__["FullComponent"],
                    _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                    _componentPackage_faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["FaqComponent"],
                    _layout_blank_blank_component__WEBPACK_IMPORTED_MODULE_18__["BlankComponent"],
                    _componentPackage_aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_19__["AboutusComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _material_material__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"]
                ],
                providers: [
                    { provide: _aos__WEBPACK_IMPORTED_MODULE_7__["AosToken"], useValue: _aos__WEBPACK_IMPORTED_MODULE_7__["aos"] },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__["HashLocationStrategy"] },
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utillpackage_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utillpackage/constant */ "./src/app/utillpackage/constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class UserpanelServiceService {
    constructor(http) {
        this.http = http;
        this.getAdvertisementUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_2__["MyConstants"].BASEURL + "user/getAdvertisments?name=";
        this.contactUsUrl = _utillpackage_constant__WEBPACK_IMPORTED_MODULE_2__["MyConstants"].BASEURL + "user/makeConsultant";
    }
    /**
      * mw=ethod to create new advertisement
      * @param searchString string to search in advertisements
    */
    getAdvertisement(searchString) {
        //for setting token in headers
        let searchurl = '';
        searchurl = this.getAdvertisementUrl + searchString;
        return this.http.get(searchurl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => { return data; }));
    }
    /**
     * method to send contact us detail via mail
     * @param contactUsData
     */
    contactUs(contactUsData) {
        return this.http.post(this.contactUsUrl, contactUsData);
    }
}
UserpanelServiceService.ɵfac = function UserpanelServiceService_Factory(t) { return new (t || UserpanelServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UserpanelServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserpanelServiceService, factory: UserpanelServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserpanelServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


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
AboutusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusComponent, selectors: [["app-aboutus"]], decls: 14, vars: 0, consts: [[1, "site-section", "about-us"], [1, "container"], [1, "text-center"], ["data-aos", "fade-left", 1, "title-heading"], [1, "about-text"]], template: function AboutusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Is your car too small to fit your oversized delivery?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " GetItHomeNow is the right place to visit for Moving and Storage Service we are the leading company whose mission is to deliver the highest quality moving and storage services to each of our valued customers, Here you will be getting the best Licensed, bonded and Insured Driver deliver product. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " For us affordability and customer satisfaction are our main priority. We charge a flat fee per item move which gives a stress-free moving experience, flat rate of $99/hr including the rate of the truck, moving equipment and the men to get the job done. ");
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/backendServices/userpanel-service.service */ "./src/app/backendServices/userpanel-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








function AdvertismentsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertismentsComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.getAdvertisment(""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Show All Ads");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertismentsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No Advertisement Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdvertismentsComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Store,Estate,Garage Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "The Uber\u00AE of Moving Stuff");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ads_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ads_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.createContent(ads_r6.mainContent)[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.createContent(ads_r6.mainContent)[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.createContent(ads_r6.mainContent)[2]);
} }
function AdvertismentsComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdvertismentsComponent_div_13_div_1_Template, 21, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.adsList);
} }
class AdvertismentsComponent {
    constructor(router, userpanelServiceService, modalService, spinner) {
        this.router = router;
        this.userpanelServiceService = userpanelServiceService;
        this.modalService = modalService;
        this.spinner = spinner;
        this.searchString = "";
        this.noDataFound = false;
        this.adsList = [];
        this.showTable = false;
        this.showTable = false;
        this.noDataFound = false;
        spinner.show();
        this.getAdvertisment();
    }
    ngOnInit() {
    }
    /**GEt AdverTisMEnt List */
    getAdvertisment(searchTerm) {
        if (searchTerm || searchTerm == '') {
            this.searchString = searchTerm;
        }
        this.userpanelServiceService.getAdvertisement(this.searchString).subscribe(response => {
            if (response.success) {
                this.adsList = response.data;
                this.showTable = true;
                setTimeout(() => {
                    this.spinner.hide();
                }, 500);
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
}
AdvertismentsComponent.ɵfac = function AdvertismentsComponent_Factory(t) { return new (t || AdvertismentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_2__["UserpanelServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"])); };
AdvertismentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdvertismentsComponent, selectors: [["app-advertisments"]], decls: 14, vars: 4, consts: [[1, "site-section", "top-n-margin"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], ["data-aos", "fade-left", 1, "title-heading"], [1, "header-left-outer"], ["class", "getAllAd-btn", 4, "ngIf"], [1, "search-box-outer"], ["name", "searchBar", "id", "searchBarforAds", "value", "", "placeholder", "Search..", "type", "text", "autocomplete", "off", 1, "search-box", 3, "ngModel", "ngModelChange", "keyup.enter", "keyup"], ["id", "search-box-icon", "type", "submit", 1, "search", "btn", "btn-link", "text-danger", 3, "click"], [1, "fa", "fa-search", "search-icon"], [4, "ngIf"], ["class", "card-wrapper", 4, "ngIf"], [1, "getAllAd-btn"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], [1, "card-wrapper"], ["class", " card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "topStatic"], [1, "Image"], ["src", "./assets/imgs/logoSmall3.png", "alt", "", 1, "imageLogo"], [1, "bodyCenter"], [1, "big-stuff"], [1, "title-1"], [1, "title-2"], [1, "title-3"], [1, "bottom"], [1, "imageBottom"], ["src", "./assets/imgs/contact.png", "alt", ""], [1, "bottom-title"]], template: function AdvertismentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Advertisments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvertismentsComponent_div_7_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdvertismentsComponent_Template_input_ngModelChange_9_listener($event) { return ctx.searchString = $event; })("keyup.enter", function AdvertismentsComponent_Template_input_keyup_enter_9_listener() { return ctx.getAdvertisment(); })("keyup", function AdvertismentsComponent_Template_input_keyup_9_listener() { return ctx.getAdvertisment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvertismentsComponent_Template_button_click_10_listener() { return ctx.getAdvertisment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdvertismentsComponent_div_12_Template, 3, 0, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdvertismentsComponent_div_13_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchString != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showTable);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".top-n-margin[_ngcontent-%COMP%]{\r\n    margin-top: -65px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n    width: 220px;\r\n    padding-bottom: 10px;\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .imageBottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 270px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n    width: calc(33.3% - 10px);\r\n    border-radius: 5px;\r\n    text-align: center;\r\n    margin-right: 10px;\r\n    margin-bottom: 10px;\r\n    transition: 0.3s all;\r\n    border-bottom-left-radius: 50px;\r\n    border-top-right-radius: 50px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\r\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);\r\n    transform: scale(1.02);\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n    padding: 0;\r\n    font-style: italic;\r\n    background: #e92330;\r\n    margin-bottom: 0px;\r\n    padding: 10px;\r\n    color: #fff;\r\n    border-top-right-radius: 50px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%], .card-wrapper[_ngcontent-%COMP%]   .card.card-2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    border-top-right-radius: 50px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background-color: #70707050;\r\n    z-index: 0;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n    visibility: hidden;\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: auto;\r\n    display: inline-block;\r\n    text-align: center;\r\n    padding: 10px;\r\n    border-radius: 50%;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    margin: 0 5px;\r\n    height: 50px;\r\n    width: 50px;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 22px;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 80%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .action-btn[_ngcontent-%COMP%]   .edit-btn[_ngcontent-%COMP%] {\r\n    background: green;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover   .action-btn[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .big-stuff[_ngcontent-%COMP%] {\r\n    color: #e92330;\r\n    font-size: 22px;\r\n    font-weight: 800;\r\n    letter-spacing: 2px;\r\n    margin-bottom: 10px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\r\n    font-size: 17px;\r\n    font-weight: 800;\r\n    padding: 6px 0;\r\n    margin-bottom: 5px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n    margin-bottom: 12px;\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\r\n    color: #e92330;\r\n    font-size: 22px;\r\n    font-style: italic;\r\n    font-weight: 800;\r\n    padding-top: 10px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.card-wrapper[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    background: #444;\r\n    border-bottom-left-radius: 50px;\r\n}\r\n\r\n\r\n.cardButton[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    width: 500px;\r\n    left: 0;\r\n    top: 180px;\r\n    text-align: center;\r\n    opacity: 0;\r\n    transition: opacity .35s ease;\r\n}\r\n\r\n\r\n.bodyCenter[_ngcontent-%COMP%] {\r\n    padding: 0 15px;\r\n}\r\n\r\n\r\n.cardButton[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    padding: 12px 48px;\r\n    text-align: center;\r\n    color: white;\r\n    border: solid 2px white;\r\n    z-index: 1;\r\n}\r\n\r\n\r\n.card[_ngcontent-%COMP%]:hover   .cardButton[_ngcontent-%COMP%] {\r\n    opacity: 1;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%] {\r\n    padding: 20px 0;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    margin-bottom: 25px;\r\n    display: block;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n    width: 48%;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element.submit-btn[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    font-size: 14px;\r\n    margin-bottom: 4px;\r\n    text-align: left;\r\n    display: block;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    padding: 6px 15px;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    border-radius: 4px;\r\n    text-align: center;\r\n    padding: 12px 10px;\r\n    min-width: 300px;\r\n    display: inline-block;\r\n    color: #fff;\r\n    margin-top: 15px;\r\n    text-decoration: none;\r\n    transition: 0.3s all;\r\n    font-size: 16px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]:hover {\r\n    background: #444;\r\n    transition: 0.3s all;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-moz-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::-ms-input-placeholder {\r\n    color: #707070;\r\n}\r\n\r\n\r\n[_ngcontent-%COMP%]::placeholder {\r\n    color: #707070;\r\n}\r\n\r\n\r\n.search-box-outer[_ngcontent-%COMP%] {\r\n    height: 40px;\r\n    border-radius: 5px;\r\n    padding: 0 40px 0px 5px;\r\n    transition: .3s;\r\n    width: 100%;\r\n    max-width: 300px;\r\n    background-color: #fff;\r\n    border: 1px solid #d7d7e3;\r\n    position: relative;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n.search-box-outer[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    display: block;\r\n    clear: both;\r\n}\r\n\r\n\r\n.search-box-outer[_ngcontent-%COMP%]   input.search-box[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    color: #666;\r\n    border: none;\r\n    padding-left: 10px;\r\n    outline: none;\r\n    width: 100%;\r\n    height: 38px;\r\n    font-size: 15px\r\n}\r\n\r\n\r\n.search-box-outer[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\r\n    \r\n    width: 0;\r\n    height: 0;\r\n    position: absolute;\r\n    right: 20px;\r\n    top: 50%;\r\n    cursor: pointer;\r\n    margin-top: -17.5px;\r\n    margin-left: -8px;\r\n    border: none;\r\n    background-size: contain;\r\n}\r\n\r\n\r\n.search-icon[_ngcontent-%COMP%] {\r\n    font-size: x-large;\r\n}\r\n\r\n\r\n.getAllAd-btn[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    margin-right: 15px;\r\n    \r\n}\r\n\r\n\r\n.header-left-outer[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    position: relative;\r\n    top: 0;\r\n    justify-content: flex-end;\r\n    text-align: right;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n\r\n#advertisments[_ngcontent-%COMP%]   .title-heading[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n}\r\n\r\n\r\n@media (max-width: 1279px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 18px;\r\n        border-top-right-radius: 20px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        border-bottom-left-radius: 20px;\r\n        border-top-right-radius: 20px;\r\n        margin-right: 10px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 180px;\r\n        padding: 15px 0;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .big-stuff[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        letter-spacing: 1px;\r\n    }\r\n    .bodyCenter[_ngcontent-%COMP%] {\r\n        padding: 0 10px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-1[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n        font-size: 17px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-3[_ngcontent-%COMP%] {\r\n        font-size: 20px;\r\n        margin-bottom: 8px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .imageBottom[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n        width: 230px;\r\n        max-width: 80%;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .bottom-title[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        border-bottom-left-radius: 20px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 991px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n    }\r\n    .card-wrapper[_ngcontent-%COMP%]   .title-2[_ngcontent-%COMP%] {\r\n        margin-bottom: 8px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 767px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        width: calc(50% - 10px);\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\r\n        min-width: auto;\r\n        padding: 10px 15px;\r\n        width: 100%;\r\n    }\r\n    .search-box-outer[_ngcontent-%COMP%] {\r\n        max-width: 200px;\r\n    }\r\n    .getAllAd-btn[_ngcontent-%COMP%] {\r\n        margin-right: 8px;\r\n        margin-top: 3px;\r\n    }\r\n    .getAllAd-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n        font-size: 14px;\r\n        width: 100px;\r\n        padding: 6px 5px;\r\n    }\r\n    .search-box-outer[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n        top: 0;\r\n        margin-bottom: 20px;\r\n    }\r\n    .header-left-outer[_ngcontent-%COMP%] {\r\n        top: 0;\r\n        justify-content: flex-start;\r\n        margin: 25px 0;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 576px) {\r\n    .card-wrapper[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        margin-right: 0;\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\r\n        display: block\r\n    }\r\n    .form-outer[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .form-element[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9hZHZlcnRpc21lbnRzL2FkdmVydGlzbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxhQUFhOzs7QUFHYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQWtOOEI7OztBQUc5QjtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUEsYUFBYTs7O0FBRWI7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxzQkFBc0I7SUFDdEIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCw2QkFBNkI7QUFDakM7OztBQUVBOztJQUVJLDZCQUE2QjtBQUNqQzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsWUFBWTtJQUNaLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7QUFDN0I7OztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixPQUFPO0lBQ1AsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsNkJBQTZCO0FBQ2pDOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFGQTtJQUNJLGNBQWM7QUFDbEI7OztBQUZBO0lBQ0ksY0FBYztBQUNsQjs7O0FBRkE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBR3ZCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7OztBQUVBO0lBQ0ksa0VBQWtFO0lBQ2xFLFFBQVE7SUFDUixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHdCQUF3QjtBQUM1Qjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjtpQkFDYTtBQUNqQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2YsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSwrQkFBK0I7UUFDL0IsNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osY0FBYztJQUNsQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLCtCQUErQjtJQUNuQztBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7OztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLE1BQU07UUFDTixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLE1BQU07UUFDTiwyQkFBMkI7UUFDM0IsY0FBYztJQUNsQjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFdBQVc7SUFDZjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9hZHZlcnRpc21lbnRzL2FkdmVydGlzbWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNhcmQgY3NzICovXHJcblxyXG5cclxuLyogXHJcbi5jYXJkLWZpeGVkaGVpZ2h0IHtcclxuICAgIGhlaWdodDogMTkwcHggISBpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5pbWFnZUJvdHRvbSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuaW1hZ2VCb3R0b20gaW1nIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5jYXJkIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwNTA7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biBhIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIGEgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIC5idG5zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biAuZGVsZXRlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIC5lZGl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZDpob3ZlciAuYWN0aW9uLWJ0biB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmJpZy1zdHVmZiB7XHJcbiAgICBjb2xvcjogI2U5MjMzMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLnRpdGxlLTEge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAudGl0bGUtMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLnRpdGxlLTMge1xyXG4gICAgY29sb3I6ICNlOTIzMzA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5ib3R0b20tdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxufVxyXG5cclxuLmNhcmRCdXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMTgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzIGVhc2U7XHJcbn1cclxuXHJcbi5ib2R5Q2VudGVyIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjVweCkge1xyXG4gICAgLmNhcmQtd3JhcHBlciAuY2FyZCBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC5iaWctc3R1ZmYge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAuaW1hZ2VCb3R0b20gaW1nIHtcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICB9XHJcbiAgICAuYm9keUNlbnRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7fSAqL1xyXG5cclxuXHJcbi50b3Atbi1tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAtNjVweDtcclxufVxyXG5cclxuLyogY2FyZCBjc3MgKi9cclxuXHJcbi5jYXJkLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuaW1hZ2VCb3R0b20gaW1nIHtcclxuICAgIHdpZHRoOiAyNzBweDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZCB7XHJcbiAgICB3aWR0aDogY2FsYygzMy4zJSAtIDEwcHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZDpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDIpO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmNhcmQgaDIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGJhY2tncm91bmQ6ICNlOTIzMzA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZC5jYXJkLTIsXHJcbi5jYXJkLXdyYXBwZXIgLmNhcmQuY2FyZC0yIGgyIHtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwNTA7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biBhIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIGEgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIC5idG5zIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuYWN0aW9uLWJ0biAuZGVsZXRlLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5hY3Rpb24tYnRuIC5lZGl0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAuY2FyZDpob3ZlciAuYWN0aW9uLWJ0biB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLmJpZy1zdHVmZiB7XHJcbiAgICBjb2xvcjogI2U5MjMzMDtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLnRpdGxlLTEge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHBhZGRpbmc6IDZweCAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciAudGl0bGUtMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5jYXJkLXdyYXBwZXIgLnRpdGxlLTMge1xyXG4gICAgY29sb3I6ICNlOTIzMzA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uY2FyZC13cmFwcGVyIC5ib3R0b20tdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogIzQ0NDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJkQnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDE4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjM1cyBlYXNlO1xyXG59XHJcblxyXG4uYm9keUNlbnRlciB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbi5jYXJkQnV0dG9uIGEge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogMTJweCA0OHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuY2FyZEJ1dHRvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuY29sLTEyIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuY29sLTEyIC5mb3JtLWVsZW1lbnQge1xyXG4gICAgd2lkdGg6IDQ4JTtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudC5zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmZvcm0tb3V0ZXIgLmZvcm0tZWxlbWVudCBsYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDE1cHg7XHJcbn1cclxuXHJcbi5mb3JtLW91dGVyIC5mb3JtLWVsZW1lbnQgLnN1Ym1pdC1idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHggMTBweDtcclxuICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IC5zdWJtaXQtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM0NDQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gtb3V0ZXIge1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogMCA0MHB4IDBweCA1cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcclxuICAgIC1vLXRyYW5zaXRpb246IC4zcztcclxuICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDdkN2UzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1ib3gtb3V0ZXI6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveC1vdXRlciBpbnB1dC5zZWFyY2gtYm94IHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweFxyXG59XHJcblxyXG4uc2VhcmNoLWJveC1vdXRlciAuc2VhcmNoIHtcclxuICAgIC8qIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3Mvc2VhcmNoLnBuZycpIG5vLXJlcGVhdDsgKi9cclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IC0xNy41cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxufVxyXG5cclxuLmdldEFsbEFkLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAvKiByaWdodDogMjY1cHg7XHJcbiAgICB0b3A6IC0zOHB4OyAqL1xyXG59XHJcblxyXG4uaGVhZGVyLWxlZnQtb3V0ZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbn1cclxuXHJcbiNhZHZlcnRpc21lbnRzIC50aXRsZS1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgIC5jYXJkLXdyYXBwZXIgLmNhcmQgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLmNhcmQge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLmJpZy1zdHVmZiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgICAuYm9keUNlbnRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAudGl0bGUtMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuICAgIC5jYXJkLXdyYXBwZXIgLmltYWdlQm90dG9tIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtd3JhcHBlciAuYm90dG9tLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC13cmFwcGVyIC50aXRsZS0yIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNhcmQtd3JhcHBlciAuY2FyZCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1vdXRlciAuZm9ybS1lbGVtZW50IC5zdWJtaXQtYnRuIHtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1ib3gtb3V0ZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAuZ2V0QWxsQWQtYnRuIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICB9XHJcbiAgICAuZ2V0QWxsQWQtYnRuIGJ1dHRvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggNXB4O1xyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1ib3gtb3V0ZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItbGVmdC1vdXRlciB7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICBtYXJnaW46IDI1cHggMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuY2FyZC13cmFwcGVyIC5jYXJkIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1vdXRlciAuY29sLTEyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgfVxyXG4gICAgLmZvcm0tb3V0ZXIgLmNvbC0xMiAuZm9ybS1lbGVtZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvertismentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-advertisments',
                templateUrl: './advertisments.component.html',
                styleUrls: ['./advertisments.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_2__["UserpanelServiceService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }]; }, null); })();


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
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/backendServices/userpanel-service.service */ "./src/app/backendServices/userpanel-service.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









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
     * method to send contact us detail to admin via mail.
     */
    sendDetails() {
        let contactUsDetails = {
            name: this.userName,
            email: this.userEmail,
            contact: this.userContactNo,
            message: this.userMessage
        };
        this.userpanelServiceService.contactUs(contactUsDetails).subscribe(res => {
            if (res.success) {
                this.resetFields();
                src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showSuccessDialog(this.snackBar, res.message);
            }
            else {
                src_app_utillpackage_common_method__WEBPACK_IMPORTED_MODULE_1__["CommonMethods"].showErrorDialog(this.snackBar, res.message);
            }
        });
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
}
ContactusComponent.ɵfac = function ContactusComponent_Factory(t) { return new (t || ContactusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_4__["UserpanelServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
ContactusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactusComponent, selectors: [["app-contactus"]], decls: 21, vars: 4, consts: [[1, "site-section", "contact-us-section"], [1, "container"], [1, "row", "mb-5"], [1, "col-12", "text-center"], ["data-aos", "fade-down", 1, "title-heading"], [1, "contact-form", "siteForm"], [1, "paper-clip"], [1, "form-wrapper"], ["type", "text", "placeholder", "Name", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Email", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["type", "tel", "placeholder", "Contact Number", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["placeholder", "Message", "autocomplete", "off", 3, "ngModel", "ngModelChange"], [1, "form-wrapper", "submit-btn"], [3, "click"]], template: function ContactusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Need consultation? We provide it for free!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_input_ngModelChange_11_listener($event) { return ctx.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_input_ngModelChange_13_listener($event) { return ctx.userEmail = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_input_ngModelChange_15_listener($event) { return ctx.userContactNo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactusComponent_Template_textarea_ngModelChange_17_listener($event) { return ctx.userMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactusComponent_Template_a_click_19_listener() { return ctx.sendDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userContactNo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".contact-us-section[_ngcontent-%COMP%] {\r\n    padding: 60px 0;\r\n    \r\n    background: url('bg.svg') no-repeat bottom center;\r\n    ;\r\n    background-size: cover;\r\n    position: relative;\r\n    z-index: 0;\r\n}\r\n\r\n.contact-us-section[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    \r\n    top: 0;\r\n    left: 0;\r\n    z-index: -1;\r\n}\r\n\r\n.contact-us-section[_ngcontent-%COMP%]   .title-heading[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n.contact-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 25px;\r\n    color: #4c525a;\r\n    margin: 0 0 5px;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    position: relative;\r\n    border-radius: 0 0 5px 5px;\r\n    box-shadow: 0 -9px 50px rgba(0, 0, 0, .12);\r\n    padding: 50px;\r\n    max-width: 450px;\r\n    margin: 0 auto;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    background: url('paper-icon.png') repeat-x;\r\n    width: 100%;\r\n    height: 10px;\r\n    top: -10px;\r\n    left: 0;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]   .paper-clip[_ngcontent-%COMP%] {\r\n    background: url('paper-clip.png') no-repeat;\r\n    width: 66px;\r\n    height: 87px;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: 0;\r\n    right: 0;\r\n    margin: auto;\r\n}\r\n\r\n.contact-form[_ngcontent-%COMP%]:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    background: #fff;\r\n    top: 5px;\r\n    width: 100px;\r\n    bottom: 15px;\r\n    box-shadow: 0 20px 30px rgba(0, 0, 0, .15);\r\n    border-radius: 5px;\r\n    transform: rotate(2deg);\r\n    left: -21px;\r\n    z-index: -1;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%] {\r\n    display: block;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid #c1c1c1;\r\n    padding: 12px 0;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\r\n    border-color: #e92330;\r\n}\r\n\r\n.form-wrapper.submit-btn[_ngcontent-%COMP%] {\r\n    margin-top: 35px;\r\n    margin-bottom: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.form-wrapper.submit-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    border-radius: 30px;\r\n    background: #e92330;\r\n    color: #fff;\r\n    min-width: 200px;\r\n    padding: 15px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    height: 100px;\r\n    resize: none;\r\n    width: 100%;\r\n    border: none;\r\n    border-bottom: 1px solid #c1c1c1;\r\n}\r\n\r\n.form-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\r\n    border-color: #e92330;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .contact-form[_ngcontent-%COMP%] {\r\n        padding: 40px;\r\n        max-width: 400px;\r\n        margin-top: 80px;\r\n    }\r\n    .contact-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n        font-size: 22px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .contact-us-section[_ngcontent-%COMP%] {\r\n        background: #e92330;\r\n        padding: 45px 10px;\r\n    }\r\n    .contact-us-section[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    .contact-form[_ngcontent-%COMP%] {\r\n        padding: 35px 10px;\r\n        max-width: 100%;\r\n        margin-top: 70px;\r\n        margin-bottom: 0;\r\n    }\r\n    .contact-form[_ngcontent-%COMP%]:before {\r\n        display: none\r\n    }\r\n    .form-wrapper[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n        height: 70px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUZBQW1GO0lBQ25GLGlEQUFzRTs7SUFFdEUsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUdBLGNBQWM7O0FBRWQ7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMENBQStEO0lBQy9ELFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLE9BQU87QUFDWDs7QUFFQTtJQUNJLDJDQUFnRTtJQUNoRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsUUFBUTtJQUNSLFlBQVk7SUFDWixZQUFZO0lBRVosMENBQTBDO0lBQzFDLGtCQUFrQjtJQUdsQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJO0lBQ0o7SUFDQTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtdXMtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA2MHB4IDA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2NvbnRhY3RiZy5qcGcnKSBuby1yZXBlYXQgYm90dG9tIGNlbnRlcjsgKi9cclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvYmcuc3ZnJykgbm8tcmVwZWF0IGJvdHRvbSBjZW50ZXI7XHJcbiAgICA7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmNvbnRhY3QtdXMtc2VjdGlvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIGJhY2tncm91bmQ6ICNlOTIzMzA3MDsgKi9cclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNvbnRhY3QtdXMtc2VjdGlvbiAudGl0bGUtaGVhZGluZyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi8qIGNsaXAgZm9ybSAqL1xyXG5cclxuLmNvbnRhY3QtZm9ybSBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzRjNTI1YTtcclxuICAgIG1hcmdpbjogMCAwIDVweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIC05cHggNTBweCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA0NTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybTphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy9wYXBlci1pY29uLnBuZycpIHJlcGVhdC14O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSAucGFwZXItY2xpcCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3BhcGVyLWNsaXAucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDY2cHg7XHJcbiAgICBoZWlnaHQ6IDg3cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtOmJlZm9yZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYm90dG9tOiAxNXB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggMzBweCByZ2JhKDAsIDAsIDAsIC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XHJcbiAgICBsZWZ0OiAtMjFweDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlciBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzFjMWMxO1xyXG4gICAgcGFkZGluZzogMTJweCAwO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyIGlucHV0OmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2U5MjMzMDtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlci5zdWJtaXQtYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS13cmFwcGVyLnN1Ym1pdC1idG4gYSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlciB0ZXh0YXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgcmVzaXplOiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2MxYzFjMTtcclxufVxyXG5cclxuLmZvcm0td3JhcHBlciB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICNlOTIzMzA7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNvbnRhY3QtZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogNDBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1mb3JtIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmNvbnRhY3QtdXMtc2VjdGlvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgICAgICBwYWRkaW5nOiA0NXB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC11cy1zZWN0aW9uIC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdC1mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAzNXB4IDEwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5jb250YWN0LWZvcm06YmVmb3JlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lXHJcbiAgICB9XHJcbiAgICAuZm9ybS13cmFwcGVyIHRleHRhcmVhIHtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contactus',
                templateUrl: './contactus.component.html',
                styleUrls: ['./contactus.component.css']
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_backendServices_userpanel_service_service__WEBPACK_IMPORTED_MODULE_4__["UserpanelServiceService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();


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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "No illegal items, No livestock, commemorative weapons only");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Credit Cards, Checks and Cash");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " How can I track the status of my shipment during transit?");
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
    } }, styles: [".accordion-head[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n    float: right;\r\n    color: #ffffff;\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 5px;\r\n    transform: translate(0%, -50%);\r\n}\r\n\r\n.accordion-head[_ngcontent-%COMP%] > .collapsed[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]:before {\r\n    content: \"\\f105\";\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    display: block;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n.accordion-head[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n.faq-section[_ngcontent-%COMP%] {\r\n    padding: 80px 0;\r\n    background: url('banner-img.jpg') no-repeat top center;\r\n    overflow: hidden;\r\n    padding-bottom: 150px;\r\n    position: relative;\r\n    margin-bottom: 50px;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.faq-section[_ngcontent-%COMP%]:before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgba(27, 27, 27, 0.9)\r\n}\r\n\r\n.faq-section[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100px;\r\n    border-left: 1900px solid transparent;\r\n    border-bottom: 150px solid #ffffff;\r\n    z-index: 0;\r\n}\r\n\r\n.faq-section[_ngcontent-%COMP%]   .title-heading[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n\r\n#accordion[_ngcontent-%COMP%] {\r\n    max-width: 550px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #333;\r\n    border-radius: 0;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n    background: none;\r\n    padding: 0;\r\n    border-bottom: none;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    margin-bottom: 0;\r\n    font-size: 18px;\r\n    padding: 15px 0;\r\n    padding-right: 25px;\r\n    font-weight: 400;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    letter-spacing: 0.8px;\r\n    line-height: 24px;\r\n    color: #fff;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .faq-section[_ngcontent-%COMP%] {\r\n        padding: 45px 0;\r\n        padding-bottom: 60px;\r\n    }\r\n    .card-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        line-height: 26px;\r\n        ;\r\n        letter-spacing: normal;\r\n    }\r\n    .faq-section[_ngcontent-%COMP%]:after {\r\n        display: none;\r\n    }\r\n    .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        letter-spacing: normal;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9mYXEvZmFxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDViw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNEQUEyRTtJQUMzRSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1g7QUFDSjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7SUFDVCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxrQ0FBa0M7SUFDbEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtRQUNmLG9CQUFvQjtJQUN4QjtJQUNBO1FBQ0ksaUJBQWlCOztRQUVqQixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7UUFDZixzQkFBc0I7SUFDMUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudFBhY2thZ2UvZmFxL2ZhcS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29yZGlvbi1oZWFkIGkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taGVhZD4uY29sbGFwc2VkPmk6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uYWNjb3JkaW9uLWhlYWQgYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mYXEtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiA4MHB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL2Jhbm5lci1pbWcuanBnJykgbm8tcmVwZWF0IHRvcCBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbi5mYXEtc2VjdGlvbjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI3LCAyNywgMjcsIDAuOSlcclxufVxyXG5cclxuLmZhcS1zZWN0aW9uOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAxOTAwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxNTBweCBzb2xpZCAjZmZmZmZmO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmZhcS1zZWN0aW9uIC50aXRsZS1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jYWNjb3JkaW9uIHtcclxuICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuLmNhcmQgLmNhcmQtaGVhZGVyIGgzIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmNhcmQtYmxvY2sgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5mYXEtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogNDVweCAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtYmxvY2sgcCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuZmFxLXNlY3Rpb246YWZ0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY2FyZCAuY2FyZC1oZWFkZXIgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgfVxyXG59Il19 */"] });
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [[1, "footer-section"], [1, "icons"], [1, "colorless-icons", "social-icon", "google"], ["aria-hidden", "true", 1, "fa", "fa-google"], [1, "colorless-icons", "social-icon", "facebook"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://www.instagram.com/getithomenow/", "target", "_blank", 1, "colorless-icons", "social-icon", "instagram"], ["aria-hidden", "true", 1, "fa", "fa-instagram"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-section[_ngcontent-%COMP%]{padding: 25px 20px;display: flex;justify-content: center;align-items: center;background: #1b1b1b;flex-flow: row wrap;margin-top: 50px;} \r\n.footer-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size: 14px;color: #fff;width:100%;text-align: center;padding-bottom: 10px;margin-bottom: 0;} \r\n.icons[_ngcontent-%COMP%]{margin-bottom: 0;} \r\n.colorless-icons[_ngcontent-%COMP%]{color: inherit;text-decoration: none;} \r\n.icons[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]{padding: 0 10px;font-size: 20px;cursor: pointer;transition: 0.3s all;} \r\n.icons[_ngcontent-%COMP%]   .instagram[_ngcontent-%COMP%]:hover{color: #e1306c;transition: 0.3s all;} \r\n.icons[_ngcontent-%COMP%]   .facebook[_ngcontent-%COMP%]:hover{color: #0077fb;transition: 0.3s all;} \r\n.icons[_ngcontent-%COMP%]   .google[_ngcontent-%COMP%]:hover{color: #DD4B39;;transition: 0.3s all;} \r\n@media (max-width: 576px){\r\n    .footer-section[_ngcontent-%COMP%]{margin-top: 0;}\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQztBQUN0SixrQkFBa0IsZUFBZSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUM7QUFDbEgsT0FBTyxnQkFBZ0IsQ0FBQztBQUN4QixpQkFBaUIsY0FBYyxDQUFDLHFCQUFxQixDQUFDO0FBQ3RELG9CQUFvQixlQUFlLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0IsQ0FBQztBQUN6Rix3QkFBd0IsY0FBYyxDQUFDLG9CQUFvQixDQUFDO0FBQzVELHVCQUF1QixjQUFjLENBQUMsb0JBQW9CLENBQUM7QUFDM0QscUJBQXFCLGNBQWMsRUFBRSxvQkFBb0IsQ0FBQztBQUUxRDtJQUNJLGdCQUFnQixhQUFhLENBQUM7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItc2VjdGlvbntwYWRkaW5nOiAyNXB4IDIwcHg7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjthbGlnbi1pdGVtczogY2VudGVyO2JhY2tncm91bmQ6ICMxYjFiMWI7ZmxleC1mbG93OiByb3cgd3JhcDttYXJnaW4tdG9wOiA1MHB4O30gXHJcbi5mb290ZXItc2VjdGlvbiBwe2ZvbnQtc2l6ZTogMTRweDtjb2xvcjogI2ZmZjt3aWR0aDoxMDAlO3RleHQtYWxpZ246IGNlbnRlcjtwYWRkaW5nLWJvdHRvbTogMTBweDttYXJnaW4tYm90dG9tOiAwO31cclxuLmljb25ze21hcmdpbi1ib3R0b206IDA7fVxyXG4uY29sb3JsZXNzLWljb25ze2NvbG9yOiBpbmhlcml0O3RleHQtZGVjb3JhdGlvbjogbm9uZTt9XHJcbi5pY29ucyAuc29jaWFsLWljb257cGFkZGluZzogMCAxMHB4O2ZvbnQtc2l6ZTogMjBweDtjdXJzb3I6IHBvaW50ZXI7dHJhbnNpdGlvbjogMC4zcyBhbGw7fVxyXG4uaWNvbnMgLmluc3RhZ3JhbTpob3Zlcntjb2xvcjogI2UxMzA2Yzt0cmFuc2l0aW9uOiAwLjNzIGFsbDt9XHJcbi5pY29ucyAuZmFjZWJvb2s6aG92ZXJ7Y29sb3I6ICMwMDc3ZmI7dHJhbnNpdGlvbjogMC4zcyBhbGw7fVxyXG4uaWNvbnMgLmdvb2dsZTpob3Zlcntjb2xvcjogI0RENEIzOTs7dHJhbnNpdGlvbjogMC4zcyBhbGw7fVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KXtcclxuICAgIC5mb290ZXItc2VjdGlvbnttYXJnaW4tdG9wOiAwO31cclxufSJdfQ== */"] });
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
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, consts: [[1, "banner-content"], ["routerLink", "/advertisment", 1, "common-btn"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Lorem ipsum dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Advertisment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["header[_ngcontent-%COMP%] {\r\n    align-items: center;\r\n    display: flex;\r\n    font-size: 18px;\r\n    min-height: 100vh;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    flex-flow: row wrap;\r\n    background-image: url('homebackLogo.jpg');\r\n    background-size: cover;\r\n    z-index: 0;\r\n    padding: 50px 20px;\r\n    padding-top: 130px;\r\n    text-align: left;\r\n    justify-content: flex-start;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n}\r\n\r\nheader[_ngcontent-%COMP%]::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgba(0, 0, 0, 0.3);\r\n    z-index: 1;\r\n}\r\n\r\n\r\n\r\n.banner-content[_ngcontent-%COMP%] {\r\n    padding: 50px;\r\n    max-width: 800px;\r\n    margin: 0 auto;\r\n    position: relative;\r\n    z-index: 2;\r\n    color: #fff;\r\n}\r\n\r\n.banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    font-size: 42px;\r\n    letter-spacing: 1.5px;\r\n}\r\n\r\n.banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n    margin-top: 40px;\r\n    line-height: 28px;\r\n}\r\n\r\n.banner-content[_ngcontent-%COMP%]   .common-btn[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    margin-top: 30px;\r\n    padding: 15px 20px;\r\n    min-width: 150px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    background: #e92330;\r\n    border-radius: 4px;\r\n    transition: 0.3s all;\r\n    cursor: pointer;\r\n    -webkit-animation: scale 2s infinite;\r\n            animation: scale 2s infinite;\r\n}\r\n\r\n\r\n\r\n.banner-content[_ngcontent-%COMP%]   .common-btn[_ngcontent-%COMP%]:hover {\r\n    background: #333;\r\n    transition: 0.3s all;\r\n}\r\n\r\nh2[_ngcontent-%COMP%], a[_ngcontent-%COMP%], p[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: Roboto;\r\n    text-decoration: none;\r\n}\r\n\r\np[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    color: #fd084a;\r\n}\r\n\r\n.blink[_ngcontent-%COMP%] {\r\n    -webkit-animation: blink 0.5s infinite;\r\n            animation: blink 0.5s infinite;\r\n}\r\n\r\n@-webkit-keyframes blink {\r\n    to {\r\n        opacity: .0;\r\n    }\r\n}\r\n\r\n@keyframes blink {\r\n    to {\r\n        opacity: .0;\r\n    }\r\n}\r\n\r\n.flex[_ngcontent-%COMP%] {\r\n    display: flex;\r\n}\r\n\r\n.header-sub-title[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n    font-family: \"Courier\";\r\n    font-size: 20px;\r\n    padding: 0.1em;\r\n}\r\n\r\n@media (max-width: 1025px) {\r\n    .banner-content[_ngcontent-%COMP%] {\r\n        padding: 30px;\r\n    }\r\n    .banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 36px;\r\n        letter-spacing: 1px;\r\n    }\r\n    .banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        font-size: 16px;\r\n        margin-top: 25px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .banner-content[_ngcontent-%COMP%] {\r\n        padding: 30px 15px;\r\n        margin: 0;\r\n    }\r\n    .banner-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n        font-size: 24px;\r\n        letter-spacing: normal;\r\n    }\r\n    .banner-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n    }\r\n    header[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n        padding: 40px 10px;\r\n        padding-top: 100px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHlDQUE4RDtJQUM5RCxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBR0EsZ0JBQWdCOztBQUVoQjtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysb0NBQTRCO1lBQTVCLDRCQUE0QjtBQUNoQzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JHOztBQUVIO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7O0lBR0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksc0NBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBSkE7SUFDSTtRQUNJLFdBQVc7SUFDZjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7SUFDYjtJQUNBO1FBQ0ksZUFBZTtRQUNmLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhlYWRlciB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZ3MvaG9tZWJhY2tMb2dvLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG5oZWFkZXIgLmJhbm5lci1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuaGVhZGVyOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5cclxuLyogdG9wIENvbnRlbnQgKi9cclxuXHJcbi5iYW5uZXItY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uYmFubmVyLWNvbnRlbnQgaDEge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG59XHJcblxyXG4uYmFubmVyLWNvbnRlbnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbn1cclxuXHJcbi5iYW5uZXItY29udGVudCAuY29tbW9uLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTkyMzMwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBhbmltYXRpb246IHNjYWxlIDJzIGluZmluaXRlO1xyXG59XHJcblxyXG5cclxuLyogQGtleWZyYW1lcyBzY2FsZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Q2NTA0ZjtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gICAgMzUlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNGUwNDBhO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpO1xyXG4gICAgfVxyXG4gICAgNzAlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Q2NTA0ZjtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG59ICovXHJcblxyXG4uYmFubmVyLWNvbnRlbnQgLmNvbW1vbi1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG59XHJcblxyXG5oMixcclxuYSxcclxucCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbnA+YSB7XHJcbiAgICBjb2xvcjogI2ZkMDg0YTtcclxufVxyXG5cclxuLmJsaW5rIHtcclxuICAgIGFuaW1hdGlvbjogYmxpbmsgMC41cyBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBibGluayB7XHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogLjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5oZWFkZXItc3ViLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ291cmllclwiO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMC4xZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI1cHgpIHtcclxuICAgIC5iYW5uZXItY29udGVudCB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgIH1cclxuICAgIC5iYW5uZXItY29udGVudCBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyLWNvbnRlbnQgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmJhbm5lci1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lci1jb250ZW50IGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5iYW5uZXItY29udGVudCBwIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMTBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");





const _c0 = function (a0) { return { "navbar-transparent": a0 }; };
const _c1 = function (a0) { return { "advertismentshow": a0 }; };
class NavbarComponent {
    constructor(router, location) {
        this.router = router;
        this.location = location;
        this.showAdvertisment = false;
        this.showAdvertisment = false;
        // console.log("Current Url:- "+this.router.url)
        if (this.router.url == "/advertisment") {
            this.showAdvertisment = true;
        }
        else {
            this.showAdvertisment = false;
        }
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
        window.scrollTo(0, 0);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 25, vars: 15, consts: [["id", "navbar", "color-on-scroll", "50", 1, "navbar", "navbar-expand-sm", "navbar-dark", "fixed-top", 3, "ngClass"], [1, "container-nav"], ["href", "#home", 1, "navbar-brand"], ["src", "assets/imgs/mainLogo copy.png", 1, "logo-big"], ["src", "assets/imgs/logoSmall3.png", 1, "logo-small"], ["id", "mytoggle", "type", "button", "data-toggle", "collapse", "data-target", "#probootstrap-navbar", "aria-controls", "probootstrap-navbar", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "ml-auto"], ["aria-hidden", "true", 1, "fa", "fa-bars"], ["id", "probootstrap-navbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", 3, "ngClass"], ["data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link", 3, "click"], [1, "nav-item"], ["routerLink", "/advertisment", "routerLinkActive", "active", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link"], ["href", "#aboutUS", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link"], ["href", "#faq", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link"], ["href", "#contactus", "data-toggle", "collapse", "data-target", ".navbar-collapse.show", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_11_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Advertisments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "About US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.showAdvertisment == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.showAdvertisment == false));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.showAdvertisment == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.showAdvertisment == true));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.showAdvertisment == true));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".mat-icon[_ngcontent-%COMP%] {\r\n    color: #fff\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n    background: #e92330;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.navbutton[_ngcontent-%COMP%] {\r\n    background: initial;\r\n    padding: 9px;\r\n    color: #d6504f;\r\n    border-bottom: 2px solid #d6504f;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.btn2nd[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\r\n\r\n\r\n.navbar-dark.navbar-transparent[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    border: 1px solid #fff;\r\n    color: #fff;\r\n}\r\n\r\n\r\n.navbar-dark[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n    padding: 5px 10px;\r\n    border: 1px solid #e92330;\r\n    color: #e92330;\r\n    font-size: 22px;\r\n    font-weight: 300;\r\n}\r\n\r\n\r\n.navbar-collapse.collapse.show[_ngcontent-%COMP%] {\r\n    display: unset !important;\r\n}\r\n\r\n\r\n@media screen and (max-width:340px) {\r\n    .btn2nd[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width:600px) {\r\n    .btn2nd[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width:762px) {\r\n    .btn2nd[_ngcontent-%COMP%] {\r\n        margin-top: 10px;\r\n        margin-left: 0px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 575px) {\r\n    .navbar[_ngcontent-%COMP%] {\r\n        padding: 0;\r\n    }\r\n    .navbar-collapse[_ngcontent-%COMP%] {\r\n        position: absolute;\r\n        top: 100%;\r\n        background: #fff;\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\r\n        color: #1b1b1b;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n        color: #fff;\r\n    }\r\n    .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\n\r\n.advertismentshow[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50UGFja2FnZS9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKOzs7QUFHQTs7OztHQUlHOzs7QUFFSDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOzs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUNkO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsU0FBUztRQUNULGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsT0FBTztJQUNYO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFNBQVM7SUFDYjtBQUNKOzs7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRQYWNrYWdlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogI2ZmZlxyXG59XHJcblxyXG5cclxuLyogLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogI2Q2NTA0ZiAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNkNjUwNGY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGF1dG87XHJcbn0gKi9cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogI2U5MjMzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2YnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IGluaXRpYWw7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICBjb2xvcjogI2Q2NTA0ZjtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZDY1MDRmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuMm5kIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWRhcmsubmF2YmFyLXRyYW5zcGFyZW50IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXItZGFyayAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTkyMzMwO1xyXG4gICAgY29sb3I6ICNlOTIzMzA7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbGxhcHNlLmNvbGxhcHNlLnNob3cge1xyXG4gICAgZGlzcGxheTogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozNDBweCkge1xyXG4gICAgLmJ0bjJuZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAuYnRuMm5kIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NzYycHgpIHtcclxuICAgIC5idG4ybmQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NXB4KSB7XHJcbiAgICAubmF2YmFyIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgICAgIGNvbG9yOiAjMWIxYjFiO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmFkdmVydGlzbWVudHNob3cge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }]; }, null); })();


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
/* harmony import */ var _componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../componentPackage/navbar/navbar.component */ "./src/app/componentPackage/navbar/navbar.component.ts");
/* harmony import */ var _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../componentPackage/advertisments/advertisments.component */ "./src/app/componentPackage/advertisments/advertisments.component.ts");
/* harmony import */ var _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../componentPackage/footer/footer.component */ "./src/app/componentPackage/footer/footer.component.ts");





class BlankComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlankComponent.ɵfac = function BlankComponent_Factory(t) { return new (t || BlankComponent)(); };
BlankComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankComponent, selectors: [["app-blank"]], decls: 4, vars: 0, consts: [["id", "advertisments"]], template: function BlankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-advertisments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_componentPackage_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _componentPackage_advertisments_advertisments_component__WEBPACK_IMPORTED_MODULE_2__["AdvertismentsComponent"], _componentPackage_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ibGFuay9ibGFuay5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blank',
                templateUrl: './blank.component.html',
                styleUrls: ['./blank.component.css']
            }]
    }], function () { return []; }, null); })();


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
        // console.log("constructor is working:- "+this.url)
    }
    ngOnInit() {
        // console.log("on  ngOnInit  working")
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
            _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
        ],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]], exports: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]] }); })();
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
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
                ],
                exports: [
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"]
                ],
                declarations: []
            }]
    }], null, null); })();


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
class CommonMethods {
    static showconsole(tag, message) {
        console.log(tag, message);
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
            verticalPosition: 'bottom',
            horizontalPosition: 'right',
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
MyConstants.BASEURL = "http://3.21.83.36:8081/api/";
MyConstants.serverURL = "http://3.21.83.36:8081/";


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