var mot = "";
var mots = [];
while (mot !== "stop") {
  mot = prompt("Rentre un mot ici");
  mots.push(mot);
};
  mots.forEach(function (element) {
    console.log(element);
  });
