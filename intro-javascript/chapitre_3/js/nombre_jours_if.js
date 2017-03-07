var moisDeLannee = Number(prompt("Donne le numéro du mois de l'année, et je te donne le nbre de jour: "))
if ((moisDeLannee === 1) || (moisDeLannee === 3) || (moisDeLannee === 5)){
  console.log("31 mon gars");
}
else if (moisDeLannee === 2) {
  console.log("28");
}
else if (moisDeLannee === 4) {
  console.log("30 ma couille");
}
else {
  console.log("c'est pas un mois bordel");
}
