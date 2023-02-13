// bottone start gioco
const playBtn = document.getElementById('play')
// risultato sul p in html collegamento
const testoRisultato = document.getElementById('risultatohtml')
// genera i 5 numeri dell'alert
// CREO UN ARRAY DOVE METTERE I 5 NUMERI CASUALI

let numeri = [];
let userNumeri = [];
// collego il bottone ad un eventlistener
playBtn.addEventListener('click', inziaIlGioco)
// funzione che ascolta il  click
function inziaIlGioco() {

  numeriRandomici();

  // numeri casuali visuallizzati nell'alert
  // join Specifica una stringa per separare ogni coppia di elementi adiacenti della matrice
  alert('memorizza i seguenti numeri,vediamo quanto sei bravo')
  // MOSTRO I NUMERI CASUALI DELL'ARRAY
  alert(numeri.join(","));

  // timer inzio 30 secondi
  // IMPOSTA TIMER FUNZIONE CHE CHIEDE E CONFRONTA I NUMERI 

  setTimeout(() => {

    // funzione chiedoNumeriPersonavisti in precedenza
    chiedoNumeriPersona();

    // confronto dei numeri funzione
    let numeriCorretti = [];
    confrontoNumeri(userNumeri, numeriCorretti);
    //   stampa in console del risultato e dei numeri che sono Corretti  

    console.log(`Bravo hai individuato ${numeriCorretti.length} numeri: ${numeriCorretti.join(", ")}`);
    // collegamento in html
    testoRisultato.innerHTML = `Bravo hai individuato ${numeriCorretti.length} numeri: ${numeriCorretti.join(", ")}`
    // funzione chiedoNumeriPersona
    function chiedoNumeriPersona() {
      for (let i = 0; i < 5; i++) {
        userNumeri.push(parseInt(prompt(`Inserisci in ordine il primo numero fino all'ultimo appariranno altre richieste fino all'eseurimento dei numeri visti in precedenza  ${i + 1}:`)));
      }
    }
  }, 30000);
  // funzione dei numeri randomici
  function numeriRandomici() {
    for (let i = 0; i < 5; i++) {
      numeri.push(Math.floor(Math.random() * 100));
    }
  }

  // funzione confrontoNumeri
  function confrontoNumeri(userNumeri, numeriCorretti) {
    for (let i = 0; i < 5; i++) {
      if (numeri.includes(userNumeri[i])) {
        numeriCorretti.push(userNumeri[i]);
      }
    }
  }

}




