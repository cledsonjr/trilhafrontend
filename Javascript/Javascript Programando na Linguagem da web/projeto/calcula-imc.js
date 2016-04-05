/*var tdPeso = document.getElementById("peso-2");
var tdAltura = document.getElementById("altura-2");

var paciente = {};
paciente.peso = tdPeso.textContent;
paciente.altura = tdAltura.textContent;*/

var trsPacientes = document.getElementsByClassName("paciente");

for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length -1; posicaoAtual++){
	var pacienteTr = trsPacientes[posicaoAtual];
	
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	
	var paciente = {};
	paciente.nome = tdNome.textContent;
	paciente.peso = tdPeso.textContent;
	paciente.altura = tdAltura.textContent;
	
	if(paciente.altura > 0){
		var imc = paciente.peso / (paciente.altura * paciente.altura);
		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc;
		console.info(imc);
	}else{
		console.info("Altura não permitida");
	}
}

