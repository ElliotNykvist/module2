// Hämtar olika saker från html och lagrar det globalt i programmet.  

const select = document.getElementById("selected-student");
const btn = document.getElementById("btn");
const grade = document.getElementById("grade");

// Två array en med namn och en betyg
let namn = ["Klara", "Andrea", "Emil", "Sarah", "Alicia", "Victor", "Thomas", "Robert"];
let betyg = ["A", "B", "C", "A", "D", "C", "E", "E"];

// funktionen med namnet getGrade hämtar det valda option värdet i en variabel. Samt skriver ut beyget med matchande index.
function getGrade() {
  // hämtar optionvärdet (vald elev) och lagrar det i en let variabel.
  let selected = document.getElementById("selected-student").value;
  // if sats som kontrollerar att inte betyget är standard värdet och annars skriver ut betyget med matchande index.
  if (selected === "") {
    return
  } else {
    grade.innerHTML = `Betyg: ${betyg[selected]}`
  }
}

// Funktionen app som kör programmet.
function app() {

  // En for each loop som skapar ett option alernativ för varje namn i arrayen. 
  namn.forEach((name, index) => {
    let option = document.createElement("option")
    option.value = index;
    option.textContent = name;
    select.appendChild(option);
  })

  // En event lister som kollar efter klick på knappen och kör då getGrade funktionen.
  btn.addEventListener("click", getGrade);
}

// Kör funktionen app. 
app();