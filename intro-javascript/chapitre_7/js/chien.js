//modelisation d'un chien
// TODO : ajoutez ici la définition de l'objet chien
var chien = {
    nom: "Medor",
    race: "labrador",
    taille: 60,

    //on ajoute la propriété ici:
    aboyer: function() {
      var aboiement = "Grr!! Grr!!!";
      return aboiement
    }

};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());
