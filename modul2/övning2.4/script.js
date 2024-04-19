
// Hämtar p taggarna och knappen och lagrar de i varsin const variabel, vilket gör att det är konstanta. 
const summa = document.getElementById('summa');
const produkt = document.getElementById('produkt');
const totalen = document.getElementById('totalen');
const calculateBtn = document.getElementById('calculate')

// Funktion som använder funktionerna multiplikation och addition för att skriva ut det i p taggarna
function calculate() {

  // Lagrar värden från formuläret i variablerna tal1 och tal2.
  let tal1 = document.getElementById('tal1').value;
  let tal2 = document.getElementById('tal2').value;
  

  // Lagrar retur värdet från funktionerna i varsin variabel.
  let summan = addition(tal1, tal2);
  let produkten = multiplikation(tal1, tal2);
  let total = summan + produkten

  //Skriver ut variablerna summan och produkten i p taggarna.
  summa.innerHTML = `Summa: ${summan}`
  produkt.innerHTML = `Produkt: ${produkten}`
  totalen.innerHTML = `Summan av tidigare värden: ${total}`
}

// När calculateBtn klickas göras calculate funktonen.
calculateBtn.addEventListener("click", calculate)



