console.log("Funcionou o JS");

var resultado = 0;
var totalCotas = 0;
var qtdCotas = 0;

resultado = document.querySelector("#testOutput").value;
totalCotas = document.querySelector("#valorCota").value;
qtdCotas = document.querySelector("#qtdCota").value;

document.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    console.log(event);

    var media = totalCotas / qtdCotas;

    console.log(media);
    console.log(totalCotas);
    console.log(qtdCotas);

    document.querySelector("#testOutput").innerHTML = media;
  } else {
  }
});
