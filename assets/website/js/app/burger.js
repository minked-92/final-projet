// Fonction pour basculer l'état du menu


    let menu = document.getElementById("burger");
    let navigation = document.querySelector(".navigation"); 
    menu.addEventListener('click',()=>{

        navigation.classList.toggle("onshow");
    
    })

  
  
 