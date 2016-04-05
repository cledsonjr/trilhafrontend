function percorrerArray(trsPacientes, comportamento){
	for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length -1; posicaoAtual++){
		var pacienteTr = trsPacientes[posicaoAtual];
		var paciente = montaPaciente(pacienteTr);
		comportamento(paciente);
	}
}

function montaPaciente(pacienteTr){
    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; 
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; 
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var paciente = {
        nome : tdNome.textContent, 
        peso : tdPeso.textContent, 
        altura : tdAltura.textContent,
        pegaImc: function() {

            if(this.altura != 0){
                var imc = this.peso / (this.altura * this.altura);
                return imc;
            } else{

                console("Não posso dividir por zero!");
            }
        }
    }
    return paciente;
}