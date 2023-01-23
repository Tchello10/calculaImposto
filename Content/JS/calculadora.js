console.log("Funcionou o JS");

function calculadora() {
  var qtdCotas = document.querySelector("#qtdCota").value;
  var mediaCotas = document.querySelector("#mediaCota").value;
  var atualCota = document.querySelector("#valorAtual").value;

  var custoTotalCompra = qtdCotas * mediaCotas;
  var custoTotalVenda = qtdCotas * atualCota;

  var lucro = custoTotalVenda - custoTotalCompra;

  var impostoDevido = lucro * 0.2;
  var lucroReal = lucro - impostoDevido;

  impostoDevido = impostoDevido.toFixed(2);
  lucroReal = lucroReal.toFixed(2);
  lucro = lucro.toFixed(2);

  console.log(lucro);

  if (lucro < 0) {
    lucro = lucro * -1;

    document.querySelector("#avisaLucroPreju").innerHTML =
      "Infelizmente você está num prejuízo de: R$" + lucro;

    document.querySelector("#avisaImposto").innerHTML = "";
  } else {
    if (lucro >= 50) {
      document.querySelector("#avisaLucroPreju").innerHTML =
        "Parabéns, você teve um lucro de: R$" + lucro;

      document.querySelector("#avisaImposto").innerHTML =
        "Imposto devido: R$" + impostoDevido + " Lucro real: R$" + lucroReal;
    } else {
      document.querySelector("#avisaLucroPreju").innerHTML =
        "Parabéns, você teve um lucro de: R$" +
        lucro +
        " e está livre de impostos";
    }
  }
}

document.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    calculadora();
  }
});
