//objet compte
var compte = {
titulaire: "Alex",
solde: 0,
//création des methodes
decrire: function () {
  return "Titulaire: " + this.titulaire + ", solde : ";
},

crediter: function () {
  var montantCredite = Number(prompt("Credite le compte du mec"));
  this.solde = this.solde + montantCredite;
  return this.solde;
},

debiter: function () {
  var montantCredite = Number(prompt("Debite le compte du mec"));
  this.solde = this.solde - montantCredite;
  return this.solde;
},

};
//fin de la méthode, début du programme
console.log("au départ,  " + compte.decrire() + compte.solde + " €");
console.log(compte.decrire() + compte.crediter() + " €");
console.log(compte.decrire() + compte.debiter() + " €");
