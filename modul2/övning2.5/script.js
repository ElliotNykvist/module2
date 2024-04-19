const knapp = document.getElementById('knapp');

let ord = ["God", "och", "JUL", "GOTT", "år", "Nytt"]

function godJul() {
  document.write(`${ord[0]} ${ord[2]} ${ord[1]} ${ord[3]} ${ord[5]} ${ord[4]}`);
}

knapp.addEventListener("click", godJul);