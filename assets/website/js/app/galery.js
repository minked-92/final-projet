

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('small-image-border')) {
      var elementID = event.target.id;
      console.log("ID de l'élément cliqué : " + elementID);

      const modal = document.getElementById('myModal');
          const images = document.getElementsByClassName('image-1 responsive');
          const modalImg = document.getElementById('img01');
          const captionText = document.getElementById('caption');
        
          modal.style.display = 'block';
          modalImg.src = images[elementID].src;
          captionText.innerHTML = images[elementID].alt;

          const closeButton = document.getElementsByClassName('close')[0];
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

