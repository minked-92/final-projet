

// Écouteur d'événement pour les clics sur le document
document.addEventListener('click', function(event) {
  // Vérifie si l'élément cliqué a la classe "small-image-border"
  if (event.target.classList.contains('small-image-border')) {
    // Récupère l'ID de l'élément cliqué
    var elementID = event.target.id;
    // Affiche l'ID dans la console (à des fins de débogage)
    console.log("ID de l'élément cliqué : " + elementID);

    // Récupère l'élément modal par son ID
    const modal = document.getElementById('myModal');
    // Récupère tous les éléments avec les classes "image-1" et "responsive"
    const images = document.getElementsByClassName('image-1 responsive');
    // Récupère l'élément de l'image à afficher dans la modal
    const modalImg = document.getElementById('img01');
    // Récupère l'élément de légende de l'image
    const captionText = document.getElementById('caption');
  
    // Affiche la modal en changeant son style pour "block"
    modal.style.display = 'block';
    // Met à jour la source de l'image modal avec celle de l'élément cliqué
    modalImg.src = images[elementID].src;
    // Met à jour le texte de légende avec le texte alternatif de l'image
    captionText.innerHTML = images[elementID].alt;

    // Ajoute un gestionnaire d'événement au bouton de fermeture de la modal
    const closeButton = document.getElementsByClassName('close')[0];
    // Lorsque le bouton de fermeture est cliqué, cache la modal
    closeButton.onclick = function() {
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

