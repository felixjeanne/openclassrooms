
// TODO : ajoutez ici la définition des objets nécessaires
//On fait notre objet compte bancaire de base
var CompteBancaire = {
  initCB: function (nom, solde) {
    this.nom = nom;
    this.solde = solde;
  },
  debiter: function (montant) {
    this.solde = this.solde - montant;
  },
  crediter: function (montant) {
    this.solde = this.solde + montant;
  },
  decrire: function () {
    var description = "Titulaire : " + this.nom + ", solde : " + this.solde + "€.";
    return description;
  }
};

//On fait maitenant notre objet Compte Epargne, dont le proototype est compte bancaire
var CompteEpargne = Object.create(CompteBancaire);
//on l'initialise:
CompteEpargne.initCE = function (nom, solde, TauxInteret){
  this.initCB (nom, solde);
  this.TauxInteret = TauxInteret;
};
//on calcule et ajoute les interets au solde du compte
CompteEpargne.ajouterInterets = function () {
  var interets = this.solde * this.TauxInteret;
  this.solde += interets;
};




// deja dans le cours
var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
