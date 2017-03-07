/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

// C'est à partir de là que j'ai bossé. Ici Félix
var nbUser = "";
var attempts = 1; //variable servira à limiter le nombre d'essais
while ((nbUser !== solution) && (attempts < 7)) {
    nbUser = Number(prompt("Entre ton chiffre ici: "));
    if (nbUser > solution) {
        console.log(nbUser + " est trop grand");
    } else {
        console.log(nbUser + " est trop petit");
    }
      attempts += 1; // des qu'un tour de boucle est fait, on compte une attempts en plus, jusqu'à 6.
}
if (attempts === 7) {
  console.log("Perdu.. tu as échoué 6 fois. La solution était : " + solution);
}
else {
console.log("Bravo à toi, " + solution + " était le bon nombre.");}
