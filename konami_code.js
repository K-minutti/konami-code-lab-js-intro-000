// const codes = [
//   "ArrowUp",
//   "ArrowUp",
//   "ArrowDown",
//   "ArrowDown",
//   "ArrowLeft",
//   "ArrowRight",
//   "ArrowLeft",
//   "ArrowRight",
//   "b",
//   "a"
// ];
//
//   // if the keydown even sequence is === to the codes array
//   // return alert "Congrats"
//   // else {
//   //   keep listening
//   // }
// }
//
// function init (){
//   document.bodyaddEventListener("keydown", (event) => {
//
//     let index = 0;
//
//     function onKeyDownHandler(e) {
//       const key = e.key;
//
//       if (key === codes[index]) {
//         index++;
//
//         if (index === codes.length) {
//           alert("Hurray!");
//
//           index = 0
//         }
//       } else {
//          index = 0; }
//     }
//   })
// }


const codes = ['a', 'b', 'c'];

// Keep track of index outside of the event handler.
let index = 0;

// This is the function that would be invoked by the event listener.
function onKeyDownHandler(e) {
  const key = e.key;

  if (key === codes[index]) {
    index++;

    if (index === codes.length) {
      alert("Hurray!");

      index = 0;
    }
  } else {
    index = 0;
  }
}
