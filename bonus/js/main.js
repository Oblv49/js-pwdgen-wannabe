//imput nome cognome colore preferito e due numeri tra 1 e 100ù
//Nascondi il form password 
document.getElementById("containerPassword").style.display = "none";

document.getElementById("generationPassword").addEventListener("click", function () {



    // Recupera i valori inseriti dall'utente
    let userName = document.getElementById("userName").value;
    let userSurname = document.getElementById("userSurname").value;
    let preferiteColor = document.getElementById("preferiteColor").value;
    let numberOne = document.getElementById("numerOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    // Salva i dati nelle variabili let
    let usName = userName;
    let usSurname = userSurname;
    let usPreferiteColor = preferiteColor;
    let usFirstNumber = numberOne;
    let usSecondNumber = numberTwo;

    // Esegui altre operazioni con i dati
    let divisionNumber = usFirstNumber / usSecondNumber;
    let insicurePassword = usName + usSurname + usPreferiteColor + divisionNumber;

    //stampa console password
    console.log(insicurePassword);

    // Nascondi il form
    document.getElementById("userForm").style.display = "none";


    //ricomparsa container password 
    document.getElementById("containerPassword").style.display = "block";
    document.getElementById("insicurePassword").innerHTML = insicurePassword;

});

