// Sélectionne l'élément HTML avec l'ID "burger" et le stocke dans la variable "menu"
let menu = document.getElementById("burger");

// Sélectionne le premier élément HTML avec la classe "navigation" et le stocke dans la variable "navigation"
let navigation = document.querySelector(".navigation");

// Ajoute un écouteur d'événements "click" à l'élément "menu"
menu.addEventListener('click', () => {
    // Lorsque l'élément "menu" est cliqué, cette fonction anonyme est exécutée.

    // Utilise la méthode "classList.toggle()" pour basculer la classe "onshow" sur l'élément "navigation"
    // Si la classe "onshow" est déjà présente, elle sera retirée, sinon elle sera ajoutée.
    navigation.classList.toggle("onshow");
})
