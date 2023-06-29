//imput nome cognome colore preferito e due numeri tra 1 e 100
let nameUser = prompt("Inserisci il tuo nome:");
let userSurname = prompt("Inserisci il tuo cognome:");
let preferiteColor = prompt("Inserisci il tuo colore preferito:");
let firstNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));
let secondNumber = parseInt(prompt("Inserisci un numero da 1 a 100"));

//eleborazione dati
let numberDiviosin = firstNumber / secondNumber;
let generatePassword = nameUser + userSurname + preferiteColor + numberDiviosin;

//stampa password nella console

console.log("la password insicura generata è:" + generatePassword);


//stampa nella page

document.getElementById("insicurePasswordGenerate").innerHTML = generatePassword;