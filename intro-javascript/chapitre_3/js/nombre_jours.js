var moisDeLannee = prompt("Donne le numéro du mois de l'année, et je te donne le nbre de jour: ")
switch (moisDeLannee) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
        console.log("Ca fait 31 jours mon pote");
        break;
    case ("2"):
        console.log("28 en fevrier");
        break;
    case "4":
    case "6":
    case "9":
    case "11":
        console.log("30 mecton");
        break;
    default:
        console.log("C'est pas un mois ça");

}
