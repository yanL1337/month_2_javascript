// # Level 1_1 BOM

const ausgabe = () => {
  console.log("Start, chill 3 Sekunden dann mag(g)ie");
  let count = 10;
  const loop = setInterval(() => {
    let zeit = new Date();
    console.log(count--);
    console.log(zeit.toLocaleTimeString());
    count === 0 ? clearInterval(loop) : null;
  }, 1000);
  setTimeout(() => console.log("Syke thats the wrong number"), 3000);
};
ausgabe();

//# level 1_2 && level 1_3
let count = 100;

document.querySelector("#btn").addEventListener("click", () => {
  setInterval(
    () =>
      (document.querySelector(".zeit").innerHTML = `${
        count !== 0 ? count-- : 0
      }% Daten werden geladen einen moment bitte`),
    100
  );
  setTimeout(() => {
    document.querySelector(".result").innerHTML = `
- Browsername: ${navigator.appCodeName} <br>
- Betriebssystem-Architektur: ${navigator.product} <br>
- Browser-Version: ${navigator.appVersion} <br>
- Window Auflösung: ${window.screen.availHeight * window.screen.availWidth} <br>
- Innenhöhe und -breite des Dokuments: Höhe/${window.screen.height}  Breite/${
      window.screen.width
    } <br>
- colorDepth: ${window.screen.colorDepth} <br>
- pixelDepth: ${window.screen.pixelDepth}
    `;
  }, 10000);
});
