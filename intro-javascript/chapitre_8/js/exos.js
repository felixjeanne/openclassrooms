// TODO : ajoutez ici la définition des objets nécessaires

//creation variable CompteBancaire
var CompteBancaire = {
  initCB: function (nom, solde) {
    CompteBancaire.nom = nom;
    CompteBancaire.solde = solde;
  },
  decrire: function () {
    var description = "Titulaire : " + CompteBancaire.nom + ", solde : " + CompteBancaire.solde;
    return description;
  },
  debiter: function (montant) {
    CompteBancaire.solde = CompteBancaire.solde - montant;
  }
};
//Creation variable CompteEpargne
var CompteEpargne = {
  initCE: function (nom, solde, interet) {
    CompteEpargne.nom = nom;
    CompteEpargne.solde = solde;
    CompteEpargne.interet = interet;
  },
  decrire: function () {
    var description = "Titulaire : " + CompteEpargne.nom + ", solde : " + CompteEpargne.solde;
    return description;
  },
  crediter: function (montant) {
    CompteEpargne.solde = CompteEpargne.solde + montant;
  },
  ajouterInterets: function () {
    var interets = 0.05 * CompteEpargne.solde;
    CompteEpargne.solde = CompteEpargne.solde + interets;
  }
};


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
