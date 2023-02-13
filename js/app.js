// genera i 5 numeri dell'alert
let numeri = [];
for (let i = 0; i < 5; i++) {
    numeri.push(Math.floor(Math.random() * 100));
}

// numeri casuali visuallizzati nell'alert
// join Specifica una stringa per separare ogni coppia di elementi adiacenti della matrice
alert('memorizza i seguenti numeri,vediamo quanto sei bravo')
alert(numeri.join(", "));

// timer inzio 30 secondi
setTimeout(() => {
  let userNumeri = [];
  for (let i = 0; i < 5; i++) {
    userNumeri.push(parseInt(prompt(`Inserisci i ordine il primo numero fino all'ultimo appariranno altre richieste fino all'eseurimento dei numeri visti in precedenza  ${i + 1}:`)));
  }

  // confronto dei numeri 
  let numeriCorretti = [];
  for (let i = 0; i < 5; i++) {
    if (numeri.includes(userNumeri[i])) {
      numeriCorretti.push(userNumeri[i]);
    }
  }
//   stampa in console del risultato e dei numeri che sono Corretti  

  console.log(`Bravo hai individuato ${ numeriCorretti.length} numeri: ${ numeriCorretti.join(", ")}`);
}, 30000);