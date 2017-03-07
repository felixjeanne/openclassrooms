//afficher un mot à l'envers

function inverser(mot) {
  var motInverse = "";
  for (var i = mot.length - 1; i >= 0; i--) {
  motInverse = motInverse + mot[i];
  }
  return motInverse;
}

//Programme mot.js
  mot = prompt("Entrez votre mot ici : ");

//faisons appel à notre fonction
console.log(inverser(mot));
