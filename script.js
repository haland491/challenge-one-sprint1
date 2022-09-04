//Para manipular el DOM aqui serian las clases de los texarea


const inputexto=document.querySelector(".input-texto");
const mensaje=document.querySelector(".mensaje");

function btnEncriptar(){
	console.log(inputexto.value)
	const textencriptado=encriptar(inputexto.value)
	mensaje.value=textencriptado;
	mensaje.style.backgroundImage = "none";
	inputexto.value="";
	console.log(textencriptado)
	
}
function btnCopiar(){
	mensaje.select();
	navigator.clipboard.writeText(mensaje.value);
	alert("Copiado el texto:" + mensaje.value);
	mensaje.value=" ";	

}
function btnDesencriptar(){
	console.log(inputexto.value)
	const textdesencrip=desencriptar(inputexto.value)
	mensaje.value=textdesencrip;
	inputexto.value="";
}


//`La letra "e" es convertida para "enter"`
//`La letra "i" es convertida para "imes"`
//`La letra "a" es convertida para "ai"`
//`La letra "o" es convertida para "ober"`
//`La letra "u" es convertida para "ufat"`

//**Requisitos:**
//- Debe funcionar solo con letras minúsculas
//- No deben ser utilizados letras con acentos ni caracteres especiales
//- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. 

//Por ejemplo:
//`"gato" => "gaitober"`
//`gaitober" => "gato"`


function encriptar(string) {
	let matriz=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
	string=string.toLowerCase();

	for (var i = 0;i<matriz.length;i++){
		if(string.includes(matriz[i][0])){
			string=string.replaceAll(matriz[i][0],matriz[i][1])
		}
	}
	return string

	} 
function desencriptar(string){
	let matriz=[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];

		for(let i=0;i<matriz.length;i++){
			if(string.includes(matriz[i][0])){
				string=string.replaceAll(matriz[i][0],matriz[i][1])
			}
		}
		return string

	}

	// body...


