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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-webcam-detect></app-webcam-detect>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'face-api';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ack_angular_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ack-angular-webcam */ "./node_modules/ack-angular-webcam/index.js");
/* harmony import */ var ack_angular_webcam__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ack_angular_webcam__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _webcam_detect_webcam_detect_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webcam-detect/webcam-detect.component */ "./src/app/webcam-detect/webcam-detect.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _webcam_detect_webcam_detect_component__WEBPACK_IMPORTED_MODULE_6__["WebcamDetectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ack_angular_webcam__WEBPACK_IMPORTED_MODULE_3__["WebCamModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/webcam-detect/webcam-detect.component.css":
/*!***********************************************************!*\
  !*** ./src/app/webcam-detect/webcam-detect.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYmNhbS1kZXRlY3Qvd2ViY2FtLWRldGVjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/webcam-detect/webcam-detect.component.html":
/*!************************************************************!*\
  !*** ./src/app/webcam-detect/webcam-detect.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: relative\" class=\"margin\">\n\n  <ack-webcam\n  [(ref)]   = \"webcam\"\n  [options] = \"options\"\n  (catch)   = \"onCamError($event)\"\n>\n\n</ack-webcam>\n<canvas id=\"overlay\" style=\"position: absolute;margin-left: 20px; left:15px\"></canvas>\n</div>\n<div class=\"ui-g-6 ui-md-6 ui-lg-6\" id=\"peopleInVideo\" style=\"    position: absolute;\n    margin-left: 2px;\n    background-color: #bdcfe8;\n    color: white;\n    width: 412px;\"></div>\n\n    <div style=\"    width: 100%;\n    height: 130px;\n    overflow: -webkit-paged-x;\" id=\"detectedFaces\">{{images}}</div>\n\n<button (click)=\"genBase64()\"> generate base64 </button>\n<button (click)=\"genPostData()\"> generate post data </button>\n<button (click)=\"run()\"> generate post data </button>\n<button (click)=\"start()\"> Start </button>\n<img src=\"{{base64}}\" id=\"inputImage\">\n<video onplay=\"onPlay(this)\" id=\"inputVideo\" autoplay muted style=\"widows: 320px;heigth:240px\" style=\"display:none\"></video>"

/***/ }),

/***/ "./src/app/webcam-detect/webcam-detect.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/webcam-detect/webcam-detect.component.ts ***!
  \**********************************************************/
