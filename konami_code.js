const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

//event.key are down there

//const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0
document.body.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Cool!");
      index = 0;
    }
  }
  }
);
}
