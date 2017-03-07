var mousquetaires = ["Aramis", "Athos", "Portos"];
console.log("Voici les 3 mousquetaires");
for (var i = 0; i < 3; i++) {
  console.log(mousquetaires[i]);
}
mousquetaires.push("D'Artagnan");
console.log("A présent, ils sont 4");
mousquetaires.forEach( function (moski) {
  console.log(moski);
});
