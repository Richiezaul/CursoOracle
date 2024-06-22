
let diaDelasemana = prompt('Que dia de la semana es');
let puntuacion;
let usuarioNumero;
let saldoDisponible = 1000;
let nombreDeUsuario;

if(diaDelasemana=='Sabado' || diaDelasemana =='Domingo'){

    alert('¡Buen fin de semana!');
}else{

    alert('¡Buena semana!');
}

usuarioNumero = prompt('ingresa un numero por favor');

if(usuarioNumero > 0){

    alert('El numero es positivo');

}else if(numeroUsuario < 0){


    alert('elnumero es negativo');

}else{

    alert('El numero es 0');
}


puntuacion = prompt('ingresa tu puntuacion por favor');


if(puntuacion >= 100){

    alert('¡Felicidades, has ganado!')
}else{

    alert('Intentalo nuevamente para ganar.')
}


alert(`El saldo de su cuenta es: ${saldoDisponible}`)

nombreDeUsuario = prompt('Hola cual es tu nombre');

alert(`Bienbenidos ${nombreDeUsuario} `);