console.log("Bienvenue dans mon jeu de devinette 2");
var solution = Math.floor(Math.random() * 100) + 1; // variable qui donne un num aléatoire entre 0 et 100

// Metodo deja utilisée
var tentative = 1;
var nbUser = "";
//La boucle tourne tant que le nombre donné par le user est différente de la soluce, et qu'il y a eu au plus 6 tours.
//Si une de ces 2 conditions n'est pas respectée, on sort de la boucle
while ((nbUser !== solution) && (tentative < 7)) {
    nbUser = Number(prompt("Rentre ton chiffre ici chef : "));

    //On a plusieurs cas dans cette boucle
    if (nbUser < solution) {
        console.log(nbUser + " est trop petit");
    } else if (nbUser > solution) {
        console.log(nbUser + " est trop grand");
    }

    //comptons le nbre de tentative à chaque tour de boucle
    tentative += 1;
}

//2 solutions pour être sorti de la boucle:

// Soit le mec a trouvé
if (nbUser === solution) {
    console.log("Bravo chef, t'as killé le game. Le nombre est " + solution);
}

//Soit le mec a fait plus de 6 tours
else {
    console.log("Plus de 6 essais, dommage mec");
}
