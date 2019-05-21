function calcularImc() {

    var paciente = document.querySelectorAll(".paciente");

    for (var i = 0; i < paciente.length; i++) {

        var peso = paciente[i].querySelector(".info-peso").textContent;
        var altura = paciente[i].querySelector(".info-altura").textContent;

        var imc = peso / (altura * altura);

        var pesoEhValido = peso > 0 && peso < 900;
        var alturaEhValida = altura >= 0 && altura <= 3.00;

        imc = imc.toFixed(2);

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

}

calcularImc();