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
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
console.log('ok');
var contactForm = document.getElementById('form-message');

// if (contactForm) 
console.log(contactForm);
contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Empêche la soumission par défaut du formulaire
  var formData = new FormData(contactForm);

  // Envoi des données à l'API côté serveur
  fetch('/message', {
    method: 'POST',
    body: formData
  }).then(function (response) {
    if (response.status === 500) {
      throw new Error();
    }
    return response.json();
  }).then(function () {
    // Action après une soumission réussie (par exemple, appel à showTab())
    showTab();
  })["catch"](function () {
    return null;
  }); // Gestion des erreurs, vous pouvez personnaliser cette partie

  // Si nécessaire, vous pouvez ajouter du code pour masquer le formulaire ici
});

function showTab(tab) {
  // Code pour basculer entre les formulaires va ici si nécessaire

  // Sélectionnez l'élément de message de succès
  var successMessage = document.getElementById('success-message');

  // Affichez le message de succès en le rendant visible (en supprimant "display: none;")
  successMessage.style.display = 'block';

  // Masquez le formulaire (si nécessaire)
  contactForm.style.display = 'none'; // Si contactForm est la variable qui représente le formulaire
}

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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-cfe40b"], () => (__webpack_exec__("./assets/website/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZUFBZSxDQUFDO0FBQy9ERCxZQUFZLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxJQUFJLEVBQUk7RUFDM0IsSUFBTWpCLFNBQVMsR0FBR2lCLElBQUksQ0FBQ0MsT0FBTyxDQUFDbEQsRUFBRTtFQUNqQ2lELElBQUksQ0FBQ3hELGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DZ0QsU0FBUyxDQUFDVCxTQUFTLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMvR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvanMvYXBwL2J1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9qcy9hcHAvZ2FsZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2pzL2FwcC9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2pzL2FwcC90ZXN0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9zY3NzL2FwcC5zY3NzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc2Nzcy9hcHAuc2Nzcyc7XG5cbi8vIGNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcbi8vIGdsb2JhbC4kID0gZ2xvYmFsLmpRdWVyeSA9ICQ7XG5cbmltcG9ydCAnLi9hcHAvdGVzdGUnO1xuaW1wb3J0ICcuL2FwcC9nYWxlcnknO1xuaW1wb3J0ICcuL2FwcC9idXJnZXInO1xuaW1wb3J0ICcuL2FwcC9tZXNzYWdlJzsiLCIvLyBTw6lsZWN0aW9ubmUgbCfDqWzDqW1lbnQgSFRNTCBhdmVjIGwnSUQgXCJidXJnZXJcIiBldCBsZSBzdG9ja2UgZGFucyBsYSB2YXJpYWJsZSBcIm1lbnVcIlxubGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ1cmdlclwiKTtcblxuLy8gU8OpbGVjdGlvbm5lIGxlIHByZW1pZXIgw6lsw6ltZW50IEhUTUwgYXZlYyBsYSBjbGFzc2UgXCJuYXZpZ2F0aW9uXCIgZXQgbGUgc3RvY2tlIGRhbnMgbGEgdmFyaWFibGUgXCJuYXZpZ2F0aW9uXCJcbmxldCBuYXZpZ2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZpZ2F0aW9uXCIpO1xuXG4vLyBBam91dGUgdW4gw6ljb3V0ZXVyIGQnw6l2w6luZW1lbnRzIFwiY2xpY2tcIiDDoCBsJ8OpbMOpbWVudCBcIm1lbnVcIlxubWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBMb3JzcXVlIGwnw6lsw6ltZW50IFwibWVudVwiIGVzdCBjbGlxdcOpLCBjZXR0ZSBmb25jdGlvbiBhbm9ueW1lIGVzdCBleMOpY3V0w6llLlxuXG4gICAgLy8gVXRpbGlzZSBsYSBtw6l0aG9kZSBcImNsYXNzTGlzdC50b2dnbGUoKVwiIHBvdXIgYmFzY3VsZXIgbGEgY2xhc3NlIFwib25zaG93XCIgc3VyIGwnw6lsw6ltZW50IFwibmF2aWdhdGlvblwiXG4gICAgLy8gU2kgbGEgY2xhc3NlIFwib25zaG93XCIgZXN0IGTDqWrDoCBwcsOpc2VudGUsIGVsbGUgc2VyYSByZXRpcsOpZSwgc2lub24gZWxsZSBzZXJhIGFqb3V0w6llLlxuICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LnRvZ2dsZShcIm9uc2hvd1wiKTtcbn0pXG4iLCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbWFsbC1pbWFnZS1ib3JkZXInKSkge1xuICAgICAgdmFyIGVsZW1lbnRJRCA9IGV2ZW50LnRhcmdldC5pZDtcbiAgICAgIGNvbnNvbGUubG9nKFwiSUQgZGUgbCfDqWzDqW1lbnQgY2xpcXXDqSA6IFwiICsgZWxlbWVudElEKTtcblxuICAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuICAgICAgICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlLTEgcmVzcG9uc2l2ZScpO1xuICAgICAgICAgIGNvbnN0IG1vZGFsSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZzAxJyk7XG4gICAgICAgICAgY29uc3QgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBtb2RhbEltZy5zcmMgPSBpbWFnZXNbZWxlbWVudElEXS5zcmM7XG4gICAgICAgICAgY2FwdGlvblRleHQuaW5uZXJIVE1MID0gaW1hZ2VzW2VsZW1lbnRJRF0uYWx0O1xuXG4gICAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdO1xuICAgICAgICAgICAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgfTtcbiAgICB9XG4gIH0pO1xuXG5cblxuXG5cblxuXG5cblxuLy8gY29uc3QgaW1hZ2VFbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NtYWxsLWltYWdlLWJvcmRlcicpO1xuXG4vLyBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuXG4vLyAgICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuLy8gICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlLTEgcmVzcG9uc2l2ZScpO1xuLy8gICAgIGNvbnN0IG1vZGFsSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZzAxJyk7XG4vLyAgICAgY29uc3QgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FwdGlvbicpO1xuICBcbi8vICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbi8vICAgICBtb2RhbEltZy5zcmMgPSBpbWFnZXNbMF0uc3JjO1xuLy8gICAgIGNhcHRpb25UZXh0LmlubmVySFRNTCA9IGltYWdlc1swXS5hbHQ7XG4gIFxuLy8gICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UnKVswXTtcbi8vICAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4vLyAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuLy8gICAgIH07XG4vLyAgIH1cbiAgXG5cbi8vIC8vIEF0dGFjaGUgdW4gZ2VzdGlvbm5haXJlIGQnw6l2w6luZW1lbnQgw6AgY2hhcXVlIMOpbMOpbWVudFxuLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4vLyAgIGltYWdlRWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4vLyB9XG5cbiIsImNvbnNvbGUubG9nKCdvaycpO1xuXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1tZXNzYWdlJyk7XG4gICAgXG4gICAgLy8gaWYgKGNvbnRhY3RGb3JtKSBcbiAgICAgICBjb25zb2xlLmxvZyhjb250YWN0Rm9ybSk7XG4gICAgICAgIGNvbnRhY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEVtcMOqY2hlIGxhIHNvdW1pc3Npb24gcGFyIGTDqWZhdXQgZHUgZm9ybXVsYWlyZVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoY29udGFjdEZvcm0pO1xuXG4gICAgICAgICAgICAvLyBFbnZvaSBkZXMgZG9ubsOpZXMgw6AgbCdBUEkgY8O0dMOpIHNlcnZldXJcbiAgICAgICAgICAgIGZldGNoKCcvbWVzc2FnZScsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBib2R5OiBmb3JtRGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFjdGlvbiBhcHLDqHMgdW5lIHNvdW1pc3Npb24gcsOpdXNzaWUgKHBhciBleGVtcGxlLCBhcHBlbCDDoCBzaG93VGFiKCkpXG4gICAgICAgICAgICAgICAgc2hvd1RhYigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBudWxsKTsgLy8gR2VzdGlvbiBkZXMgZXJyZXVycywgdm91cyBwb3V2ZXogcGVyc29ubmFsaXNlciBjZXR0ZSBwYXJ0aWVcblxuICAgICAgICAgICAgLy8gU2kgbsOpY2Vzc2FpcmUsIHZvdXMgcG91dmV6IGFqb3V0ZXIgZHUgY29kZSBwb3VyIG1hc3F1ZXIgbGUgZm9ybXVsYWlyZSBpY2lcbiAgICAgICAgfSk7XG4gICAgXG5cbiAgICAgICAgZnVuY3Rpb24gc2hvd1RhYih0YWIpIHtcbiAgICAgICAgICAgIC8vIENvZGUgcG91ciBiYXNjdWxlciBlbnRyZSBsZXMgZm9ybXVsYWlyZXMgdmEgaWNpIHNpIG7DqWNlc3NhaXJlXG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBTw6lsZWN0aW9ubmV6IGwnw6lsw6ltZW50IGRlIG1lc3NhZ2UgZGUgc3VjY8Ooc1xuICAgICAgICAgICAgY29uc3Qgc3VjY2Vzc01lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzcy1tZXNzYWdlJyk7XG4gICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZmZpY2hleiBsZSBtZXNzYWdlIGRlIHN1Y2PDqHMgZW4gbGUgcmVuZGFudCB2aXNpYmxlIChlbiBzdXBwcmltYW50IFwiZGlzcGxheTogbm9uZTtcIilcbiAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gTWFzcXVleiBsZSBmb3JtdWxhaXJlIChzaSBuw6ljZXNzYWlyZSlcbiAgICAgICAgICAgIGNvbnRhY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIFNpIGNvbnRhY3RGb3JtIGVzdCBsYSB2YXJpYWJsZSBxdWkgcmVwcsOpc2VudGUgbGUgZm9ybXVsYWlyZVxuICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICBcblxuIiwiLy8gKGZ1bmN0aW9uICgkLCB3aW5kb3csIHVuZGVmaW5lZCkge1xuXG4vLyAgICAgJ3VzZSBzdHJpY3QnO1xuXG4gXG5cbi8vIH0pKGpRdWVyeSwgd2luZG93KTtcblxuXG5cblxuLy8gZnVuY3Rpb24gbW9kYWxUcmlnZ2VyKGltYWdlSUQpIHtcbi8vICAgdmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbi8vICAgdmFyIGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNwb25zaXZlJylbaW1hZ2VJRF07XG4vLyAgIHZhciBtb2RhbEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nMDFcIik7XG4vLyAgIHZhciBjYXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FwdGlvblwiKTtcbiBcbi8vICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4vLyAgICAgICBtb2RhbEltZy5zcmMgPSBpbWcuc3JjO1xuLy8gICAgICAgY2FwdGlvblRleHQuaW5uZXJIVE1MID0gaW1nLmFsdDtcbiAgICAgICAgICAgICAgXG4vLyAgIHZhciBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG4vLyAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbi8vICAgfTtcbiAgXG4vLyB9O1xuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gbW9kYWxUcmlnZ2VyKGltYWdlU3JjKSB7XG4vLyAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4vLyAgIHZhciBtb2RhbEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxJbWdcIik7XG5cbi8vICAgaWYgKG1vZGFsICYmIG1vZGFsSW1nKSB7XG4vLyAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbi8vICAgICBtb2RhbEltZy5zcmMgPSBpbWFnZVNyYztcblxuLy8gICAgIHZhciBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuXG4vLyAgICAgaWYgKHNwYW4pIHtcbi8vICAgICAgIHNwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgICAgICB9O1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cblxuZnVuY3Rpb24gZ2V0UHJvZHVjdEluZm8ocHJvZHVjdElEKSB7XG4gIGNvbnN0IHByb2R1Y3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke3Byb2R1Y3RJRH1cIl1gKTtcbiAgY29uc3QgaW1hZ2UgPSBwcm9kdWN0SXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKTtcbiAgY29uc3QgdGl0bGUgPSBwcm9kdWN0SXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC10aXRsZScpLnRleHRDb250ZW50O1xuICBjb25zdCBwcmljZSA9IHByb2R1Y3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWMtbGlzdC1pbmZvLXByaWNlJykudGV4dENvbnRlbnQ7XG5cbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogdGl0bGUsXG4gICAgaW1hZ2U6IGltYWdlLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRlc2NyaXB0aW9uIGR1IHByb2R1aXRcIixcbiAgICBwcmljZTogcHJpY2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2hvd01vZGFsKHByb2R1Y3RJRCkge1xuICBjb25zdCBwcm9kdWN0SW5mbyA9IGdldFByb2R1Y3RJbmZvKHByb2R1Y3RJRCk7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gYFxuICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWRldGFpbHNcIj5cbiAgICAgIDxpbWcgY2xhc3M9XCJwaWN0by1tb2RhbC1pdG1lc1wiIHNyYz1cIiR7cHJvZHVjdEluZm8uaW1hZ2V9XCIgYWx0PVwiJHtwcm9kdWN0SW5mby50aXRsZX1cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9kdWN0LWluZm9cIj5cbiAgICAgICAgPGgyPiR7cHJvZHVjdEluZm8udGl0bGV9PC9oMj5cbiAgICAgICAgPHA+JHtwcm9kdWN0SW5mby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxzcGFuPlByaXg6ICR7cHJvZHVjdEluZm8ucHJpY2V9PC9zcGFuPlxuICAgICAgICA8c2VsZWN0PlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+MTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibmV4dFN0ZXAoKVwiIGNsYXNzPVwibmV4dC1zdGVwLWJ0blwiPkNvbnRpbnVlcjwvYnV0dG9uPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG1vZGFsQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG4gIG1vZGFsQ29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSBtb2RhbENvbnRlbnQ7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufVxuXG5jb25zdCBwcm9kdWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1pdGVtJyk7XG5wcm9kdWN0SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgY29uc3QgcHJvZHVjdElEID0gaXRlbS5kYXRhc2V0LmlkO1xuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dNb2RhbChwcm9kdWN0SUQpO1xuICB9KTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIm1lbnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmF2aWdhdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjb250YWlucyIsImVsZW1lbnRJRCIsImlkIiwiY29uc29sZSIsImxvZyIsIm1vZGFsIiwiaW1hZ2VzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGFsSW1nIiwiY2FwdGlvblRleHQiLCJzdHlsZSIsImRpc3BsYXkiLCJzcmMiLCJpbm5lckhUTUwiLCJhbHQiLCJjbG9zZUJ1dHRvbiIsIm9uY2xpY2siLCJjb250YWN0Rm9ybSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJFcnJvciIsImpzb24iLCJzaG93VGFiIiwidGFiIiwic3VjY2Vzc01lc3NhZ2UiLCJnZXRQcm9kdWN0SW5mbyIsInByb2R1Y3RJRCIsInByb2R1Y3RJdGVtIiwiY29uY2F0IiwiaW1hZ2UiLCJnZXRBdHRyaWJ1dGUiLCJ0aXRsZSIsInRleHRDb250ZW50IiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInNob3dNb2RhbCIsInByb2R1Y3RJbmZvIiwibW9kYWxDb250ZW50IiwibW9kYWxDb250ZW50Q29udGFpbmVyIiwid2luZG93IiwicHJvZHVjdEl0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiZGF0YXNldCJdLCJzb3VyY2VSb290IjoiIn0=