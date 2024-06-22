


let numeroSecreto = 5;
let numeroUsuario=0;
let intentos = 1
let palabraveces = 'vez'

while(numeroSecreto!=numeroUsuario){

    numeroUsuario = prompt('me indicas un numero del 1 al 10 por favor:');

    if(numeroSecreto == numeroUsuario){
    alert(`Felicidades!!! Acertaste el numero es: ${numeroSecreto} lo lograteste en ${intentos} ${palabraveces}`);

    }else{ 

        alert(`!!Es incorrecto no acertaste`)

        if(numeroSecreto > numeroUsuario){

            alert('el numeroe es mayor ');
        }else{

            alert('el numero es menor');
        }

        intentos = intentos + 1
        palabraveces = 'veces'

    }

}
