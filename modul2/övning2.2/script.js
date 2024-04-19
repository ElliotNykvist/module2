// Hämtar p taggarna och knappen och lagrar de i varsin const variabel, vilket gör att det är konstanta. 
const summa = document.getElementById('summa');
const produkt = document.getElementById('produkt');
const calculateBtn = document.getElementById('calculate')

// Funktion med namnet addition som returnerar summan av två parametrar. 
function  addition(tal1, tal2) {
  let summan = tal1 + tal2;

  return summan;
}

// Funktion med namnet multiplikation som returnerar produkten av två parametrar. 
function  multiplikation(tal1, tal2) {
  let produkten = tal1 * tal2;

  return produkten;
}

// Funktion som använder funktionerna multiplikation och addition för att skriva ut det i p taggarna
function calculate() {

  // Lagrar värden från formuläret i variablerna tal1 och tal2.
  let tal1 = document.getElementById('tal1').value;
  let tal2 = document.getElementById('tal2').value;
  

  // Lagrar retur värdet från funktionerna i varsin variabel.
  let summan = addition(tal1, tal2);
  let produkten = multiplikation(tal1, tal2);

  //Skriver ut variablerna summan och produkten i p taggarna.
  summa.innerHTML = `Summa: ${summan}`
  produkt.innerHTML = `Produkt: ${produkten}`
}

// När calculateBtn klickas göras calculate funktonen.
calculateBtn.addEventListener("click", calculate)


