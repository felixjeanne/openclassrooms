//le mot est il un palindrome??
function palindrome(mot) {
    var flag;
    for (var i = 0; i < mot.length; i++) {
        if ((mot[mot.length - i - 1]) !== (mot[i])) {
            flag = false;

        } else {
            flag = true;
        }
    }
    if (flag = true) {
        console.log(mot + " est un palindrome");
    } else {
        console.log(mot + " n'est pas un palindrome");
    }
}

//Programme mot.js
mot = prompt("Entrez votre mot ici : ");

//faisons appel à notre fonction
console.log(palindrome(mot));
