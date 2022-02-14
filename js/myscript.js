// Palidroma
// Chiedere all'utente di mettere una parola palindroma
let parola = prompt('Inserisce una parola palindroma').trim();
console.log(parola)

function separa(params) {
  // Separa la parola.
  let arry =  [...params];
  console.log(arry)

  // Inverte la parola
  let reversed = arry.reverse();
  console.log(reversed)

  // // Serve per fare un calcolo con le parole inverte
  // let parolaUnita = ``;
  // console.log(parolaUnita)

  // // Unisce la parola Invertita
  // for (let i = 0; i < reversed.length; i++) {
  //   parolaUnita = parolaUnita + reversed[i];
  //   console.log(parolaUnita)
  // }

  // Unisce la parola Invertita
  let parolaUnita = reversed.join('')
  console.log(parolaUnita)

  // Creare una funzione che distingua la parola se è palindroma
  if (parola == parolaUnita)  {
    alert('La parola e Palidroma')
  } else {
    alert('La parola non e Palidroma')
  }
}

separa(parola)





