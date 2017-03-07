// TODO : écrire la fonction calculer()
function calculer(nb1, operateur, nb2) {
    var resultat;
    if (operateur === "+") {
        resultat = nb1 + nb2;
    } else if (operateur === "-") {
        resultat = nb1 - nb2;
    } else if (operateur === "*") {
        resultat = nb1 * nb2;
    } else if (operateur === "/") {
        resultat = nb1 / nb2;
    }
    else {
      resultat = "C'est pas une opération"
    }
    return resultat;
}

console.log(calculer(4, "+", 6)); // Doit afficher 10
console.log(calculer(4, "-", 6)); // Doit afficher -2
console.log(calculer(2, "*", 0)); // Doit afficher 0
console.log(calculer(12, "/", 0)); // Doit afficher Infinity
console.log(calculer(12, "%", 5)); // doit afficher c'est pas une opération
