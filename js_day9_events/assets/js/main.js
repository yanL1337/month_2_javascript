// # Events lvl1_4

document
  .querySelector("#clickHere")
  .addEventListener("click", () => console.log("Du hast gecklickt"));

// # Events lvl1_5

const button = document.querySelector("#clickMe");
let count = 0;
button.addEventListener("click", () => {
  count++;
  button.innerHTML = `Click me: ${count}`;
});

// # Events lvl1_6

const slct = document.querySelector("#cars");
const rslt = document.querySelector("#carsResult");
slct.addEventListener("change", (event) => {
  rslt.innerHTML = event.target.value;
});

// # Events lvl1_9 && Events lvl2_4

const auswahl = document.querySelector("#farbeAuswahlen");
const btn = document.querySelector("#button");
const body = document.querySelector("body");

// ! lvl 2_4
auswahl.addEventListener("change", (event) => {
  event.preventDefault();
  body.style.backgroundColor = event.target.value
    .split(" ")
    .join("")
    .toLowerCase();
});
// ! lvl 1_9
btn.addEventListener("click", () => {
  event.preventDefault();
  auswahl.remove(auswahl.selectedIndex);
});
