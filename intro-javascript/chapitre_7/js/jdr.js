var perso = {
    nom: "Drago",
    sante: 150,
    force: 25,
    xp: 0,

    //Méthode (propriété dont la valeur est une fction),  qui renvoie la description du personnage.
    bilanPerso: function() {
        var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force. Sans oublier ses " + this.xp + " points en experience.";
        return description;
    }

};

//Drago est blessé par une fleche:
perso.sante = perso.sante - 20;

console.log(perso.bilanPerso());

//Drago mange un mamouth et gagne en force:
perso.force = perso.force + 30;

console.log(perso.bilanPerso());



//On lui ajoute 30 pts:
perso.xp = perso.xp + 30;

//On affiche son nouveau total.
console.log(perso.bilanPerso());
