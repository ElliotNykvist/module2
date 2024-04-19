// En array med 5 olika array items. 
let array = ["det", "är", "kul", "att", "programmera"];

// deklarerar variabeln mening för att kunna använda den i funktion joinArray;
let mening = "";

// Funktion med namnet joinArray som gör varje ord i arrayen till en mening och skriver ut den med alert
function joinArray() {
  // En foreach array som lägger till varje array till variabeln mening.
  array.forEach((arr, index) => {
    mening += arr;
    // If sats som använder index för att hålla koll på array längden och lägger till ett mellanrum ända tills sista array item.
    if (index < array.length - 1) {
      mening += "";
    }
  })
  // Alert meddelande som skriver ut mening.
  alert(mening);
}

// Funktionen joinArray körs.
joinArray();