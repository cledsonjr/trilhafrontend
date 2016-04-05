var peso = 115;
var altura = 1.88;

if(altura > 0){
	var imc = peso / (altura * altura);
	console.info(imc);
}else{
	console.info("Altura não permitida");
}
