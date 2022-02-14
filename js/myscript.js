// Palidroma
// Invertire la parola.

// Chiedere all'utente di mettere una parola palindroma
let parola = prompt('Inserisce una parola palindroma').trim();
console.log(parola)

// Separa la parola.
let arry =  [...parola];
console.log(arry)

// Inverte la parola
let reversed = arry.reverse();
console.log(reversed)

// Serve per fare un calcolo con le parole inverte
let parolaUnita = ``;
console.log(parolaUnita)

// Unisce le parole Invertite
for (let i = 0; i < reversed.length; i++) {

  parolaUnita = parolaUnita + reversed[i];
  console.log(parolaUnita)

}

// parola invertita
let parolaReversed = parolaUnita;
console.log(parolaReversed)

// Creare una funzione che distingua la parola se è palindroma
if (parola == parolaReversed)  {
  alert('La parola e Palidroma')
} else {
  alert('La parola non e Palidroma')
}

