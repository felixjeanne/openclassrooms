var heure = Number(prompt("Rentre l'heure: "));
var minute = Number(prompt("Rentre les minutes: "));
var seconde = Number(prompt("Rentre la seconde: "));
if ((seconde === 59) && (minute !== 59) && (heure !== 23)) {
    console.log(heure + "h" + (minute += 1) + "m" + "00" + "s");
} else if ((seconde === 59) && (minute === 59) && (heure !== 23)) {
        console.log((heure += 1) + "h" + "00" + "m" + "00" + "s");
    } else if ((seconde === 59) && (minute === 59) && (heure === 23)) {
            console.log("00" + "h" + "00" + "m" + "00" + "s");
        } else {
            console.log(heure + "h" + minute + "m" + (seconde += 1) + "s");
        }
