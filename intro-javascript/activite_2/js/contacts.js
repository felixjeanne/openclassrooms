/*
Activité : gestion des contacts
*/


//Objet Contact qui servira de prototype aux autres objets
var Contact = {
    init: function(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    },
    decrire: function() {
        var description = "Nom : " + this.nom + "  Prénom : " + this.prenom;
        return description;
    }
};

//création de nos deux contacts de base
var contact1 = Object.create(Contact);
contact1.init("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.init("Nelsonne", "Mélodie");

//On les mets dans un tableau
var contacts = [contact1, contact2];
//ajouter quelqu'un au tableau





console.log("Bienvenue dans le gestionnaire de contact");
//Début de la boucle while, qui tourne tant que le user n'a pas tapé 0
while (choixUser !== 0) {
    console.log(" 1: lister les contacts \n 2: Ajouter un contact \n 0: Quitter");
    var choixUser = Number(prompt("Choisis une option"));

    //décomposition en plusieurs sous cas avec if

    //Si le user tape 1, on affiche les elements du tableau (objets contact) grâce à forEach
    if (choixUser === 1) {
        contacts.forEach(function(element) {
            console.log(element.decrire())
        });

        //Si le user tape 2, on va créer un nouveau contact
    } else if (choixUser === 2) {
        //on crée un objet contact 3 et on lui file Contact comme proto
        var contact3 = Object.create(Contact);
        //On associe ce que le user tape à la propriété nom et prénom (successivement)
        contact3.nom = prompt("Entre le nom du nouveau contact ici");
        contact3.prenom = prompt("Entre le prenom du nouveau contact ici");
        //On pousse l'objet contact3 dans le tableau contacts
        contacts.push(contact3);
        //On affiche un message de succès
        console.log("Le nouveau contact a bien été rentré");

        //Si le user tape autre chose que 0, 1, ou 2 il respecte pas les consignes.
    } else if (choixUser !== 0) {
        console.log("Ecris un chiffre entre 0 et 2 bouffon");
    }

};
