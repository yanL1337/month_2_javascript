// ! Bitte nicht nachmachen wer das ließt

let looper;

const startMinCountdown = () => {
  const userInput = document.querySelector("#minutes");
  let countM = Number(userInput.value);
  let countS = 59;
  let andererCount = 0;
  let andererCountM = 1;
  userInput.value = "";
  looper = setInterval(() => {
    document.querySelector("#time").innerHTML = `${
      countM !== 0 ? countM - andererCountM : "00"
    }:${
      andererCount < 60 && countM !== 0
        ? countS--
        : "00" & (andererCount = 0) & (countS = 60)
    }`;
    andererCount++;
    andererCount == 59 ? andererCountM++ : null;
  }, 1000);
};
const pauseMinCountdown = () => {
  clearInterval(looper);
};
const restartMinCountdown = () => {
  clearInterval(looper);
  startMinCountdown();
};
