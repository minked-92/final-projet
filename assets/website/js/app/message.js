
console.log('ok');

        // Récupérez les valeurs des champs du formulaire
        const nom = document.getElementById("nom");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        const send = document.getElementById("send");

       send.addEventListener('click', send)
       function send() {
        console.log(email.value);
       }
        


