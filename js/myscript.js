// // Palidroma
// // Invertire la parola.

// // Chiedere all'utente di mettere una parola palindroma
// let parola = prompt('Inserisce una parola palindroma').trim();
// console.log(parola)

// // Separa la parola.
// let arry =  [...parola];
// console.log(arry)

// // Inverte la parola
// let reversed = arry.reverse();
// console.log(reversed)

// // Serve per fare un calcolo con le parole inverte
// let parolaUnita = ``;
// console.log(parolaUnita)


// // Unisce le parole Invertite
// for (let i = 0; i < reversed.length; i++) {

//   parolaUnita = parolaUnita + reversed[i];
//   console.log(parolaUnita)

// }

// // parola invertita
// let parolaReversed = parolaUnita;
// console.log(parolaReversed)

// // Creare una funzione che distingua la parola se è palindroma
// if (parola == parolaReversed)  {
//   alert('La parola e Palidroma')
// } else {
//   alert('La parola non e Palidroma')
// }

// ------------------------------------------------------------------
// Pari e Dispari
// Chiedere all'utente Di scegliere pari o dispari E inserire un numero da 1 a 5
let numeroUtente;

// Fin quando l'utente non mettere il numero giusto non puo andare avanti
do {
  alert ('Scegli pari o dispari')

  // L'utente Inserisce un numero
  numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
  console.log("numeroUtente", numeroUtente)


  // Se inserisce un nome ho un numero non corretto dara errore
  if (isNaN(numeroUtente) || numeroUtente >= 6) {
    alert('Errore')
  }

} while (isNaN(numeroUtente) || numeroUtente >= 6);

// Calcola il numero random
function pcRandom(min,max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let numeropc = pcRandom(1,5)
console.log("numeropc", numeropc)

// Calcola il numero dell'utente e il numero random
function sum(num1, num2) {
  console.log(num1, num2);

  const som = numeroUtente + numeropc;

  return som
}

let somma = sum(numeroUtente, numeropc)
console.log("somma", somma)

//Da qui uscirà il vincitore
if (somma % 2 == 1) {
  alert('A vinto dispari')
} else {
  alert ('A vinto pari')
}














