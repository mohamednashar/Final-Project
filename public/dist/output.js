/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore/lite'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\r\n\r\n\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyBsBaihwh8F_UY8oYEsfcMlQEwEIgXcbxc\",\r\n  authDomain: \"elmawkaabeta.firebaseapp.com\",\r\n  databaseURL: \"https://elmawkaabeta.firebaseio.com\",\r\n  projectId: \"elmawkaabeta\",\r\n  storageBucket: \"elmawkaabeta.appspot.com\",\r\n  messagingSenderId: \"808588970288\",\r\n  appId: \"1:808588970288:web:6fb8d6b492c746efa820f5\",\r\n  measurementId: \"G-G8FTTQ0EB2\"\r\n};\r\n// \"1:808588970288:web:6fb8d6b492c746efa820f5\"\r\n\r\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(firebaseConfig)\r\nconst db = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore/lite'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())()\r\n\r\nconst lang = document.querySelector('html').lang; // get page's Lang to assign it to database\r\n\r\nconst colRef = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore/lite'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(db, 'coaches', 'languages', lang);\r\n\r\n// selecting the coaches Row in html file\r\nconst coachesContent = document.getElementById('coaches-content');\r\nlet coaches = []; // for fulling coaches in coaches page\r\nlet html = ''; // content that we put in html\r\ncoachesContent.innerHTML = ''; // empty coaches content before getting data\r\n\r\nasync function getData() {\r\n\t// Fetching 'Getting' Data\r\n\tawait Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'firebase/firestore/lite'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(colRef)\r\n\t.then((snapshot) => {\r\n\t\t// Check if we in the home page or top coaches page\r\n\t\tsnapshot.docs.forEach((doc) => {\r\n\t\t\tcoaches.push({ ...doc.data(), id: doc.id });\r\n\t\t})\r\n\t\tcoaches.sort((a, b) => a.order - b.order); // sort the array according to it's order\r\n\t\t// Adding Content of Data coming from Firebase to HTML\r\n\t\tif(coachesContent.classList.contains('top-coaches')){\r\n\t\t\t// coaches = coaches.slice(0, topCoachesCount)\r\n\t\t\tcoaches = coaches.filter(coach => {\r\n\t\t\t\treturn coach.order <= 3;\r\n\t\t\t})\r\n\t\t}\r\n\t\t// console.log(coaches);\r\n\t\tcoaches.map(coach => {\r\n\t\t\thtml += `\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\r\n\t\t\t\t\t<div class=\"member\" data-aos=\"zoom-in\">\r\n\t\t\t\t\t\t<div class=\"pic\"><img src=\"${coach.image}\" class=\"img-fluid\" alt=\"Coach Image\"></div>\r\n\t\t\t\t\t\t\t<div class=\"member-info coaches pricing\">\r\n\t\t\t\t\t\t\t\t<div class='ps-3 pe-3'>\r\n\t\t\t\t\t\t\t\t\t<h5>${coach.name}</h5>\r\n\t\t\t\t\t\t\t\t\t<h4>${coach.jobTitle}</h4>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<span>${coach.pricing}</span>\r\n\t\t\t\t\t\t\t\t<p class='detail-item mb-1 mt-1'>Details</p>\r\n\t\t\t\t\t\t\t\t<h6>${coach.category}</h6>\r\n\t\t\t\t\t\t\t\t<span>${coach.summary}</span>\r\n\t\t\t\t\t\t\t\t<span>${coach.country}/${coach.city} - ${coach.rating} stars</span>\r\n\t\t\t\t\t\t\t\t<div class=\"social\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"${coach.SM_account}\" target=\"_blank\"><i class=\"bi bi-linkedin\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<a href=\"${coach.paymentLink}\" target=\"_blank\" class=\"btn-buy mt-2\">Book Now</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t`;\r\n\t\t})\r\n\t})\r\n\t.catch( _ => {\r\n\t\tcoachesContent.innerHTML = 'No Coaches till now';\r\n\t});\r\n};\r\n\r\ngetData().then(() => {\r\n\tcoachesContent.innerHTML = html\r\n});\n\n//# sourceURL=webpack://i-can-coach-you/./assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;