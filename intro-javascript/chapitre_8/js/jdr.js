var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    decrire: function() {
        var description = perso.nom + " a " + perso.sante + " points de vie et " + perso.force + " en force.";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());
