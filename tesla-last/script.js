

document.querySelector(".wheels img[src='./assets/icons/image 3.png']").addEventListener("click", function() {
  let wheel1 = document.querySelector(".wheel1");
  let wheel2 = document.querySelector(".wheel2");
  let text = document.querySelector(".wheel-text");
  let currentWidth = parseInt(wheel1.style.width) || 80;
  let currentHeight = parseInt(wheel1.style.height) || 80;
  if (currentWidth,currentHeight < 81) {
    wheel1.style.height = currentHeight + 2 + "px";
    wheel2.style.height = currentHeight + 2 + "px";
    wheel1.style.width = currentWidth + 2 + "px";
    wheel2.style.width = currentWidth + 2 + "px";
    text.innerHTML = '21';
  }
});

document.querySelector(".wheels img[src='./assets/icons/image 4.png']").addEventListener("click", function() {
  let wheel1 = document.querySelector(".wheel1");
  let wheel2 = document.querySelector(".wheel2");
  let text = document.querySelector(".wheel-text");
  let currentWidth = parseInt(wheel1.style.width) || 80;
  let currentHeight = parseInt(wheel1.style.height) || 80;
  if (currentWidth,currentHeight > 78) {
    wheel1.style.height = currentHeight - 2 + "px";
    wheel2.style.height = currentHeight - 2 + "px";
    wheel1.style.width = currentWidth - 2 + "px";
    wheel2.style.width = currentWidth - 2 + "px";
    text.innerHTML = '19';
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

let buttery = document.querySelector('#buttery')
let speed = document.querySelector('#speed')
let speedIncrease = document.querySelector(".speed img[src='./assets/icons/image 3.png']")
let speedDecrease = document.querySelector(".speed img[src='./assets/icons/image 4.png']")
let speedDefault = 60
let butteryLife = 600

const toggle1 = document.querySelector(".toggle1");
const toggle2 = document.querySelector(".toggle2");

toggle1.addEventListener("change", function() {
  if (toggle1.checked) {
    buttery.innerHTML = parseInt(buttery.innerHTML) - 20 + 'km';
  } else {
    buttery.innerHTML = parseInt(buttery.innerHTML) + 20 + 'km';
  }
});

toggle2.addEventListener("change", function() {
  if (toggle2.checked) {
    buttery.innerHTML = parseInt(buttery.innerHTML) - 20 + 'km';
  } else {
    buttery.innerHTML = parseInt(buttery.innerHTML) + 20 + 'km';
  }
});

speedIncrease.onclick = () => {
  if (speedDefault < 120) {
    speedDefault += 5
    butteryLife -= 10
    buttery.innerHTML = butteryLife + 'km'
    speed.innerHTML = speedDefault + 'km/h'

    if (speedDefault > 120) {
      wheel1.style.animation = speedDefault - 0.1;
    }
  }
}
speedDecrease.onclick = () => {
  if (speedDefault > 40) {
    speedDefault -= 5
    butteryLife += 10
    buttery.innerHTML = butteryLife + 'km'
    speed.innerHTML = speedDefault + 'km/h'
  }
}

document.querySelector('.toggle1').addEventListener('click', function() {
  const buttery = document.querySelector('#buttery');
  let gg = 10
  buttery.innerHTML - gg
  buttery.innerHTML - gg
});

document.querySelector('.toggle2').addEventListener('click', function() {
  const buttery = document.querySelector('#buttery');
  let gg = 10
  buttery.innerHTML - gg
  buttery.innerHTML - gg
});


let container = document.querySelector('center')
let wheelBall = document.querySelector('.wheel1')
let wheelsTwo = document.querySelector('.wheel2')
let teslaImg = document.querySelector('.car')
let containerTwo = document.querySelector('.big_container')
let img = document.querySelector('.into')
teslaImg.onclick = () => {
  teslaImg.style.width = '100%'
  teslaImg.style.height = '100vh'
    teslaImg.style.scale = '5'
    teslaImg.style.transition = '1s ease'
    wheelBall.style.opacity = '0'
    wheelsTwo.style.opacity = '0'
    setTimeout(() => {
        container.style.display = 'none'
        img.style.scale = '4'
        containerTwo.style.display = 'block'
        containerTwo.style.opacity = '1'
    }, 500)

    setTimeout(() => {
        img.style.scale = '1'
        img.style.transition = '1s ease'
    }, 1000)
    teslaImg.style.width = '830px'
    teslaImg.style.height = '500px'
}

let toggle4 = document.querySelector('.toggle4')
let look_click = document.querySelector('.look_click')

toggle4.onclick = () => {
  toggle4.checked = false;
    img.style.scale = '7'
    setTimeout(() => {
        containerTwo.style.display = 'none'
        containerTwo.style.opacity = '0'
        container.style.display = 'block'
        teslaImg.style.scale = '1'
        wheelBall.style.opacity = '1'
        wheelsTwo.style.opacity = '1'
    }, 700)
    toggle4.checked = true;
}
let colorsInto = {
  black: "./assets/img/image 1 (1).png",
  white: "./assets/img/image 9.png",
  brown: "./assets/img/image 8.png"
}

let btns = document.querySelectorAll('.btns')

btns.forEach((btn) => {
  btn.onclick = () => {
      let color = btn.getAttribute('data-color')
      let imgB = colorsInto[color]
      img.src = `${imgB}`
      img.style.width = '1280px'

      img.style.transition = '5s ease'
  }
})
