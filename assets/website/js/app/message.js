console.log('ok');

    const contactForm = document.getElementById('form-message');
    
    // if (contactForm) 
       console.log(contactForm);
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Empêche la soumission par défaut du formulaire
            const formData = new FormData(contactForm);

            // Envoi des données à l'API côté serveur
            fetch('/message', {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.status === 500) {
                    throw new Error();
                }
                return response.json();
            })
            .then(() => {
                // Action après une soumission réussie
                //  (par exemple, appel à showTab())
                showTab();
            })
            .catch(() => null); // Gestion des erreurs, vous pouvez personnaliser cette partie

            // Si nécessaire, vous pouvez ajouter du code pour masquer le formulaire ici
        });
    

        function showTab(tab) {
            // Code pour basculer entre les formulaires va ici si nécessaire
          
            // Sélectionnez l'élément de message de succès
            const successMessage = document.getElementById('success-message');
          
            // Affichez le message de succès en le rendant visible (en supprimant "display: none;")
            successMessage.style.display = 'block';
          
            // Masquez le formulaire (si nécessaire)
            contactForm.style.display = 'none'; // Si contactForm est la variable qui représente le formulaire
          
          }
    

