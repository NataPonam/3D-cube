
const elem = document.getElementById('cube');

function change() {
  const x = document.getElementsByName('cube-rotate-x');
  const r = document.getElementById('rangeX');
  const one = document.getElementById('one');
  let stepX = r.value;
  one.innerHTML = stepX;

  const y = document.getElementsByName('cube-rotate-y');
  const rangeY = document.getElementById('rangeY');
  const two = document.getElementById('two');
  let stepY = rangeY.value;
  two.innerHTML = stepY;
  elem.style.transform = `rotateX(${stepX}deg) rotateY(${stepY}deg)`;
}

function reset() {
    location.reload();
}
