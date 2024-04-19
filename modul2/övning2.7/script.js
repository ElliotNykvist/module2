// Hämtar knapp och word komponenterna och lagar de med const eftersom att värdena inte kommer ändras.
const btn = document.getElementById("btn");
const word = document.getElementById("word");

// En array med 5 olika array items. 
let array = ["Hej", "Nej", "EJ", "Leverpastej", "42"];

// En funktion lagrar en slumpar siffra mellan 0 och längden av arrayen i en variabel. För att sedan skriva ut den.
function match() {
  let randomWord = Math.floor(Math.random() * array.length);
  word.innerHTML = "Ordet: " + array[randomWord];
}

// Kör match funkionen när knappen btn blir klickad.
btn.addEventListener("click", match);

