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
document.body.addEventListener("keydown", (event) => {
  console.log(event.key)}
);
}
