// Skapar en variabel med namnet word och värdet "Hello World".
let word = "Hello World"

// Skriver ut variabeln word.
console.log(`word: ${word}`);

// Skriver ut vad word.slice(0, 5) gör. Vilket är att skappa en kopia av Hello i en array.  
console.log(`word.slice(0, 5) blir: ${word.slice(0, 5)}`);

// Splitar vid varje melland rum och gör varje objet för och efter mellan rummet till ett array objekt i array.
let array = word.split(" ");

// Skriver ut arrayen.
console.log(`word.split("") blir: ${array}`)

// Joinar alla objekt i arrayen med ett mellanrum emellan.
console.log(array.join(" "));



