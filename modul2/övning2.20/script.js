const container = document.getElementById("container");

let value = 0;

function moveText() {
  for (let i = 0; i < 20; i++) {
    value += 1;
    container.style.transform = `translate(${value}px)`
  }
}

setInterval(moveText, 1000);