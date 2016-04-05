var trsPacientes = document.getElementsByClassName("paciente");

percorrerArray(trsPacientes, function(paciente){
/*	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
	
	var paciente = {};
	paciente.nome = tdNome.textContent;
	paciente.peso = tdPeso.textContent;
	paciente.altura = tdAltura.textContent;
	paciente.pegaImc = function(){
		if(this.altura > 0){
			var imc = this.peso / (this.altura * this.altura);//this obrigatório para acessar os dados do atributo que possui a função.
			console.info(imc);
			console.info("Anônima");
			return imc;
		}else{
			console.info("Altura não permitida");
		}
	};
*/
	var imc = paciente.pegaImc();//chmando função anonima
//	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
//	tdImc.textContent = imc;
	console.info(imc);
	
});

