//Objet base qui sera le prototype des autres objets films
var Film = {
  initFilm: function (nom, dateSortie, real) {
  this.nom = nom;
  this.dateSortie = dateSortie;
  this.real = real;
},
decrire: function () {
  var description = this.nom + " (" + this.dateSortie + ", " + this.real + ")";
  return description;
}
};

//creation des 3 objets films dont le proto sera Film
var film1 = Object.create(Film);
film1.initFilm("Le loup de Wall Street", 2013, "Scorcese");

var film2 = Object.create(Film);
film2.initFilm("Vice-versa", 2015, "Pete Docter");

var film3 = Object.create(Film);
film3.initFilm("Babysitting", 2013, "Philippe Lacheau");

//On va maintenant créer un tableau avec ces 3 objets
var films = [film1, film2, film3];
films.forEach(function (element) {
  console.log(element.decrire());
});
