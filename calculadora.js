console.log("Funcionou o JS");

let inputValor = document.getElementById("valorCota");
let inputQtd = document.getElementById("qtdCota");
let resultado = document.getElementById("testOutput");

let timeout = null;

if (inputQtd != null || inputValor != null) {
  inputQtd.addEventListener("keyup", function (e) {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      console.log("Input Value: ", valorCota.value * qtdCota.value);
    }, 1000);
  });
  inputValor.addEventListener("keyup", function (e) {
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      resultado.innerHTML("Input Value: ", valorCota.value * qtdCota.value);
    }, 1000);
  });
}
