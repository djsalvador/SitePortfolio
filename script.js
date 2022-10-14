
function converteC() {
	let c = document.getElementById("campoTempC").value;
	
	let fahrenheit = (c*(9/5))+32;

	let resC = window.document.getElementById("resultC")
	resC.innerHTML = fahrenheit.toFixed(2) + "ºF"; 
}

function converteF() {
	let f = document.getElementById("campoTempF").value;
	
	let celsius = (f-32)*(5/9);

	let resF = window.document.getElementById("resultF")
	resF.innerHTML = celsius.toFixed(2) + "ºC"; 
}

/*======================================================*/

function circunf() {
	let r = document.getElementById("campoRaCirc").value;
	
	let circunf = (2*3.14)*r;

	let resp = window.document.getElementById("resultCircunf")
	resp.innerHTML = circunf.toFixed(2) + " de circunferência"; 
}

function area() {
	let r = document.getElementById("campoArCirc").value;
	
	let area = 3.14*(r*r);

	let resp = window.document.getElementById("resultArea")
	resp.innerHTML = area.toFixed(2) + " de área"; 
}

/*======================================================*/

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
	resp.innerHTML = inv; 
}

/*======================================================*/

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
