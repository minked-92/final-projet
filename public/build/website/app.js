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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztBQUMvREQsWUFBWSxDQUFDRSxPQUFPLENBQUMsVUFBQUMsSUFBSSxFQUFJO0VBQzNCLElBQU1qQixTQUFTLEdBQUdpQixJQUFJLENBQUNDLE9BQU8sQ0FBQ2xDLEVBQUU7RUFDakNpQyxJQUFJLENBQUN4QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNuQ2dDLFNBQVMsQ0FBQ1QsU0FBUyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDL0dGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2pzL2FwcC9idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvanMvYXBwL2dhbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9qcy9hcHAvdGVzdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvc2Nzcy9hcHAuc2Nzcz83NWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XG5cbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIGdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbmltcG9ydCAnLi9hcHAvdGVzdGUnO1xuaW1wb3J0ICcuL2FwcC9nYWxlcnknO1xuaW1wb3J0ICcuL2FwcC9idXJnZXInOyIsIi8vIFPDqWxlY3Rpb25uZSBsJ8OpbMOpbWVudCBIVE1MIGF2ZWMgbCdJRCBcImJ1cmdlclwiIGV0IGxlIHN0b2NrZSBkYW5zIGxhIHZhcmlhYmxlIFwibWVudVwiXG5sZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVyZ2VyXCIpO1xuXG4vLyBTw6lsZWN0aW9ubmUgbGUgcHJlbWllciDDqWzDqW1lbnQgSFRNTCBhdmVjIGxhIGNsYXNzZSBcIm5hdmlnYXRpb25cIiBldCBsZSBzdG9ja2UgZGFucyBsYSB2YXJpYWJsZSBcIm5hdmlnYXRpb25cIlxubGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIik7XG5cbi8vIEFqb3V0ZSB1biDDqWNvdXRldXIgZCfDqXbDqW5lbWVudHMgXCJjbGlja1wiIMOgIGwnw6lsw6ltZW50IFwibWVudVwiXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIExvcnNxdWUgbCfDqWzDqW1lbnQgXCJtZW51XCIgZXN0IGNsaXF1w6ksIGNldHRlIGZvbmN0aW9uIGFub255bWUgZXN0IGV4w6ljdXTDqWUuXG5cbiAgICAvLyBVdGlsaXNlIGxhIG3DqXRob2RlIFwiY2xhc3NMaXN0LnRvZ2dsZSgpXCIgcG91ciBiYXNjdWxlciBsYSBjbGFzc2UgXCJvbnNob3dcIiBzdXIgbCfDqWzDqW1lbnQgXCJuYXZpZ2F0aW9uXCJcbiAgICAvLyBTaSBsYSBjbGFzc2UgXCJvbnNob3dcIiBlc3QgZMOpasOgIHByw6lzZW50ZSwgZWxsZSBzZXJhIHJldGlyw6llLCBzaW5vbiBlbGxlIHNlcmEgYWpvdXTDqWUuXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwib25zaG93XCIpO1xufSlcbiIsIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NtYWxsLWltYWdlLWJvcmRlcicpKSB7XG4gICAgICB2YXIgZWxlbWVudElEID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgY29uc29sZS5sb2coXCJJRCBkZSBsJ8OpbMOpbWVudCBjbGlxdcOpIDogXCIgKyBlbGVtZW50SUQpO1xuXG4gICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4gICAgICAgICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2UtMSByZXNwb25zaXZlJyk7XG4gICAgICAgICAgY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nMDEnKTtcbiAgICAgICAgICBjb25zdCBjYXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXB0aW9uJyk7XG4gICAgICAgIFxuICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIG1vZGFsSW1nLnNyYyA9IGltYWdlc1tlbGVtZW50SURdLnNyYztcbiAgICAgICAgICBjYXB0aW9uVGV4dC5pbm5lckhUTUwgPSBpbWFnZXNbZWxlbWVudElEXS5hbHQ7XG5cbiAgICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF07XG4gICAgICAgICAgICAgIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICB9O1xuICAgIH1cbiAgfSk7XG5cblxuXG5cblxuXG5cblxuXG4vLyBjb25zdCBpbWFnZUVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc21hbGwtaW1hZ2UtYm9yZGVyJyk7XG5cbi8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG5cbi8vICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4vLyAgICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1hZ2UtMSByZXNwb25zaXZlJyk7XG4vLyAgICAgY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nMDEnKTtcbi8vICAgICBjb25zdCBjYXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXB0aW9uJyk7XG4gIFxuLy8gICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuLy8gICAgIG1vZGFsSW1nLnNyYyA9IGltYWdlc1swXS5zcmM7XG4vLyAgICAgY2FwdGlvblRleHQuaW5uZXJIVE1MID0gaW1hZ2VzWzBdLmFsdDtcbiAgXG4vLyAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdO1xuLy8gICAgIGNsb3NlQnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4vLyAgICAgfTtcbi8vICAgfVxuICBcblxuLy8gLy8gQXR0YWNoZSB1biBnZXN0aW9ubmFpcmUgZCfDqXbDqW5lbWVudCDDoCBjaGFxdWUgw6lsw6ltZW50XG4vLyBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbi8vICAgaW1hZ2VFbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbi8vIH1cblxuIiwiLy8gKGZ1bmN0aW9uICgkLCB3aW5kb3csIHVuZGVmaW5lZCkge1xuXG4vLyAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gXG5cbi8vIH0pKGpRdWVyeSwgd2luZG93KTtcblxuXG5cblxuLy8gZnVuY3Rpb24gbW9kYWxUcmlnZ2VyKGltYWdlSUQpIHtcbi8vICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbi8vICAgdmFyIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zaXZlJylbaW1hZ2VJRF07XG4vLyAgIHZhciBtb2RhbEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nMDFcIik7XG4vLyAgIHZhciBjYXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwdGlvblwiKTtcbiBcbi8vICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4vLyAgICAgICBtb2RhbEltZy5zcmMgPSBpbWcuc3JjO1xuLy8gICAgICAgY2FwdGlvblRleHQuaW5uZXJIVE1MID0gaW1nLmFsdDtcbiAgICAgICAgICAgICAgXG4vLyAgIHZhciBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG4vLyAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgfTtcbiAgXG4vLyB9O1xuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gbW9kYWxUcmlnZ2VyKGltYWdlU3JjKSB7XG4vLyAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4vLyAgIHZhciBtb2RhbEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxJbWdcIik7XG5cbi8vICAgaWYgKG1vZGFsICYmIG1vZGFsSW1nKSB7XG4vLyAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbi8vICAgICBtb2RhbEltZy5zcmMgPSBpbWFnZVNyYztcblxuLy8gICAgIHZhciBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG4vLyAgICAgaWYgKHNwYW4pIHtcbi8vICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cblxuZnVuY3Rpb24gZ2V0UHJvZHVjdEluZm8ocHJvZHVjdElEKSB7XG4gIGNvbnN0IHByb2R1Y3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Byb2R1Y3RJRH1cIl1gKTtcbiAgY29uc3QgaW1hZ2UgPSBwcm9kdWN0SXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKTtcbiAgY29uc3QgdGl0bGUgPSBwcm9kdWN0SXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC10aXRsZScpLnRleHRDb250ZW50O1xuICBjb25zdCBwcmljZSA9IHByb2R1Y3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWMtbGlzdC1pbmZvLXByaWNlJykudGV4dENvbnRlbnQ7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgaW1hZ2U6IGltYWdlLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGR1IHByb2R1aXRcIixcbiAgICBwcmljZTogcHJpY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2hvd01vZGFsKHByb2R1Y3RJRCkge1xuICBjb25zdCBwcm9kdWN0SW5mbyA9IGdldFByb2R1Y3RJbmZvKHByb2R1Y3RJRCk7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRldGFpbHNcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJwaWN0by1tb2RhbC1pdG1lc1wiIHNyYz1cIiR7cHJvZHVjdEluZm8uaW1hZ2V9XCIgYWx0PVwiJHtwcm9kdWN0SW5mby50aXRsZX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj5cbiAgICAgICAgPGgyPiR7cHJvZHVjdEluZm8udGl0bGV9PC9oMj5cbiAgICAgICAgPHA+JHtwcm9kdWN0SW5mby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxzcGFuPlByaXg6ICR7cHJvZHVjdEluZm8ucHJpY2V9PC9zcGFuPlxuICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibmV4dFN0ZXAoKVwiIGNsYXNzPVwibmV4dC1zdGVwLWJ0blwiPkNvbnRpbnVlcjwvYnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG1vZGFsQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG4gIG1vZGFsQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBtb2RhbENvbnRlbnQ7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBwcm9kdWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1pdGVtJyk7XG5wcm9kdWN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgY29uc3QgcHJvZHVjdElEID0gaXRlbS5kYXRhc2V0LmlkO1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dNb2RhbChwcm9kdWN0SUQpO1xuICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIm1lbnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmF2aWdhdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImVsZW1lbnRJRCIsImlkIiwiY29uc29sZSIsImxvZyIsIm1vZGFsIiwiaW1hZ2VzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGFsSW1nIiwiY2FwdGlvblRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJzcmMiLCJpbm5lckhUTUwiLCJhbHQiLCJjbG9zZUJ1dHRvbiIsIm9uY2xpY2siLCJnZXRQcm9kdWN0SW5mbyIsInByb2R1Y3RJRCIsInByb2R1Y3RJdGVtIiwiY29uY2F0IiwiaW1hZ2UiLCJnZXRBdHRyaWJ1dGUiLCJ0aXRsZSIsInRleHRDb250ZW50IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInNob3dNb2RhbCIsInByb2R1Y3RJbmZvIiwibW9kYWxDb250ZW50IiwibW9kYWxDb250ZW50Q29udGFpbmVyIiwid2luZG93IiwicHJvZHVjdEl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZGF0YXNldCJdLCJzb3VyY2VSb290IjoiIn0=