const container = document.getElementById("container");

let value = 0;

function moveText() {
  for (let i = 0; i < 20; i++) {
    let randY = Math.floor((Math.random() * height) + 1);
    let randX = Math.floor((Math.random() * width) + 1);
    value += 1;
    const div = createElement("div");
    div.style.transform = `translate(${randX}px, ${randY}px)`;
    container.style.transform = `translate(${value}px)`
  }
}

setInterval(moveText, 1000);