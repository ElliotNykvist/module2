// Hämtar olika saker från html och lagrar det globalt i programmet.  

const selectStudent = document.getElementById("selected-student");
const selectGrade = document.getElementById("selected-grade");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const studentGrade = document.getElementById("grade");
const studentName = document.getElementById("name");
const container = document.querySelector(".container");

// Tre arrayer en med namn, betyg och en med alla betygsalernativ
let namn = ["Klara", "Andrea", "Emil", "Sarah", "Alicia", "Victor", "Thomas", "Robert"];
let betyg = ["A", "B", "C", "A", "D", "C", "E", "E"];
let betygAlternativ = ["A", "B", "C", "D", "E", "F"];


function getGrade() {
  // hämtar optionvärdet (vald elev) och lagrar det i en let variabel.
  let selected = document.getElementById("selected-student").value;
  // if sats som kontrollerar att inte betyget är standard värdet och annars skriver ut betyget med matchande index.
  if (selected === "") {
    return
  } else {
    studentGrade.innerHTML = `Betyg: ${betyg[selected]}`
  }
}


// funktionen med namnet getGrade hämtar det valda option värdet i en variabel. Samt skriver ut alla elever med det betyget.
function getNames() {
  // Skapar en tom array kallat valdtbetyg
  let valdtbetyg = [];

  // Hämtar optionvärdet (valt betyg)och lagrar det i en let variabel.
  let selected = document.getElementById("selected-grade").value;

  // En for loop som loopar lika många gånger som betyg arrayen och jämnför om selected (valt betyg) är samma som betyg[i]
  for (let i = 0; i < betyg.length; i++) {
    if (selected === betyg[i]) {
      // Använder push för att lägga till det i slutet av valdtbetygs arrayen om selected matchar med betyg[i].  
      valdtbetyg.push(namn[i])
    }
  }

  // En if sats skriver ut olika alternativ baserat på valdtbetygs längden.
  if (selected === "") {
    studentName.innerHTML = "Elever:";
  } else if (valdtbetyg.length === 0) {
    studentName.innerHTML = "Elever: 0";
  } else {
    studentName.innerHTML = `Elever:  ${valdtbetyg}`;
  }
  
}

function sortNames() {

  // Rensar container diven av allt innehåll, för körs funktionen flera gånger skapas de dubbletter av elev annars.
  container.innerHTML = "";
  // Skapar en tom array.
  var list = [];
  // En for loop som lägger till båda namn och beyg arrayen i samma array med samma index följd fortfarande.
  for (let i = 0; i < betyg.length; i++) {
    // pushar och slårsamman så betygen och namnen hamnar i samma index. 
    list.push({'betyg': betyg[i], 'namn': namn[i]});
  }

  console.log(list);

  // Använder sort för att sortera arrayen och jämnför varje värde med varandra, 
  list.sort(function(a, b) {
    return ((a.betyg < b.betyg) ? -1 : ((a.betyg == b.betyg) ? 0 : 1))
  })

  console.log(list)

  // jämnför grade värdet och 
  for (let j = 0; j < list.length; j++) {
    betyg[j] = list[j].betyg;
    namn[j] = list[j].namn
  }

  for (let k = 0; k < namn.length; k++) {
    let elev = document.createElement("p");
    elev.innerHTML = `${namn[k]}: ${betyg[k]}`
    container.appendChild(elev);
  }

}

// Funktionen app som kör programmet.
function app() {

   // En for each loop som skapar ett option alernativ för varje namn i arrayen. 
   namn.forEach((name, index) => {
    let option = document.createElement("option")
    option.value = index;
    option.textContent = name;
    selectStudent.appendChild(option);
  })

  // En for each loop som skapar ett option alernativ för varje betygsalternativ i arrayen. 
  betygAlternativ.forEach(grade => {
    let option = document.createElement("option")
    option.value = grade;
    option.textContent = grade;
    selectGrade.appendChild(option);
  })

  // En event lister som kollar efter klick på knappen och kör då getGrade funktionen.
  btn.addEventListener("click", getGrade);
  btn1.addEventListener("click", getNames);
  btn2.addEventListener("click", sortNames);
}

// Kör funktionen app. 
app();