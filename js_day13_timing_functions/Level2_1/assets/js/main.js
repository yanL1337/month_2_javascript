let count = 10;

const loop = setInterval(
  () =>
    (document.querySelector("#count").innerHTML = count !== 0 ? count-- : 0) &
    (count === 0
      ? setTimeout(
          () =>
            (document.querySelector(".message").style.display = "none") &
            clearInterval(loop),
          2000
        )
      : null),
  1000
);
