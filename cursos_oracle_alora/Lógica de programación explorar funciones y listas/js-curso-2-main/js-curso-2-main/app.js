let titulo = document.querySelector('h1');


titulo.innerHTML='Game Over';


function consoleClick(){

    console.log('El botón fue clicado');
}

function promptClick(){

prompt('nombra una ciudad de Brasil');
}

function alertClick(){

    alert('Yo amo JS');
}

function suma(){

let numero1 = parseInt(prompt('ingresa el primer numero'));
let numero2 = parseInt(prompt('ingresa el segundo numero'));

alert( `la suma de los numeros es: ${(numero1 + numero2)}`)
}
