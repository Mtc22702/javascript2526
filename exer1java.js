document.getElementById('button').addEventListener('click', toggleBgColor);

let counter = 0;
function toggleBgColor() {
  counter++;

  if (counter % 2 == 1) {
    document.getElementById('main-container').style.backgroundColor = '#026873';
  } else {
    document.getElementById('main-container').style.backgroundColor = '#F29484';
  }
}
alert('Welcome!');
console.log('Hello World!');
