let botaoAtualizar = document.getElementById("atualizar-saldo");
let botaoLimpar = document.getElementById("limpar-saldo");
let soma = document.getElementById("soma");
let campoSaldo = document.getElementById("campo-saldo");
let Saldo = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        Saldo += soma;
        campoSaldo.innerHTML = Saldo.toString();
        limparCampoSoma();
    }
}
function limparCampoSoma() {
    soma.value = "";
}
function limparSaldo() {
    if (campoSaldo) {
        Saldo = 0;
        campoSaldo.innerHTML = Saldo.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener("click", function () {
        somarAoSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener("click", () => {
    limparSaldo();
});
export {};
