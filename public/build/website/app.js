(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/website/js/app.js":
/*!**********************************!*\
  !*** ./assets/website/js/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/website/scss/app.scss");
/* harmony import */ var _app_teste__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/teste */ "./assets/website/js/app/teste.js");
/* harmony import */ var _app_teste__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_teste__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_galery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/galery */ "./assets/website/js/app/galery.js");
/* harmony import */ var _app_galery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_galery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_burger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/burger */ "./assets/website/js/app/burger.js");
/* harmony import */ var _app_burger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_burger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/message */ "./assets/website/js/app/message.js");
/* harmony import */ var _app_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_message__WEBPACK_IMPORTED_MODULE_4__);


// const $ = require('jquery');
// global.$ = global.jQuery = $;






/***/ }),

/***/ "./assets/website/js/app/burger.js":
/*!*****************************************!*\
  !*** ./assets/website/js/app/burger.js ***!
  \*****************************************/
/***/ (() => {

// Sélectionne l'élément HTML avec l'ID "burger" et le stocke dans la variable "menu"
var menu = document.getElementById("burger");

// Sélectionne le premier élément HTML avec la classe "navigation" et le stocke dans la variable "navigation"
var navigation = document.querySelector(".navigation");

// Ajoute un écouteur d'événements "click" à l'élément "menu"
menu.addEventListener('click', function () {
  // Lorsque l'élément "menu" est cliqué, cette fonction anonyme est exécutée.

  // Utilise la méthode "classList.toggle()" pour basculer la classe "onshow" sur l'élément "navigation"
  // Si la classe "onshow" est déjà présente, elle sera retirée, sinon elle sera ajoutée.
  navigation.classList.toggle("onshow");
});

/***/ }),

/***/ "./assets/website/js/app/galery.js":
/*!*****************************************!*\
  !*** ./assets/website/js/app/galery.js ***!
  \*****************************************/
/***/ (() => {

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('small-image-border')) {
    var elementID = event.target.id;
    console.log("ID de l'élément cliqué : " + elementID);
    var modal = document.getElementById('myModal');
    var images = document.getElementsByClassName('image-1 responsive');
    var modalImg = document.getElementById('img01');
    var captionText = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = images[elementID].src;
    captionText.innerHTML = images[elementID].alt;
    var closeButton = document.getElementsByClassName('close')[0];
    closeButton.onclick = function () {
      modal.style.display = 'none';
    };
  }
});

// const imageElements = document.getElementsByClassName('small-image-border');

// function handleClick(event) {

//     const modal = document.getElementById('myModal');
//     const images = document.getElementsByClassName('image-1 responsive');
//     const modalImg = document.getElementById('img01');
//     const captionText = document.getElementById('caption');

//     modal.style.display = 'block';
//     modalImg.src = images[0].src;
//     captionText.innerHTML = images[0].alt;

//     const closeButton = document.getElementsByClassName('close')[0];
//     closeButton.onclick = function() {
//       modal.style.display = 'none';
//     };
//   }

// // Attache un gestionnaire d'événement à chaque élément
// for (let i = 0; i < imageElements.length; i++) {
//   imageElements[i].addEventListener('click', handleClick);
// }

/***/ }),

/***/ "./assets/website/js/app/message.js":
/*!******************************************!*\
  !*** ./assets/website/js/app/message.js ***!
  \******************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/mickael/final-projet/assets/website/js/app/message.js: Identifier 'send' has already been declared. (11:16)\n\n\u001b[0m \u001b[90m  9 |\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m        send\u001b[33m.\u001b[39maddEventListener(\u001b[32m'click'\u001b[39m\u001b[33m,\u001b[39m send)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 11 |\u001b[39m        \u001b[36mfunction\u001b[39m send() {\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                 \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 12 |\u001b[39m         console\u001b[33m.\u001b[39mlog(email\u001b[33m.\u001b[39mvalue)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 13 |\u001b[39m        }\u001b[0m\n\u001b[0m \u001b[90m 14 |\u001b[39m         \u001b[0m\n    at instantiate (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:63:32)\n    at constructor (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:356:12)\n    at Parser.raise (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:3240:19)\n    at ScopeHandler.checkRedeclarationInScope (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:1526:19)\n    at ScopeHandler.declareName (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:1497:12)\n    at Parser.registerFunctionStatementId (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:13275:16)\n    at Parser.parseFunction (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:13259:12)\n    at Parser.parseFunctionStatement (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:12918:17)\n    at Parser.parseStatementContent (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:12577:21)\n    at Parser.parseStatementLike (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:12551:17)\n    at Parser.parseModuleItem (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:12528:17)\n    at Parser.parseBlockOrModuleBlockBody (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:13123:36)\n    at Parser.parseBlockBody (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:13116:10)\n    at Parser.parseProgram (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:12439:10)\n    at Parser.parseTopLevel (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:12429:25)\n    at Parser.parse (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:14247:10)\n    at parse (/Users/mickael/final-projet/node_modules/@babel/parser/lib/index.js:14267:26)\n    at parser (/Users/mickael/final-projet/node_modules/@babel/core/lib/parser/index.js:41:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (/Users/mickael/final-projet/node_modules/@babel/core/lib/transformation/normalize-file.js:64:38)\n    at normalizeFile.next (<anonymous>)\n    at run (/Users/mickael/final-projet/node_modules/@babel/core/lib/transformation/index.js:21:50)\n    at run.next (<anonymous>)\n    at transform (/Users/mickael/final-projet/node_modules/@babel/core/lib/transform.js:22:41)\n    at transform.next (<anonymous>)\n    at step (/Users/mickael/final-projet/node_modules/gensync/index.js:261:32)\n    at /Users/mickael/final-projet/node_modules/gensync/index.js:273:13\n    at async.call.result.err.err (/Users/mickael/final-projet/node_modules/gensync/index.js:223:11)");

/***/ }),

