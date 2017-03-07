//création de l'objet Film, prototype de 3 autres objets film1, film2, film3
var Film = {
  initFilm: function (nom, dateSortie) {
    this.nom = nom;
    this.dateSortie = dateSortie;
  },
  decrire: function () {
    var description = "Le film " + this.nom + " est sorti en " + this.dateSortie;
    return description;
  }
};

var film1 = Object.create(Film);
film1.initFilm ("Les Bronzés", 1978);


var film2 = Object.create(Film);
film2.initFilm ("Ratatouille", 2004);

var film3 = Object.create(Film);
film3.initFilm ("The Bourne Legacy", 2016);

//creation du tableau à partir des 3 objets.
var films = [film1, film2, film3];
//affichage de tous les films du tableau
films.forEach(function (film) {
  console.log(film.decrire());
});
