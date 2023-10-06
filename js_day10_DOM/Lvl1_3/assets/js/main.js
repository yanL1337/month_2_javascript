let auswahl = document.querySelectorAll("button");
const liste = document.querySelector("#myList");

auswahl.forEach((elt) => {
  elt.addEventListener("click", () => {
    let str = elt.innerHTML.replace("#", "").trim().split(" ").join(".");

    if (str.length > 17) {
      if (elt.innerHTML.includes("previous")) {
        console.log(liste.lastElementChild.previousElementSibling);
      } else {
        console.log(liste.firstElementChild.nextElementSibling);
      }
    } else {
      console.log(liste[str]);
    }
  });
});
// console.log(firstElementChild.nextElementSibling);