/***/ "./assets/website/js/app/teste.js":
/*!****************************************!*\
  !*** ./assets/website/js/app/teste.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
// (function ($, window, undefined) {

//     'use strict';

// })(jQuery, window);

// function modalTrigger(imageID) {
//   var modal = document.getElementById('myModal');
//   var img = document.querySelector('.responsive')[imageID];
//   var modalImg = document.getElementById("img01");
//   var captionText = document.getElementById("caption");

//       modal.style.display = "block";
//       modalImg.src = img.src;
//       captionText.innerHTML = img.alt;

//   var span = document.getElementsByClassName("close")[0];

//   span.onclick = function() {
//        modal.style.display = "none";
//   };

// };

// function modalTrigger(imageSrc) {
//   var modal = document.getElementById('myModal');
//   var modalImg = document.getElementById("modalImg");

//   if (modal && modalImg) {
//     modal.style.display = "block";
//     modalImg.src = imageSrc;

//     var span = document.getElementsByClassName("close")[0];

//     if (span) {
//       span.onclick = function() {
//         modal.style.display = "none";
//       };
//     }
//   }
// }

function getProductInfo(productID) {
  var productItem = document.querySelector("[data-id=\"".concat(productID, "\"]"));
  var image = productItem.getAttribute('data-image');
  var title = productItem.querySelector('.product-title').textContent;
  var price = productItem.querySelector('.produc-list-info-price').textContent;
  return {
    title: title,
    image: image,
    description: "Description du produit",
    price: price
  };
}
function showModal(productID) {
  var productInfo = getProductInfo(productID);
  var modalContent = "\n    <div class=\"product-details\">\n      <img class=\"picto-modal-itmes\" src=\"".concat(productInfo.image, "\" alt=\"").concat(productInfo.title, "\">\n      <div class=\"product-info\">\n        <h2>").concat(productInfo.title, "</h2>\n        <p>").concat(productInfo.description, "</p>\n        <span>Prix: ").concat(productInfo.price, "</span>\n        <select>\n          <option value=\"1\">1</option>\n          <option value=\"2\">2</option>\n          <option value=\"3\">3</option>\n        </select>\n        <button onclick=\"nextStep()\" class=\"next-step-btn\">Continuer</button>\n        <span class=\"close\">&times;</span>\n      </div>\n    </div>\n  ");
  var modal = document.querySelector('.modal');
  var modalContentContainer = document.querySelector('.modal-content');
  modalContentContainer.innerHTML = modalContent;
  modal.style.display = 'block';
  var closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}
var productItems = document.querySelectorAll('.product-item');
productItems.forEach(function (item) {
  var productID = item.dataset.id;
  item.addEventListener('click', function () {
    showModal(productID);
  });
});

/***/ }),

