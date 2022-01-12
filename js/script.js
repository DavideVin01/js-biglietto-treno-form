/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno discount del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

1 - Chiedere all'utente il numero di chilometri da percorrere
2 - Chiedere l'età del passeggero.
3 - Calcolare prezzo totale del viaggio in base a:
    3.1 - Prezzo del biglietto definito in base ai km (0.21 € al km)
    3.2 - Sconto del 20% per i minorenni
    3.3 - Sconto del 40% per gli over 65
    4 - Inserire prezzo finale con massimo due decimali (centesimi)
    */

// #1 - #2
/*
let userKm = parseInt(prompt('Quanti chilometri devi percorrere?').trim());
let userAge = parseInt(prompt('Quanti anni hai?').trim());
 
console.log(`I chilometri da percorrere sono ${userKm}km`);
console.log(`L'utente ha ${userAge} anni`);
*/

const buttonSend = document.getElementById('send');
const buttonDelete = document.getElementById('delete');

const fullName = document.getElementById('full-name');
const userKm = document.getElementById('kms');
const userAgeRange = document.getElementById('age-range');
let ticketType = document.getElementById('ticket-type');
const ticketCarriage = document.getElementById('ticket-carriage');
const ticketCode = document.getElementById('ticket-code');
let ticketCost = document.getElementById('ticket-cost');

buttonSend.addEventListener('click', function () {
    const fullNameValue = fullName.value;
    console.log(fullNameValue);

    const userKmValue = userKm.value;
    console.log(`${userKmValue}km`);

    const userAgeRangeValue = userAgeRange.value;
    console.log(userAgeRangeValue);

    let ticketName = document.getElementById('ticket-fullname');
    ticketName.innerHTML = fullNameValue;

    fullName.value = '';
    userKm.value = '';
    userAgeRange.value = '';

    const randomCarriage = Math.floor(Math.random() * 9) + 1;
    ticketCarriage.innerText = randomCarriage;

    const randomCode = Math.floor(Math.random() * 9999) + 1;
    ticketCode.innerText = randomCode;
});

buttonDelete.addEventListener('click', function () {
    fullName.value = '';
    userKm.value = '';
    userAgeRange.value = '';
})

let costoTotale = userKm * 0.21;

const underage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const overage = [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
const over65 = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

// #3 - #3.1
if (!isNaN(userKm) && !isNaN(userAgeRange) || (fullName)) {


    let prezzoScontato = 0;

    if (0 < userAgeRange && userAgeRange < 18) {
        prezzoScontato = .20;
        costoTotale = (costoTotale - (costoTotale * prezzoScontato)).toFixed(2);
        console.log(`Il prezzo del biglietto per i minorenni è di ${costoTotale}€`);
    } else if (userAgeRange >= 65 && userAgeRange < 110) {
        prezzoScontato = .40;
        costoTotale = (costoTotale - (costoTotale * prezzoScontato)).toFixed(2);
        console.log(`Il prezzo del biglietto per gli over 65 è di ${costoTotale}€`);
    } else {
        costoTotale = costoTotale.toFixed(2);
        console.log(`Il prezzo del biglietto senza sconti è di ${costoTotale}€`);
    }
    ticketCost.innerText = costoTotale;
}
