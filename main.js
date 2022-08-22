let randomNum = Math.round(Math.random()*10);
let numElegido = parseInt(prompt("Adiviná el número que estoy pensando, tenés 3 intentos! Una pista? Está entre 0 y 10..."));
let i = 0;

while (numElegido !== randomNum && i<2){
    i ++;
    numElegido = parseInt(prompt("No es es el número correcto! Volvé a intentarlo"));
    
}

if (numElegido === randomNum) {
    alert ("Muy bien! Adivinaste!");
}else if (numElegido !== randomNum){
alert (`Se agotaron tus 3 intentos! :( El número era el ${randomNum}... Actualizá la página para volver a intentarlo.`);
}
alert ("Actualizá la página para volver a intentarlo.");
