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

const fullName = document.getElementById('full-name');
const userKm = document.getElementById('kms');
const userAge = document.getElementById('age');
const userAgeRange = document.getElementById('age-range');

buttonSend.addEventListener('click', function () {
    const fullNameValue = fullName.value;
    console.log(fullNameValue);

    const userKmValue = userKm.value;
    console.log(userKmValue);

    const userAgeValue = userAge.value;
    console.log(userAgeValue);

    const userAgeRangeValue = userAgeRange.value;
    console.log(userAgeRangeValue);
});

if (fullName) {
    fullName.innerHTML = fullNameValue;
    fullName.value = '';
}














// #3 - #3.1
// if (!isNaN(userKm) && !isNaN(userAge)) {

//     let costoTotale = userKm * 0.21;

//     let prezzoScontato = 0;

//     if (0 < userAge && userAge < 18) {
//         prezzoScontato = .20;
//         costoTotale = (costoTotale - (costoTotale * prezzoScontato)).toFixed(2);
//         console.log(`Il prezzo del biglietto per i minorenni è di ${costoTotale}€`);
//     } else if (userAge >= 65 && userAge < 110) {
//         prezzoScontato = .40;
//         costoTotale = (costoTotale - (costoTotale * prezzoScontato)).toFixed(2);
//         console.log(`Il prezzo del biglietto per gli over 65 è di ${costoTotale}€`)
//     } else {
//         costoTotale = costoTotale.toFixed(2);
//         console.log(`Il prezzo del biglietto senza sconti è di ${costoTotale}€`);
//     }
// } else {
//     alert('Non hai inserito dei numeri!!');
// }