function adult() {
  const age = Number(document.querySelector("#alter").value);
  const result = document.querySelector("#result1");
  if (age >= 18) {
    result.innerHTML = "Volljährig";
  } else {
    result.innerHTML = "Minderjährig";
  }
}

function greaterThan() {
  if (Number(document.getElementById("input").value) >= 18) {
    document.getElementById("result2").innerHTML = "ja kannst rauchen";
  } else {
    document.getElementById("result2").innerHTML = "no smoke 4 u";
  }
}

function diff() {
  const zahlInput = Number(document.querySelector("#differ").value);
  const zahl = 27;

  if (zahlInput > 27) {
    console.log((zahlInput - zahl) * 2);
  }
}

function health() {
  const air = Number(document.querySelector("#quality").value);

  if (air <= 50) {
    document.querySelector("#concern").innerHTML =
      "Level of health concern: Good";
    document.querySelector("#effect").innerHTML =
      "Level of health effect: Little or no risk";
    document.body.style.backgroundColor = "green";
  } else if (air > 50 && air <= 100) {
    document.querySelector("#concern").innerHTML =
      "Level of health concern: Moderate";
    document.querySelector("#effect").innerHTML =
      "Level of health effect: Acceptable quality";
    document.body.style.backgroundColor = "yellow";
  } else {
    document.querySelector("#concern").innerHTML =
      "Level of health concern: Unhealthy for sensitive groups";
    document.querySelector("#effect").innerHTML =
      "Level of health effect: Generable publics not likely affected";
    document.body.style.backgroundColor = "red";
  }
}
