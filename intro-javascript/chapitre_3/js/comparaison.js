var nbre1 = Number(prompt("Donne le nombre a : "));
var nbre2 = Number(prompt("le nombre b : "));
switch (nbre1) {
    case (nbre1 > nbre2):
        console.log("le nombre a est plus grand que le b");
        break;
    case (nbre1 === nbre2):
        console.log("les deux sont égaux");

        break;
    default:
        console.log("B est plus grand mon gars");

}
