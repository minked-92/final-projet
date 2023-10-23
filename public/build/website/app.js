(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/website/js/app.js":
/*!**********************************!*\
  !*** ./assets/website/js/app.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/website/scss/app.scss");
/* harmony import */ var _app_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/cookies */ "./assets/website/js/app/cookies.js");
/* harmony import */ var _app_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_teste__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/teste */ "./assets/website/js/app/teste.js");
/* harmony import */ var _app_teste__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_teste__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_galery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/galery */ "./assets/website/js/app/galery.js");
/* harmony import */ var _app_galery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_galery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_burger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/burger */ "./assets/website/js/app/burger.js");
/* harmony import */ var _app_burger__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_app_burger__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/message */ "./assets/website/js/app/message.js");
/* harmony import */ var _app_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_app_message__WEBPACK_IMPORTED_MODULE_5__);


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

/***/ "./assets/website/js/app/cookies.js":
/*!******************************************!*\
  !*** ./assets/website/js/app/cookies.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "./node_modules/core-js/modules/es.string.starts-with.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
// Vérifier si l'utilisateur a déjà donné son consentement pour les cookies
function aDonneConsentement() {
  return document.cookie.split(';').some(function (cookie) {
    return cookie.trim().startsWith('consent=accepte');
  });
}

// Fonction pour afficher la boîte de dialogue de consentement
function afficherBoiteDeDialogue() {
  if (!aDonneConsentement()) {
    var confirmation = confirm("Nous utilisons des cookies pour améliorer votre expérience. Acceptez-vous l'utilisation de cookies ?");
    if (confirmation) {
      accepterCookies();
    }
  }
}

// Fonction pour accepter les cookies et stocker le consentement
function accepterCookies() {
  var expiration = new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000); // Un an
  document.cookie = 'consent=accepte; expires=' + expiration.toUTCString() + '; path=/';
}

// Appeler la fonction pour afficher la boîte de dialogue de consentement
afficherBoiteDeDialogue();

/***/ }),

/***/ "./assets/website/js/app/galery.js":
/*!*****************************************!*\
  !*** ./assets/website/js/app/galery.js ***!
  \*****************************************/
