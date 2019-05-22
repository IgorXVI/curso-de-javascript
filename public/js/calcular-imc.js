var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente.length; i++) {

    var peso = paciente[i].querySelector(".info-peso").textContent;
    var altura = paciente[i].querySelector(".info-altura").textContent;

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    var imc = calcularImc(peso, altura);
    if (!alturaEhValida && !pesoEhValido) {
        imc = "alutra e peso inválidos";
    } else if (!pesoEhValido) {
        imc = "peso inválido";
    } else if (!alturaEhValida) {
        imc = "alutra inválida";
    }

    var isnum = /^\D+$/.test(imc);
    if (isnum) {
        paciente[i].classList.add("paciente-invalido");
    }

    var documentImc = paciente[i].querySelector(".info-imc");
    documentImc.textContent = imc;

}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso){

    if (peso >= 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {

    if (altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}