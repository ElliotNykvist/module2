// Hämtar knapp och word komponenterna och lagar de med const eftersom att värdena inte kommer ändras.
const btn = document.getElementById("btn");
const word = document.getElementById("word");

// En array med 5 olika array items. 
let array = ["Hej", "Nej", "EJ", "Leverpastej", "42"];

// En funktion för att skriva ut array itemet som har samma värde som value.
function match() {
  let value = document.getElementById("value").value;
  let searchWord = array[value]

  word.innerHTML = "Ordet: " + array[value];
}

// Kör match funkionen när knappen btn blir klickad.
btn.addEventListener("click", match);