/***/ (() => {

// Écouteur d'événement pour les clics sur le document
document.addEventListener('click', function (event) {
  // Vérifie si l'élément cliqué a la classe "small-image-border"
  if (event.target.classList.contains('small-image-border')) {
    // Récupère l'ID de l'élément cliqué
    var elementID = event.target.id;
    // Affiche l'ID dans la console (à des fins de débogage)
    console.log("ID de l'élément cliqué : " + elementID);

    // Récupère l'élément modal par son ID
    var modal = document.getElementById('myModal');
    // Récupère tous les éléments avec les classes "image-1" et "responsive"
    var images = document.getElementsByClassName('image-1 responsive');
    // Récupère l'élément de l'image à afficher dans la modal
    var modalImg = document.getElementById('img01');
    // Récupère l'élément de légende de l'image
    var captionText = document.getElementById('caption');

    // Affiche la modal en changeant son style pour "block"
    modal.style.display = 'block';
    // Met à jour la source de l'image modal avec celle de l'élément cliqué
    modalImg.src = images[elementID].src;
    // Met à jour le texte de légende avec le texte alternatif de l'image
    captionText.innerHTML = images[elementID].alt;

    // Ajoute un gestionnaire d'événement au bouton de fermeture de la modal
    var closeButton = document.getElementsByClassName('close')[0];
    // Lorsque le bouton de fermeture est cliqué, cache la modal
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
    // Action après une soumission réussie
    //  (par exemple, appel à showTab())
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-e0f160"], () => (__webpack_exec__("./assets/website/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQ3RFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0lBQ25DOEQsU0FBUyxDQUFDVCxTQUFTLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7QUMvR0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3dlYnNpdGUvanMvYXBwL2J1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9qcy9hcHAvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9qcy9hcHAvZ2FsZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2pzL2FwcC9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy93ZWJzaXRlL2pzL2FwcC90ZXN0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvd2Vic2l0ZS9zY3NzL2FwcC5zY3NzPzc1YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xuLy8gZ2xvYmFsLiQgPSBnbG9iYWwualF1ZXJ5ID0gJDtcblxuaW1wb3J0ICcuL2FwcC9jb29raWVzJztcbmltcG9ydCAnLi9hcHAvdGVzdGUnO1xuaW1wb3J0ICcuL2FwcC9nYWxlcnknO1xuaW1wb3J0ICcuL2FwcC9idXJnZXInO1xuaW1wb3J0ICcuL2FwcC9tZXNzYWdlJztcbiIsIi8vIFPDqWxlY3Rpb25uZSBsJ8OpbMOpbWVudCBIVE1MIGF2ZWMgbCdJRCBcImJ1cmdlclwiIGV0IGxlIHN0b2NrZSBkYW5zIGxhIHZhcmlhYmxlIFwibWVudVwiXG5sZXQgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnVyZ2VyXCIpO1xuXG4vLyBTw6lsZWN0aW9ubmUgbGUgcHJlbWllciDDqWzDqW1lbnQgSFRNTCBhdmVjIGxhIGNsYXNzZSBcIm5hdmlnYXRpb25cIiBldCBsZSBzdG9ja2UgZGFucyBsYSB2YXJpYWJsZSBcIm5hdmlnYXRpb25cIlxubGV0IG5hdmlnYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdmlnYXRpb25cIik7XG5cbi8vIEFqb3V0ZSB1biDDqWNvdXRldXIgZCfDqXbDqW5lbWVudHMgXCJjbGlja1wiIMOgIGwnw6lsw6ltZW50IFwibWVudVwiXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIC8vIExvcnNxdWUgbCfDqWzDqW1lbnQgXCJtZW51XCIgZXN0IGNsaXF1w6ksIGNldHRlIGZvbmN0aW9uIGFub255bWUgZXN0IGV4w6ljdXTDqWUuXG5cbiAgICAvLyBVdGlsaXNlIGxhIG3DqXRob2RlIFwiY2xhc3NMaXN0LnRvZ2dsZSgpXCIgcG91ciBiYXNjdWxlciBsYSBjbGFzc2UgXCJvbnNob3dcIiBzdXIgbCfDqWzDqW1lbnQgXCJuYXZpZ2F0aW9uXCJcbiAgICAvLyBTaSBsYSBjbGFzc2UgXCJvbnNob3dcIiBlc3QgZMOpasOgIHByw6lzZW50ZSwgZWxsZSBzZXJhIHJldGlyw6llLCBzaW5vbiBlbGxlIHNlcmEgYWpvdXTDqWUuXG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QudG9nZ2xlKFwib25zaG93XCIpO1xufSlcbiIsIi8vIFbDqXJpZmllciBzaSBsJ3V0aWxpc2F0ZXVyIGEgZMOpasOgIGRvbm7DqSBzb24gY29uc2VudGVtZW50IHBvdXIgbGVzIGNvb2tpZXNcbmZ1bmN0aW9uIGFEb25uZUNvbnNlbnRlbWVudCgpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jykuc29tZShmdW5jdGlvbihjb29raWUpIHtcbiAgICAgICAgcmV0dXJuIGNvb2tpZS50cmltKCkuc3RhcnRzV2l0aCgnY29uc2VudD1hY2NlcHRlJyk7XG4gICAgfSk7XG59XG5cbi8vIEZvbmN0aW9uIHBvdXIgYWZmaWNoZXIgbGEgYm/DrnRlIGRlIGRpYWxvZ3VlIGRlIGNvbnNlbnRlbWVudFxuZnVuY3Rpb24gYWZmaWNoZXJCb2l0ZURlRGlhbG9ndWUoKSB7XG4gICAgaWYgKCFhRG9ubmVDb25zZW50ZW1lbnQoKSkge1xuICAgICAgICB2YXIgY29uZmlybWF0aW9uID0gY29uZmlybShcIk5vdXMgdXRpbGlzb25zIGRlcyBjb29raWVzIHBvdXIgYW3DqWxpb3JlciB2b3RyZSBleHDDqXJpZW5jZS4gQWNjZXB0ZXotdm91cyBsJ3V0aWxpc2F0aW9uIGRlIGNvb2tpZXMgP1wiKTtcbiAgICAgICAgaWYgKGNvbmZpcm1hdGlvbikge1xuICAgICAgICAgICAgYWNjZXB0ZXJDb29raWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEZvbmN0aW9uIHBvdXIgYWNjZXB0ZXIgbGVzIGNvb2tpZXMgZXQgc3RvY2tlciBsZSBjb25zZW50ZW1lbnRcbmZ1bmN0aW9uIGFjY2VwdGVyQ29va2llcygpIHtcbiAgICB2YXIgZXhwaXJhdGlvbiA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMCk7IC8vIFVuIGFuXG4gICAgZG9jdW1lbnQuY29va2llID0gJ2NvbnNlbnQ9YWNjZXB0ZTsgZXhwaXJlcz0nICsgZXhwaXJhdGlvbi50b1VUQ1N0cmluZygpICsgJzsgcGF0aD0vJztcbn1cblxuLy8gQXBwZWxlciBsYSBmb25jdGlvbiBwb3VyIGFmZmljaGVyIGxhIGJvw650ZSBkZSBkaWFsb2d1ZSBkZSBjb25zZW50ZW1lbnRcbmFmZmljaGVyQm9pdGVEZURpYWxvZ3VlKCk7XG4iLCJcblxuLy8gw4ljb3V0ZXVyIGQnw6l2w6luZW1lbnQgcG91ciBsZXMgY2xpY3Mgc3VyIGxlIGRvY3VtZW50XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIC8vIFbDqXJpZmllIHNpIGwnw6lsw6ltZW50IGNsaXF1w6kgYSBsYSBjbGFzc2UgXCJzbWFsbC1pbWFnZS1ib3JkZXJcIlxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc21hbGwtaW1hZ2UtYm9yZGVyJykpIHtcbiAgICAvLyBSw6ljdXDDqHJlIGwnSUQgZGUgbCfDqWzDqW1lbnQgY2xpcXXDqVxuICAgIHZhciBlbGVtZW50SUQgPSBldmVudC50YXJnZXQuaWQ7XG4gICAgLy8gQWZmaWNoZSBsJ0lEIGRhbnMgbGEgY29uc29sZSAow6AgZGVzIGZpbnMgZGUgZMOpYm9nYWdlKVxuICAgIGNvbnNvbGUubG9nKFwiSUQgZGUgbCfDqWzDqW1lbnQgY2xpcXXDqSA6IFwiICsgZWxlbWVudElEKTtcblxuICAgIC8vIFLDqWN1cMOocmUgbCfDqWzDqW1lbnQgbW9kYWwgcGFyIHNvbiBJRFxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbiAgICAvLyBSw6ljdXDDqHJlIHRvdXMgbGVzIMOpbMOpbWVudHMgYXZlYyBsZXMgY2xhc3NlcyBcImltYWdlLTFcIiBldCBcInJlc3BvbnNpdmVcIlxuICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ltYWdlLTEgcmVzcG9uc2l2ZScpO1xuICAgIC8vIFLDqWN1cMOocmUgbCfDqWzDqW1lbnQgZGUgbCdpbWFnZSDDoCBhZmZpY2hlciBkYW5zIGxhIG1vZGFsXG4gICAgY29uc3QgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nMDEnKTtcbiAgICAvLyBSw6ljdXDDqHJlIGwnw6lsw6ltZW50IGRlIGzDqWdlbmRlIGRlIGwnaW1hZ2VcbiAgICBjb25zdCBjYXB0aW9uVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXB0aW9uJyk7XG4gIFxuICAgIC8vIEFmZmljaGUgbGEgbW9kYWwgZW4gY2hhbmdlYW50IHNvbiBzdHlsZSBwb3VyIFwiYmxvY2tcIlxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIC8vIE1ldCDDoCBqb3VyIGxhIHNvdXJjZSBkZSBsJ2ltYWdlIG1vZGFsIGF2ZWMgY2VsbGUgZGUgbCfDqWzDqW1lbnQgY2xpcXXDqVxuICAgIG1vZGFsSW1nLnNyYyA9IGltYWdlc1tlbGVtZW50SURdLnNyYztcbiAgICAvLyBNZXQgw6Agam91ciBsZSB0ZXh0ZSBkZSBsw6lnZW5kZSBhdmVjIGxlIHRleHRlIGFsdGVybmF0aWYgZGUgbCdpbWFnZVxuICAgIGNhcHRpb25UZXh0LmlubmVySFRNTCA9IGltYWdlc1tlbGVtZW50SURdLmFsdDtcblxuICAgIC8vIEFqb3V0ZSB1biBnZXN0aW9ubmFpcmUgZCfDqXbDqW5lbWVudCBhdSBib3V0b24gZGUgZmVybWV0dXJlIGRlIGxhIG1vZGFsXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjbG9zZScpWzBdO1xuICAgIC8vIExvcnNxdWUgbGUgYm91dG9uIGRlIGZlcm1ldHVyZSBlc3QgY2xpcXXDqSwgY2FjaGUgbGEgbW9kYWxcbiAgICBjbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH07XG4gIH1cbn0pO1xuXG5cblxuXG5cblxuXG5cbi8vIGNvbnN0IGltYWdlRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbWFsbC1pbWFnZS1ib3JkZXInKTtcblxuLy8gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcblxuLy8gICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcbi8vICAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZS0xIHJlc3BvbnNpdmUnKTtcbi8vICAgICBjb25zdCBtb2RhbEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcwMScpO1xuLy8gICAgIGNvbnN0IGNhcHRpb25UZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcHRpb24nKTtcbiAgXG4vLyAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4vLyAgICAgbW9kYWxJbWcuc3JjID0gaW1hZ2VzWzBdLnNyYztcbi8vICAgICBjYXB0aW9uVGV4dC5pbm5lckhUTUwgPSBpbWFnZXNbMF0uYWx0O1xuICBcbi8vICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Nsb3NlJylbMF07XG4vLyAgICAgY2xvc2VCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbi8vICAgICB9O1xuLy8gICB9XG4gIFxuXG4vLyAvLyBBdHRhY2hlIHVuIGdlc3Rpb25uYWlyZSBkJ8OpdsOpbmVtZW50IMOgIGNoYXF1ZSDDqWzDqW1lbnRcbi8vIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuLy8gICBpbWFnZUVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xuLy8gfVxuXG4iLCJjb25zb2xlLmxvZygnb2snKTtcblxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0tbWVzc2FnZScpO1xuICAgIFxuICAgIC8vIGlmIChjb250YWN0Rm9ybSkgXG4gICAgICAgY29uc29sZS5sb2coY29udGFjdEZvcm0pO1xuICAgICAgICBjb250YWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBFbXDDqmNoZSBsYSBzb3VtaXNzaW9uIHBhciBkw6lmYXV0IGR1IGZvcm11bGFpcmVcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGNvbnRhY3RGb3JtKTtcblxuICAgICAgICAgICAgLy8gRW52b2kgZGVzIGRvbm7DqWVzIMOgIGwnQVBJIGPDtHTDqSBzZXJ2ZXVyXG4gICAgICAgICAgICBmZXRjaCgnL21lc3NhZ2UnLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgYm9keTogZm9ybURhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBBY3Rpb24gYXByw6hzIHVuZSBzb3VtaXNzaW9uIHLDqXVzc2llXG4gICAgICAgICAgICAgICAgLy8gIChwYXIgZXhlbXBsZSwgYXBwZWwgw6Agc2hvd1RhYigpKVxuICAgICAgICAgICAgICAgIHNob3dUYWIoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4gbnVsbCk7IC8vIEdlc3Rpb24gZGVzIGVycmV1cnMsIHZvdXMgcG91dmV6IHBlcnNvbm5hbGlzZXIgY2V0dGUgcGFydGllXG5cbiAgICAgICAgICAgIC8vIFNpIG7DqWNlc3NhaXJlLCB2b3VzIHBvdXZleiBham91dGVyIGR1IGNvZGUgcG91ciBtYXNxdWVyIGxlIGZvcm11bGFpcmUgaWNpXG4gICAgICAgIH0pO1xuICAgIFxuXG4gICAgICAgIGZ1bmN0aW9uIHNob3dUYWIodGFiKSB7XG4gICAgICAgICAgICAvLyBDb2RlIHBvdXIgYmFzY3VsZXIgZW50cmUgbGVzIGZvcm11bGFpcmVzIHZhIGljaSBzaSBuw6ljZXNzYWlyZVxuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gU8OpbGVjdGlvbm5leiBsJ8OpbMOpbWVudCBkZSBtZXNzYWdlIGRlIHN1Y2PDqHNcbiAgICAgICAgICAgIGNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Y2Nlc3MtbWVzc2FnZScpO1xuICAgICAgICAgIFxuICAgICAgICAgICAgLy8gQWZmaWNoZXogbGUgbWVzc2FnZSBkZSBzdWNjw6hzIGVuIGxlIHJlbmRhbnQgdmlzaWJsZSAoZW4gc3VwcHJpbWFudCBcImRpc3BsYXk6IG5vbmU7XCIpXG4gICAgICAgICAgICBzdWNjZXNzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICBcbiAgICAgICAgICAgIC8vIE1hc3F1ZXogbGUgZm9ybXVsYWlyZSAoc2kgbsOpY2Vzc2FpcmUpXG4gICAgICAgICAgICBjb250YWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAvLyBTaSBjb250YWN0Rm9ybSBlc3QgbGEgdmFyaWFibGUgcXVpIHJlcHLDqXNlbnRlIGxlIGZvcm11bGFpcmVcbiAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgXG5cbiIsIi8vIChmdW5jdGlvbiAoJCwgd2luZG93LCB1bmRlZmluZWQpIHtcblxuLy8gICAgICd1c2Ugc3RyaWN0JztcblxuIFxuXG4vLyB9KShqUXVlcnksIHdpbmRvdyk7XG5cblxuXG5cbi8vIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlcihpbWFnZUlEKSB7XG4vLyAgIHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdteU1vZGFsJyk7XG4vLyAgIHZhciBpbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzcG9uc2l2ZScpW2ltYWdlSURdO1xuLy8gICB2YXIgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZzAxXCIpO1xuLy8gICB2YXIgY2FwdGlvblRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcHRpb25cIik7XG4gXG4vLyAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuLy8gICAgICAgbW9kYWxJbWcuc3JjID0gaW1nLnNyYztcbi8vICAgICAgIGNhcHRpb25UZXh0LmlubmVySFRNTCA9IGltZy5hbHQ7XG4gICAgICAgICAgICAgIFxuLy8gICB2YXIgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuLy8gICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4vLyAgIH07XG4gIFxuLy8gfTtcblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIG1vZGFsVHJpZ2dlcihpbWFnZVNyYykge1xuLy8gICB2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXlNb2RhbCcpO1xuLy8gICB2YXIgbW9kYWxJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsSW1nXCIpO1xuXG4vLyAgIGlmIChtb2RhbCAmJiBtb2RhbEltZykge1xuLy8gICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4vLyAgICAgbW9kYWxJbWcuc3JjID0gaW1hZ2VTcmM7XG5cbi8vICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuLy8gICAgIGlmIChzcGFuKSB7XG4vLyAgICAgICBzcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbi8vICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuLy8gICAgICAgfTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5cbmZ1bmN0aW9uIGdldFByb2R1Y3RJbmZvKHByb2R1Y3RJRCkge1xuICBjb25zdCBwcm9kdWN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHtwcm9kdWN0SUR9XCJdYCk7XG4gIGNvbnN0IGltYWdlID0gcHJvZHVjdEl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJyk7XG4gIGNvbnN0IHRpdGxlID0gcHJvZHVjdEl0ZW0ucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtdGl0bGUnKS50ZXh0Q29udGVudDtcbiAgY29uc3QgcHJpY2UgPSBwcm9kdWN0SXRlbS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjLWxpc3QtaW5mby1wcmljZScpLnRleHRDb250ZW50O1xuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGltYWdlOiBpbWFnZSxcbiAgICBkZXNjcmlwdGlvbjogXCJEZXNjcmlwdGlvbiBkdSBwcm9kdWl0XCIsXG4gICAgcHJpY2U6IHByaWNlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNob3dNb2RhbChwcm9kdWN0SUQpIHtcbiAgY29uc3QgcHJvZHVjdEluZm8gPSBnZXRQcm9kdWN0SW5mbyhwcm9kdWN0SUQpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1kZXRhaWxzXCI+XG4gICAgICA8aW1nIGNsYXNzPVwicGljdG8tbW9kYWwtaXRtZXNcIiBzcmM9XCIke3Byb2R1Y3RJbmZvLmltYWdlfVwiIGFsdD1cIiR7cHJvZHVjdEluZm8udGl0bGV9XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdC1pbmZvXCI+XG4gICAgICAgIDxoMj4ke3Byb2R1Y3RJbmZvLnRpdGxlfTwvaDI+XG4gICAgICAgIDxwPiR7cHJvZHVjdEluZm8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8c3Bhbj5Qcml4OiAke3Byb2R1Y3RJbmZvLnByaWNlfTwvc3Bhbj5cbiAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDxidXR0b24gb25jbGljaz1cIm5leHRTdGVwKClcIiBjbGFzcz1cIm5leHQtc3RlcC1idG5cIj5Db250aW51ZXI8L2J1dHRvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCBtb2RhbENvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuICBtb2RhbENvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gbW9kYWxDb250ZW50O1xuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWwpIHtcbiAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgcHJvZHVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtaXRlbScpO1xucHJvZHVjdEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gIGNvbnN0IHByb2R1Y3RJRCA9IGl0ZW0uZGF0YXNldC5pZDtcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93TW9kYWwocHJvZHVjdElEKTtcbiAgfSk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJtZW51IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRpb24iLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImFEb25uZUNvbnNlbnRlbWVudCIsImNvb2tpZSIsInNwbGl0Iiwic29tZSIsInRyaW0iLCJzdGFydHNXaXRoIiwiYWZmaWNoZXJCb2l0ZURlRGlhbG9ndWUiLCJjb25maXJtYXRpb24iLCJjb25maXJtIiwiYWNjZXB0ZXJDb29raWVzIiwiZXhwaXJhdGlvbiIsIkRhdGUiLCJnZXRUaW1lIiwidG9VVENTdHJpbmciLCJldmVudCIsInRhcmdldCIsImNvbnRhaW5zIiwiZWxlbWVudElEIiwiaWQiLCJjb25zb2xlIiwibG9nIiwibW9kYWwiLCJpbWFnZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibW9kYWxJbWciLCJjYXB0aW9uVGV4dCIsInN0eWxlIiwiZGlzcGxheSIsInNyYyIsImlubmVySFRNTCIsImFsdCIsImNsb3NlQnV0dG9uIiwib25jbGljayIsImNvbnRhY3RGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIkVycm9yIiwianNvbiIsInNob3dUYWIiLCJ0YWIiLCJzdWNjZXNzTWVzc2FnZSIsImdldFByb2R1Y3RJbmZvIiwicHJvZHVjdElEIiwicHJvZHVjdEl0ZW0iLCJjb25jYXQiLCJpbWFnZSIsImdldEF0dHJpYnV0ZSIsInRpdGxlIiwidGV4dENvbnRlbnQiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwic2hvd01vZGFsIiwicHJvZHVjdEluZm8iLCJtb2RhbENvbnRlbnQiLCJtb2RhbENvbnRlbnRDb250YWluZXIiLCJ3aW5kb3ciLCJwcm9kdWN0SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJkYXRhc2V0Il0sInNvdXJjZVJvb3QiOiIifQ==