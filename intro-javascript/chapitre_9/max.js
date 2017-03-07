var valeurs = [2, 3, 7, 2, 9, 10];
var max = valeurs[0];
for (var i = 1; i < 6; i++) {
    if (max < valeurs[i]) {
        max = valeurs[i];
    }
    else {
        max = valeurs[0];
    };
};

console.log(max);
