for(var i = 0; i < 5; i++){
    var paciente = document.querySelector(`#paciente-${i}`);

    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var imc = peso / (altura * altura);
    var documentImc = paciente.querySelector(".info-imc");
    documentImc.textContent = imc.toFixed(2);

    console.log(`paciente ${i}: IMC = ${imc.toFixed(2)}`);
}