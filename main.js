let randomNum = Math.round(Math.random()*10);
let numElegido = parseInt(prompt("Adivina el numero que estoy pensando"));


while (numElegido !== randomNum){
        
    numElegido = parseInt(prompt("Volve a intentarlo"));
    
}

alert ("Muy bien! Adivinaste!");
