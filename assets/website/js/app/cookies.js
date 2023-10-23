// Vérifier si l'utilisateur a déjà donné son consentement pour les cookies
function aDonneConsentement() {
    return document.cookie.split(';').some(function(cookie) {
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
