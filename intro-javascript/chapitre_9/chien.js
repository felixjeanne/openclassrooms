var Chien = {
    // initialise le chien
    init: function (nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    },
    // Renvoie l'aboiement du chien
    aboyer: function () {
        var aboiement = "Whoua ! Whoua !";
        if (this.taille < 25) {
            aboiement = "Kaii ! Kaii !";
        } else if (this.taille > 60) {
            aboiement = "Grrr ! Grrr !";
        }
        return aboiement;
    },
    decrire: function () {
      var description = this.nom + " est un " + this.race + ". Il aboie: ";
      return description;
    }
};

//creation des 3 objets chiens du chenil, qui ont pour prototype notre Chien
var chien1 = Object.create(Chien);
chien1.init("Crockdur", "labrador", 70);
var chien2 = Object.create(Chien);
chien2.init("Pupuce", "bichon", 10);
var chien3 = Object.create(Chien);
chien3.init("Medor", "cocker", 30);

// ajout de ces objets dans un tableau
console.log("Dans mon chenil, il ya ");
var chiens = [chien1, chien2, chien3];
chiens.forEach( function (element) {
  console.log(element.decrire() + element.aboyer());
});
