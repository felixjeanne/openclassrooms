function perimetre(rayon) {
  return rayon * Math.PI * 2;
}
function aire(rayon) {
  return rayon * rayon * Math.PI;
}
rayon = Number(prompt("Entre le rayon ici mon gars"));
console.log("le perimetre est de " + perimetre(rayon) + " cm");
console.log("l'aire est de " + aire(rayon) + " cm2");
