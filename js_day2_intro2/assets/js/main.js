let infoDiv = document.getElementById("info");
let containerDiv = document.getElementById("container");

containerDiv.innerHTML = "<p>start of the element </p>";
document.write("end of the element");
infoDiv.innerHTML = "<h1>Hello World</h1>";
infoDiv.innerHTML += "</br><h2>How are you?</h2>";

document.getElementById("gallery").innerHTML =
  "<figure> <img style='width:200px' src='https://source.unsplash.com/random?cat/200/200'> <figcaption>Fig.1</figcaption></figure>";

document.getElementById("gallery").innerHTML +=
  "<figure> <img style='width:200px' src='https://source.unsplash.com/random?cat/200/200'> <figcaption>Fig.2</figcaption></figure>";

document.getElementById("gallery").innerHTML +=
  "<figure> <img style='width:200px' src='https://source.unsplash.com/random?cat/200/200'> <figcaption>Fig.3</figcaption></figure>";

// - functions lvl 1_2

function intro2(paramName) {
  console.log("Hi SuperCoder:in. Mein Name ist: " + paramName);
}
intro2("Yan");

// - functions lvl 1_3

function intro3(name, stadt, alter) {
  console.log(
    "Hi mein Name ist " +
      name +
      ". Ich bin " +
      alter +
      " Jahre alt. Ich komme aus " +
      stadt
  );
}

intro3("Yan", "Hameln", 23);

// - functions lvl 1_5

function math(num1, num2) {
  console.log("Multiplikation: " + num1 * num2);
  console.log("Division: " + num1 / num2);
}

math(10, 2);

// - functions lvl 1_4

function hero(heroName, heroPower, heroEnemy) {
  let name = "Mein:e Lieblingsheld:in ist: " + heroName;
  let power = " Er/Sie hat die Fähigkeit: " + heroPower;
  let enemy = " Sein/Ihr größte/r Gegner:in ist: " + heroEnemy;

  console.log(name + power + enemy);
}

hero("Yan", "Alles was Superman kann", "die Wabenkröte");
