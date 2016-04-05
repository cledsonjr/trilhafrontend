var trsPacientes = document.getElementsByClassName("paciente");

percorrerArray(trsPacientes, function(paciente){
		/*	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0];
			var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0];
			var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];
			*/
			console.info(paciente.nome);
});
