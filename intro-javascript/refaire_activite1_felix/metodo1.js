console.log("Bienvenue dan mon jeu de devinette");
var solution = Math.floor(Math.random() * 100) + 1; // variable qui donne un num aléatoire entre 0 et 100

// metodo Break
var tentative = 1;

//on commence la boucle while, qui s'arrete au bout de 6 tours
while (tentative < 10) {
  //on crée la variable nbUser: c'est le chiffre que va rentrer le user
  var nbUser = Number(prompt("Entre ton nombre ici mon gars"));

  //si nombre trop grand
  if ((nbUser > solution) && (tentative < 10)) {
    console.log(nbUser + " est trop grand");
  }
  //si nombre trop petit
  else if ((nbUser < solution) && (tentative < 10)) {
    console.log(nbUser + " est trop petit");
  }
  //Si nombre est identique, on sort de la boucle
  else if (nbUser === solution) {
    console.log("Bravo champ, le bon nombre est bien : " + solution +". tu l'as trouvé en " + tentative + " coups");
      break;
  }

  //on compte une tentative en plus à chaque tour
tentative++;

}

//On est sorti de la boucle pour 2 raisons, soit echec, soit réussite
//réussite:
if (nbUser === solution) {
  console.log("");
}
else {
  console.log("T'as fais plus de 10 essais gros naze !");
}
