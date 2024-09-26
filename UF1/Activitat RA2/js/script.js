// Mis variables internas
/* let MINVALUE = Number(prompt("Ingresa un valor mínimo: "));
let MAXVALUE = Number(prompt("Ingresa un valor máximo: ")); */

let secretNumber;
let tryCount;
let userPoints;
let numInput;
let numsTried = [];
let countPlay = 0;
let totalPoints;

// Variables de objetos
let numInputObject = document.getElementById("numInput");
let tryBttnObject = document.getElementById("tryBttn");
let statusLblObject = document.getElementById("statusLbl");
let userTriesObject = document.getElementById("playsCount");
let userTotalPointsObject = document.getElementById("totalPoints");
let numsTriedObject = document.getElementById("numsTriedLbl");
let minValueObject = document.getElementById("minValue");
let maxValueObject = document.getElementById("maxValue");
let secretNumberLbl = document.getElementById("secretNumberLbl");

function validateNumbersAndCalculatePoints(numInput, secretNumber, userPoints, tryCount, userTotalPointsObject) {
    if (numInput > secretNumber) { statusLblObject.innerHTML = "El número és muy grande"; }
    if (numInput < secretNumber) { statusLblObject.innerHTML = "El número és muy pequeño"; }
    if (numInput === secretNumber) {
        statusLblObject.innerHTML = "Enhorabuena! Has acertado el número!";
        document.body.style.backgroundColor = 'green';
        userPoints = tryCount;
        secretNumberLbl.innerHTML = secretNumber;

        if (userPoints > userTotalPointsObject) {
            userTotalPointsObject.innerHTML = userTotalPointsObject;
        }
        else {
            userTotalPointsObject.innerHTML = userPoints;
        }

        numInputObject.disabled = true;
        tryBttnObject.disabled = true;
    }
}

function tryNumber() {
    if (Number(numInputObject.value) < MINVALUE || Number(numInputObject.value) > MAXVALUE || Number(numInputObject.value) == "") {
        alert("Por favor, ingresa un número entre: " + MINVALUE + " y " + MAXVALUE);
        return;
    }
    else {
        numInput = Number(numInputObject.value);
        console.log("userInput: ", numInput);
        numsTried.push(numInput);
        numsTriedObject.innerHTML = numsTried;
        tryCount--;
        userTriesObject.innerHTML = tryCount;

        validateNumbersAndCalculatePoints(numInput, secretNumber, userPoints, tryCount, userTotalPointsObject)
    }

    if (tryCount === 0) {
        document.body.style.backgroundColor = 'red';
        statusLblObject.innerHTML = "Has perdido! Reinicia el juego";
        numInputObject.disabled = true;
        tryBttnObject.disabled = true;
        statusLblObject.innerHTML = "";
        return;
    }
}

function generateSecretNumber() {
    document.body.style.backgroundColor = 'white';

    secretNumberLbl.innerHTML = "?";

    numsTried = [];
    numsTriedObject.innerHTML = numsTried;

    MINVALUE = Number(prompt("Ingresa un valor mínimo: "));
    MAXVALUE = Number(prompt("Ingresa un valor máximo: "));


    // Compruebo que los valores sean validos y no esten vacios
    if (isNaN(MINVALUE) || isNaN(MAXVALUE) || MINVALUE >= MAXVALUE || MINVALUE < 0) {
        alert("Por favor, ingresa valores válidos y asegúrate de que el mínimo sea menor que el máximo.");
    } else {

        console.log("Rango seleccionado: ", MINVALUE, "a", MAXVALUE);

        tryCount = MAXVALUE - MINVALUE;

        userTriesObject.innerHTML = tryCount;

        minValueObject.innerHTML = MINVALUE;
        maxValueObject.innerHTML = MAXVALUE;
        numInputObject.disabled = false;
        tryBttnObject.disabled = false;
        secretNumber = Math.floor(Math.random() * (MAXVALUE - MINVALUE + 1)) + MINVALUE;
        statusLblObject.innerHTML = "";
        console.log("nuevo numero: ", secretNumber);
    }
}

generateSecretNumber();