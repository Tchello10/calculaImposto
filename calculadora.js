console.log("Funcionou o JS");

// document.querySelector("#testOutput").innerHTML = "R$0,00";

document.addEventListener("keyup", (event) => {
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

  if (event.key == "Enter") {
    console.log(event);
    console.log(lucro);

    if (lucro < 0) {
      lucro = lucro * -1;

      document.querySelector("#avisaLucroPreju").innerHTML =
        "Infelizmente voce está num prejuízo de: R$" + lucro;

      document.querySelector("#avisaImposto").innerHTML = "";
    } else if (lucro > 0) {
      if (lucro >= 50) {
        document.querySelector("#avisaLucroPreju").innerHTML =
          "Parabéns, voce teve um lucro de: R$" + lucro;

        document.querySelector("#avisaImposto").innerHTML =
          "Porém deve pagar: R$" +
          impostoDevido +
          " e o seu lucro real é de: R$" +
          lucroReal;
      } else {
        document.querySelector("#avisaLucroPreju").innerHTML =
          "Parabéns, voce teve um lucro de: R$" + lucro;

        document.querySelector("#avisaImposto").innerHTML =
          "E está livre de impostos";
      }
    }
  } else {
  }
});
