console.log("Funcionou o JS");

document.querySelector("#testOutput").innerHTML = "R$0,00";

document.addEventListener("keyup", (event) => {
  var resultado = document.querySelector("#testOutput").value;
  var totalCotas = document.querySelector("#valorCota").value;
  var qtdCotas = document.querySelector("#qtdCota").value;

  if (event.key == "Enter") {
    console.log(event);

    var media = totalCotas / qtdCotas;

    console.log(media);
    console.log(totalCotas);
    console.log(qtdCotas);

    document.querySelector("#testOutput").innerHTML = "R$" + media;
  } else {
    document.querySelector("#testOutput").innerHTML = "0";
  }
});
