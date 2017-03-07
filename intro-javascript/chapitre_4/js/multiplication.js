var nbrBase = 0;
while ((nbrBase < 2) || (nbrBase > 9)) {
    nbrBase = Number(prompt("Donne moi un nombre entre 2 et 9 : "))
}
console.log("Voila le nombre que je veux multiplier : " + nbrBase);
for (var i = 0; i <= 10; i++) {
    console.log(nbrBase + " x " + i + " = " + (nbrBase * i));
}
