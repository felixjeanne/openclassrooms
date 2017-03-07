var nbre = Number(prompt("Saisis un nombre entier: "));
for (var i = nbre; i <= nbre + 10; i += 1) {
    if (i % 2 === 0) {
        console.log(i + " est pair bien sûr");
    } else {
        console.log(i + " est impair ma couille");
    }
}
