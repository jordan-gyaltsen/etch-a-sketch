

let btn = document.querySelector('button');
btn.addEventListener('click', () => {
  //let input = prompt("Enter number of squares per side between 0 and 100.");
  let input = null;
  while (!input || +input < 0 || +input > 100) {
    input = prompt("Enter number of squares per side between 0 and 100.");
  }
  clearGrid();
  input = +input;
  console.log(input);
  divGrid(input);
  console.log('done');
})

let container = document.querySelector('#container');


divGrid(16);


function divGrid(sideLen) {
  /* for (let i = 0; i < sideLen; i++) {
    for (let j = 0; j < sideLen; j++) { */
    for (let i = 0; i < sideLen ** 2; i++) {
      console.log(i);
      let newSquare = document.createElement('div');
      // newSquare.setAttribute('display', 'flex');
      newSquare.className = 'square';
      newSquare.style.width = `${95/sideLen}vw`;
      newSquare.style.height = `${95/sideLen}vw`;
      container.appendChild(newSquare);
      newSquare.addEventListener('mouseover', () => {
        newSquare.style.backgroundColor = "black";

        // console.log('hi');
      });
    }
  }

function clearGrid() {
  // let container = querySelector('#container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}


// container.addEventListener('hover', e => {});