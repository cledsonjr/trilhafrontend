var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var paciente = {};
paciente.peso = tdPeso.textContent;
paciente.altura = tdAltura.textContent;

if(paciente.altura > 0){
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	var tdImc = document.getElementById("imc-2");
	tdImc.textContent = imc;
	console.info(imc);
}else{
	console.info("Altura não permitida");
}
