/* ===== CONVERSOR DE TEMPERATURA =====*/
function converteC() {
	let c = document.getElementById("campoTempC").value;
	
	let fahrenheit = (c*(9/5))+32;

	let resC = window.document.getElementById("resultC")
	resC.innerHTML = fahrenheit.toFixed(2) + " ºF"; 
}

function converteF() {
	let f = document.getElementById("campoTempF").value;
	
	let celsius = (f-32)*(5/9);

	let resF = window.document.getElementById("resultF")
	resF.innerHTML = celsius.toFixed(2) + " ºC"; 
}

/*======================================================*/
/* ===== CÁLCULO DE CIRCUNFERÊNCIA E ÁREA DE CIRCULO =====*/
function circunf() {
	let r = document.getElementById("campoRaCirc").value;
	
	let circunf = (2*3.14)*r;

	let resp = window.document.getElementById("resultCircunf")
	resp.innerHTML = circunf.toFixed(2) + " de Circunferência"; 
}

function area() {
	let r = document.getElementById("campoArCirc").value;
	
	let area = 3.14*(r*r);

	let resp = window.document.getElementById("resultArea")
	resp.innerHTML = area.toFixed(2) + " de Área"; 
}

/*======================================================*/
/* ===== INVERTENDO UM VALOR NUMÉRICO =====*/
function inverter() {
	let v = document.getElementById("campoValor").value;
	
	let inv = 0;
	let n = 0;

	while(v>0) {
		n = v%10;
		inv = (inv*10)+n;
		v = v/10;
		v = Math.floor(v);
	}

	let resp = window.document.getElementById("inversoValor")
	resp.innerHTML = "O seu inverso é " + inv; 
}

/*======================================================*/
/* ===== VERIFICANDO SE É PALÍNDROMO =====*/
function palindromo() {
	let txt = document.getElementById("campoTxt").value;
	let i = 0;
    let palindromo = "";
	let respPa;

	txt = txt.toLowerCase();

	for(i=txt.length-1; i>=0; i--){
		palindromo = palindromo + txt[i];
	}

	if(palindromo == txt){
		respPa = "É um palindromo. O seu inverso é:  '" + palindromo + "'";
	}else{
		respPa = "Não é um palindromo. O seu inverso é:  '" + palindromo + "'";
	}
	
	let resp = window.document.getElementById("respPalin")
	resp.innerHTML = respPa; 
}

/*======================================================*/
/* ===== CÁLCULO DE SOMA =====*/
	function soma(){
		let v1 = document.getElementById("valor1").value;
		let v2 = document.getElementById("valor2").value;
  
		myCalculadora(v1, v2, myResposta);
  	}

  	function myCalculadora(num1, num2, myCallback) {
		let sum = parseInt(num1) + parseInt(num2);
		myCallback("Resposta: " + sum);
  	}

  	function myResposta(something) {
		document.getElementById("respSoma").innerHTML = something;
  	}

  /*======================================================*/
  /* ===== CÁLCULO DE SOMA E VERIFICA SE É PAR =====*/

  	var sump = 0;

	function somaPar(){
		let vp1 = document.getElementById("valorP1").value;
		let vp2 = document.getElementById("valorP2").value;
  
		myCalcSoma(vp1, vp2);
	}

  	function myCalcSoma(vp1, vp2) {
		sump = parseInt(vp1) + parseInt(vp2);
			
			if((sump%2)==0){
				callbackSucesso();
				myRespSoma(sump);
			}else{
				callBackError();
			}
  	}

	function callbackSucesso(){
		console.log("Resultado da soma é par. " + sump)
	}

	function callBackError(){
		console.log("Resultado da soma é ímpar. " + sump )
	}

	function myRespSoma(resultP) {
		document.getElementById("respSomaPar").innerHTML = resultP;
	}

	/* ===== CEP (BUSCANDO PELO SITE DO VIACEP)=====  */
const btnBuscCep = document.getElementById('btnBuscCep');

btnBuscCep.addEventListener('click', function() {
  buscarCepForm(document.getElementById('inputCEP').value);
})

function buscarCepForm(inputCEP) {
      fetch(`https://viacep.com.br/ws/${inputCEP}/json/`)
      .then( response => response.json())
      .then( resp => {
          	document.getElementById('inputAddress').value = resp.logradouro;
            document.getElementById('inputBairro').value = resp.bairro;
            document.getElementById('inputCity').value = resp.localidade;
            document.getElementById('inputEstado').value = resp.uf;
	  })
  .catch(error => {
    document.getElementById('error').appendChild(document.createTextNode("Algum erro aconteceu. Verifique o CEP."))
  })
}
/* ===== CEP =====  */