/***/ "./assets/website/scss/app.scss":
/*!**************************************!*\
  !*** ./assets/website/scss/app.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-986eaf"], () => (__webpack_exec__("./assets/website/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCLENBQUMsZUFBZSxDQUFDO0FBQy9ERCxZQUFZLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7RUFDM0IsSUFBTWpCLFNBQVMsR0FBR2lCLElBQUksQ0FBQ0MsT0FBTyxDQUFDbEMsRUFBRTtFQUNqQ2lDLElBQUksQ0FBQ3hDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DZ0MsU0FBUyxDQUFDVCxTQUFTLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMvR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvanMvYXBwL2J1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9qcy9hcHAvZ2FsZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2pzL2FwcC90ZXN0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9zY3NzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XG5cbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIGdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbmltcG9ydCAnLi9hcHAvdGVzdGUnO1xuaW1wb3J0ICcuL2FwcC9nYWxlcnknO1xuaW1wb3J0ICcuL2FwcC9idXJnZXInO1xuaW1wb3J0ICcuL2FwcC9tZXNzYWdlJzsiLCIvLyBTw6lsZWN0aW9ubmUgbCfDqWzDqW1lbnQgSFRNTCBhdmVjIGwnSUQgXCJidXJnZXJcIiBldCBsZSBzdG9ja2UgZGFucyBsYSB2YXJpYWJsZSBcIm1lbnVcIlxubGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1cmdlclwiKTtcblxuLy8gU8OpbGVjdGlvbm5lIGxlIHByZW1pZXIgw6lsw6ltZW50IEhUTUwgYXZlYyBsYSBjbGFzc2UgXCJuYXZpZ2F0aW9uXCIgZXQgbGUgc3RvY2tlIGRhbnMgbGEgdmFyaWFibGUgXCJuYXZpZ2F0aW9uXCJcbmxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpO1xuXG4vLyBBam91dGUgdW4gw6ljb3V0ZXVyIGQnw6l2w6luZW1lbnRzIFwiY2xpY2tcIiDDoCBsJ8OpbMOpbWVudCBcIm1lbnVcIlxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBMb3JzcXVlIGwnw6lsw6ltZW50IFwibWVudVwiIGVzdCBjbGlxdcOpLCBjZXR0ZSBmb25jdGlvbiBhbm9ueW1lIGVzdCBleMOpY3V0w6llLlxuXG4gICAgLy8gVXRpbGlzZSBsYSBtw6l0aG9kZSBcImNsYXNzTGlzdC50b2dnbGUoKVwiIHBvdXIgYmFzY3VsZXIgbGEgY2xhc3NlIFwib25zaG93XCIgc3VyIGwnw6lsw6ltZW50IFwibmF2aWdhdGlvblwiXG4gICAgLy8gU2kgbGEgY2xhc3NlIFwib25zaG93XCIgZXN0IGTDqWrDoCBwcsOpc2VudGUsIGVsbGUgc2VyYSByZXRpcsOpZSwgc2lub24gZWxsZSBzZXJhIGFqb3V0w6llLlxuICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZShcIm9uc2hvd1wiKTtcbn0pXG4iLCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbWFsbC1pbWFnZS1ib3JkZXInKSkge1xuICAgICAgdmFyIGVsZW1lbnRJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgIGNvbnNvbGUubG9nKFwiSUQgZGUgbCfDqWzDqW1lbnQgY2xpcXXDqSA6IFwiICsgZWxlbWVudElEKTtcblxuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlLTEgcmVzcG9uc2l2ZScpO1xuICAgICAgICAgIGNvbnN0IG1vZGFsSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZzAxJyk7XG4gICAgICAgICAgY29uc3QgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBtb2RhbEltZy5zcmMgPSBpbWFnZXNbZWxlbWVudElEXS5zcmM7XG4gICAgICAgICAgY2FwdGlvblRleHQuaW5uZXJIVE1MID0gaW1hZ2VzW2VsZW1lbnRJRF0uYWx0O1xuXG4gICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdO1xuICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgaW1hZ2VFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NtYWxsLWltYWdlLWJvcmRlcicpO1xuXG4vLyBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuXG4vLyAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuLy8gICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlLTEgcmVzcG9uc2l2ZScpO1xuLy8gICAgIGNvbnN0IG1vZGFsSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZzAxJyk7XG4vLyAgICAgY29uc3QgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdGlvbicpO1xuICBcbi8vICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbi8vICAgICBtb2RhbEltZy5zcmMgPSBpbWFnZXNbMF0uc3JjO1xuLy8gICAgIGNhcHRpb25UZXh0LmlubmVySFRNTCA9IGltYWdlc1swXS5hbHQ7XG4gIFxuLy8gICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UnKVswXTtcbi8vICAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuLy8gICAgIH07XG4vLyAgIH1cbiAgXG5cbi8vIC8vIEF0dGFjaGUgdW4gZ2VzdGlvbm5haXJlIGQnw6l2w6luZW1lbnQgw6AgY2hhcXVlIMOpbMOpbWVudFxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGltYWdlRWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4vLyB9XG5cbiIsIi8vIChmdW5jdGlvbiAoJCwgd2luZG93LCB1bmRlZmluZWQpIHtcblxuLy8gICAgICd1c2Ugc3RyaWN0JztcblxuIFxuXG4vLyB9KShqUXVlcnksIHdpbmRvdyk7XG5cblxuXG5cbi8vIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlcihpbWFnZUlEKSB7XG4vLyAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4vLyAgIHZhciBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZScpW2ltYWdlSURdO1xuLy8gICB2YXIgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZzAxXCIpO1xuLy8gICB2YXIgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcHRpb25cIik7XG4gXG4vLyAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuLy8gICAgICAgbW9kYWxJbWcuc3JjID0gaW1nLnNyYztcbi8vICAgICAgIGNhcHRpb25UZXh0LmlubmVySFRNTCA9IGltZy5hbHQ7XG4gICAgICAgICAgICAgIFxuLy8gICB2YXIgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuLy8gICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgIH07XG4gIFxuLy8gfTtcblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlcihpbWFnZVNyYykge1xuLy8gICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuLy8gICB2YXIgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsSW1nXCIpO1xuXG4vLyAgIGlmIChtb2RhbCAmJiBtb2RhbEltZykge1xuLy8gICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4vLyAgICAgbW9kYWxJbWcuc3JjID0gaW1hZ2VTcmM7XG5cbi8vICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuLy8gICAgIGlmIChzcGFuKSB7XG4vLyAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5cbmZ1bmN0aW9uIGdldFByb2R1Y3RJbmZvKHByb2R1Y3RJRCkge1xuICBjb25zdCBwcm9kdWN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtwcm9kdWN0SUR9XCJdYCk7XG4gIGNvbnN0IGltYWdlID0gcHJvZHVjdEl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJyk7XG4gIGNvbnN0IHRpdGxlID0gcHJvZHVjdEl0ZW0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgY29uc3QgcHJpY2UgPSBwcm9kdWN0SXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjLWxpc3QtaW5mby1wcmljZScpLnRleHRDb250ZW50O1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGltYWdlOiBpbWFnZSxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBkdSBwcm9kdWl0XCIsXG4gICAgcHJpY2U6IHByaWNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNob3dNb2RhbChwcm9kdWN0SUQpIHtcbiAgY29uc3QgcHJvZHVjdEluZm8gPSBnZXRQcm9kdWN0SW5mbyhwcm9kdWN0SUQpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXRhaWxzXCI+XG4gICAgICA8aW1nIGNsYXNzPVwicGljdG8tbW9kYWwtaXRtZXNcIiBzcmM9XCIke3Byb2R1Y3RJbmZvLmltYWdlfVwiIGFsdD1cIiR7cHJvZHVjdEluZm8udGl0bGV9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbmZvXCI+XG4gICAgICAgIDxoMj4ke3Byb2R1Y3RJbmZvLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwPiR7cHJvZHVjdEluZm8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8c3Bhbj5Qcml4OiAke3Byb2R1Y3RJbmZvLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gb25jbGljaz1cIm5leHRTdGVwKClcIiBjbGFzcz1cIm5leHQtc3RlcC1idG5cIj5Db250aW51ZXI8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBtb2RhbENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuICBtb2RhbENvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gbW9kYWxDb250ZW50O1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgcHJvZHVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtaXRlbScpO1xucHJvZHVjdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RJRCA9IGl0ZW0uZGF0YXNldC5pZDtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93TW9kYWwocHJvZHVjdElEKTtcbiAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJtZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImV2ZW50IiwidGFyZ2V0IiwiY29udGFpbnMiLCJlbGVtZW50SUQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJtb2RhbCIsImltYWdlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJtb2RhbEltZyIsImNhcHRpb25UZXh0Iiwic3R5bGUiLCJkaXNwbGF5Iiwic3JjIiwiaW5uZXJIVE1MIiwiYWx0IiwiY2xvc2VCdXR0b24iLCJvbmNsaWNrIiwiZ2V0UHJvZHVjdEluZm8iLCJwcm9kdWN0SUQiLCJwcm9kdWN0SXRlbSIsImNvbmNhdCIsImltYWdlIiwiZ2V0QXR0cmlidXRlIiwidGl0bGUiLCJ0ZXh0Q29udGVudCIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJzaG93TW9kYWwiLCJwcm9kdWN0SW5mbyIsIm1vZGFsQ29udGVudCIsIm1vZGFsQ29udGVudENvbnRhaW5lciIsIndpbmRvdyIsInByb2R1Y3RJdGVtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiaXRlbSIsImRhdGFzZXQiXSwic291cmNlUm9vdCI6IiJ9