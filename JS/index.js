let snowContainer;
const snowContent = ['&#10052', '&#10053', '&#10054'];

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
}

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
  }
}

const removeSnow = () => {
  setTimeout(() => {
    const snow = document.querySelectorAll('.snow');
    for (const s of snow) {
        s.remove();
    }
  }, 200);
}

window.addEventListener("load", () => {
    snowContainer = document.getElementById("snowcontainer");
    snowEvents();

});
function snowEvents() {
    const quad4 = document.getElementById("quad4");

    quad4.addEventListener('mouseenter', () => {
        createSnow(30);
        setTimeout(removeSnow, (1000 * 60));
    });

    quad4.addEventListener('mouseleave', () => {
        removeSnow();
    });

}