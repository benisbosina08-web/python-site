function scrollToInscription() {
    document.getElementById("inscription").scrollIntoView({
        behavior: "smooth"
    });
}

function envoyerFormulaire() {
    let nom = document.getElementById("nom").value;
    let email = document.getElementById("email").value;

    document.getElementById("message").innerHTML =
        "Merci " + nom + " ! Votre inscription est envoyée ✅";

    return false; // empêche le rechargement
}