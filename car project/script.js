
document.querySelector(".wheels img[src='./assets/icons/image 3.png']").addEventListener("click", function() {
  let wheel1 = document.querySelector(".wheel1");
  let wheel2 = document.querySelector(".wheel2");
  let text = document.querySelector(".wheel-text");
  let currentWidth = parseInt(wheel1.style.width) || 80;
  let currentHeight = parseInt(wheel1.style.height) || 80;
  if (currentWidth,currentHeight < 82) {
    wheel1.style.height = currentHeight + 1 + "px";
    wheel2.style.height = currentHeight + 1 + "px";
    wheel1.style.width = currentWidth + 1 + "px";
    wheel2.style.width = currentWidth + 1 + "px";
    text.innerHTML = currentWidth + 1;
  }
});

document.querySelector(".wheels img[src='./assets/icons/image 4.png']").addEventListener("click", function() {
  let wheel1 = document.querySelector(".wheel1");
  let wheel2 = document.querySelector(".wheel2");
  let text = document.querySelector(".wheel-text");
  let currentWidth = parseInt(wheel1.style.width) || 80;
  let currentHeight = parseInt(wheel1.style.height) || 80;
  if (currentWidth,currentHeight > 77) {
    wheel1.style.height = currentHeight - 1 + "px";
    wheel2.style.height = currentHeight - 1 + "px";
    wheel1.style.width = currentWidth - 1 + "px";
    wheel2.style.width = currentWidth - 1 + "px";
    text.innerHTML = currentWidth + 1;
  }
});

let count = 20;
let toggle = document.querySelector('.toggle1');

document.querySelector(".weather img[src='./assets/icons/image 3.png']").addEventListener('click', function() {
  count++;
  if (count > 40) {
    count = 40;
  }
  document.querySelector('#gradus').textContent = count + '°';
  if (count === 30) {
    toggle.checked = true;
  }
  else if (count < 30 && count > -20) {
    toggle.checked = false;
  }
});

document.querySelector(".weather img[src='./assets/icons/image 4.png']").addEventListener('click', function() {
  count--;
  if (count < -20) {
    count = -20;
  }
  document.querySelector('#gradus').textContent = count + '°';
  if (count === -20) {
    toggle.checked = true;
  }
  else if (count > -20 && count < 30) {
    toggle.checked = false;
  }
});