/*! exports provided: WebcamDetectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamDetectComponent", function() { return WebcamDetectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var WebcamDetectComponent = /** @class */ (function () {
    function WebcamDetectComponent() {
        this.objeto = [];
        console.log(faceapi);
        //faceapi.loadSsdMobilenetv1Model('assets/')
        faceapi.loadMtcnnModel('assets/');
        faceapi.loadFaceRecognitionModel('assets/');
    }
    WebcamDetectComponent.prototype.ngOnInit = function () {
        // this.run()
    };
    WebcamDetectComponent.prototype.drawDetections = function (dimensions, canvas, detections) {
        var resizedDetections = this.resizeCanvasAndResults(dimensions, canvas, detections);
        faceapi.drawDetection(canvas, resizedDetections);
    };
    WebcamDetectComponent.prototype.resizeCanvasAndResults = function (dimensions, canvas, results) {
        var _a = dimensions instanceof HTMLVideoElement
            ? faceapi.getMediaDimensions(dimensions)
            : dimensions, width = _a.width, height = _a.height;
        canvas.width = width;
        canvas.height = height;
        // resize detections (and landmarks) in case displayed image is smaller than
        // original size
        return faceapi.resizeResults(results, { width: width, height: height });
    };
    WebcamDetectComponent.prototype.getFaceDetectorOptions = function () {
        var SSD_MOBILENETV1 = 'ssd_mobilenetv1';
        var TINY_FACE_DETECTOR = 'tiny_face_detector';
        var MTCNN = 'mtcnn';
        var selectedFaceDetector = MTCNN;
        // ssd_mobilenetv1 options
        var minConfidence = 0.5;
        // tiny_face_detector options
        var inputSize = 512;
        var scoreThreshold = 0.5;
        //mtcnn options
        var minFaceSize = 20;
        return selectedFaceDetector === SSD_MOBILENETV1
            ? new faceapi.SsdMobilenetv1Options({ minConfidence: minConfidence })
            : (selectedFaceDetector === TINY_FACE_DETECTOR
                ? new faceapi.TinyFaceDetectorOptions({ inputSize: inputSize, scoreThreshold: scoreThreshold })
                : new faceapi.MtcnnOptions({ minFaceSize: minFaceSize }));
    };
    WebcamDetectComponent.prototype.genBase64 = function () {
        var _this = this;
        this.webcam.getBase64()
            .then(function (base) { return _this.base64 = base; })
            .catch(function (e) { return console.error(e); });
    };
    WebcamDetectComponent.prototype.run = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, videoEl, result;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.getFaceDetectorOptions();
                        videoEl = jquery__WEBPACK_IMPORTED_MODULE_2__('#video').get(0);
                        return [4 /*yield*/, faceapi.detectSingleFace(videoEl, options)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        console.log();
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#overlay').height(videoEl.getAttribute('heigth'));
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#overlay').width(videoEl.getAttribute('width'));
                        if (result) {
                            this.drawDetections(videoEl, jquery__WEBPACK_IMPORTED_MODULE_2__('#overlay').get(0), [result]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //  async run() {
    //   const videoEl = $('#inputImage')
    //   //const video = document.createElement('video');
    //   //videoEl.src = URL.createObjectURL(stream);
    //   const options = faceapi.getFaceDetectorOptions()
    //   console.log(options)
    // }
    WebcamDetectComponent.prototype.start = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, videoEl, mtcnnResults, canvases, descriptor, labeledFaceDescriptors, detectArea, index, element, canvas, ctx;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getFaceDetectorOptions()];
                    case 1:
                        options = _a.sent();
                        videoEl = jquery__WEBPACK_IMPORTED_MODULE_2__('#video').get(0);
                        return [4 /*yield*/, faceapi.mtcnn(videoEl, options)];
                    case 2:
                        mtcnnResults = _a.sent();
                        if (!mtcnnResults) return [3 /*break*/, 6];
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#overlay').height(videoEl.getAttribute('heigth'));
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#overlay').width(videoEl.getAttribute('width'));
                        this.drawDetections(videoEl, jquery__WEBPACK_IMPORTED_MODULE_2__('#overlay').get(0), mtcnnResults.map(function (res) { return res.detection; }));
                        return [4 /*yield*/, faceapi.extractFaces(videoEl, mtcnnResults.map(function (res) { return res.alignedRect.box; }))
                            ////extrai os descritores
                        ];
                    case 3:
                        canvases = _a.sent();
                        if (!(canvases != undefined && canvases != [] && canvases.length > 0)) return [3 /*break*/, 5];
                        return [4 /*yield*/, faceapi.computeFaceDescriptor(canvases)];
                    case 4:
                        descriptor = _a.sent();
                        labeledFaceDescriptors = new faceapi.LabeledFaceDescriptors('Alan ddos', descriptor);
                        if (labeledFaceDescriptors) {
                            if (this.objeto['descricao']) {
                                this.objeto['descricao'].push(labeledFaceDescriptors);
                            }
                            else {
                                this.objeto['descricao'] = [];
                                this.objeto['descricao'].push(labeledFaceDescriptors);
                            }
                        }
                        console.log(labeledFaceDescriptors);
                        console.log(descriptor);
                        console.log(this.objeto);
                        detectArea = jquery__WEBPACK_IMPORTED_MODULE_2__('#detectedFaces').get(0);
                        for (index = 0; index < canvases.length; index++) {
                            element = canvases[index];
                            canvas = document.createElement('canvas');
                            ctx = canvas.getContext("2d");
                            canvas.id = String(this.objeto['descricao'].length);
                            canvas.width = 100;
                            canvas.height = 100;
                            //canvas.style.zIndex = 8;
                            //canvas.style.position = "absolute";
                            canvas.style.border = "1px solid";
                            ctx.drawImage(element, 0, 0, 100, 100);
                            ctx.font = 'italic 14pt Calibri';
                            ctx.fillText(this.objeto['id'], 10, 95);
                            detectArea.prepend(canvas);
                            if (this.objeto['canvas']) {
                                this.objeto['canvas'].push(canvas);
                            }
                            else {
                                this.objeto['canvas'] = [];
                                this.objeto['canvas'].push(canvas);
                            }
                        }
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        ////esconde o overlay caso n encontre ninguem
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#overlay').height(0);
                        jquery__WEBPACK_IMPORTED_MODULE_2__('#overlay').width(0);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    WebcamDetectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-webcam-detect',
            template: __webpack_require__(/*! ./webcam-detect.component.html */ "./src/app/webcam-detect/webcam-detect.component.html"),
            styles: [__webpack_require__(/*! ./webcam-detect.component.css */ "./src/app/webcam-detect/webcam-detect.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebcamDetectComponent);
    return WebcamDetectComponent;
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

module.exports = __webpack_require__(/*! /home/dev/face-api-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map