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
  const productItem = document.querySelector(`[data-id="${productID}"]`);
  const image = productItem.getAttribute('data-image');
  const title = productItem.querySelector('.product-title').textContent;
  const price = productItem.querySelector('.produc-list-info-price').textContent;

  return {
    title: title,
    image: image,
    description: "Description du produit",
    price: price
  };
}

function showModal(productID) {
  const productInfo = getProductInfo(productID);

  const modalContent = `
    <div class="product-details">
      <img class="picto-modal-itmes" src="${productInfo.image}" alt="${productInfo.title}">
      <div class="product-info">
        <h2>${productInfo.title}</h2>
        <p>${productInfo.description}</p>
        <span>Prix: ${productInfo.price}</span>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onclick="nextStep()" class="next-step-btn">Continuer</button>
        <span class="close">&times;</span>
      </div>
    </div>
  `;

  const modal = document.querySelector('.modal');
  const modalContentContainer = document.querySelector('.modal-content');
  modalContentContainer.innerHTML = modalContent;
  modal.style.display = 'block';

  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

const productItems = document.querySelectorAll('.product-item');
productItems.forEach(item => {
  const productID = item.dataset.id;
  item.addEventListener('click', () => {
    showModal(productID);
  });
});
