//definition d'un objet compte bancaire
var compte = {
    titulaire: "Alex",
    solde: 0,

    //3 méthodes (propriétés dont la valeur est une fonction)
    decrire: function() {
        var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " €";
        return description;
    },

    crediter: function(montant) {
        this.solde = this.solde + montant;
    },
    //rajouter le debit après
    debiter: function(montant) {
      this.solde = this.solde - montant;
    }
};

console.log(compte.decrire());
montant = Number(prompt("Entre un montant pour crediter le collegue"));
compte.crediter(montant);
console.log(compte.decrire());
montant = Number(prompt("Entre un montant pr débiter le collègue"));
compte.debiter(montant);
console.log(compte.decrire());
