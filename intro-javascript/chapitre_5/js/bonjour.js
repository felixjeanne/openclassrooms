// Renvoie un message de bienvenue
function direBonjour(prenom, nom) {
     return "Bonjour, " + prenom + " " + nom + " !";
    

}

// TODO : faire saisir le prénom et le nom de l'utilisateur
// TODO : appeler direBonjour() avec les bons arguments et afficher son résultat

prenom = prompt("Donne ton prénom");
nom = prompt("Donne moi ton nom");
console.log(direBonjour(prenom, nom));
