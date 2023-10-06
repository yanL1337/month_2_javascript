const fomular = document.querySelector("#form1");
const werte2 = document.querySelectorAll("input");
// const werte2 = document.forms;

console.log(werte2[0]);
// werte2[0].lastElementChild
fomular.addEventListener("submit", () => {
  console.log(werte2[0].value);
});
