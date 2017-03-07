var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle
var cercle = {
rayon: r,

//On crée ensuite les méhodes périmetre ae aires:
//perimetre
perimetre: function () {
  return this.rayon * Math.PI * 2;
},
//aire
aire: function () {
  return this.rayon * this.rayon * Math.PI;
}

};


console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
