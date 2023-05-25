import { getRandomStyles, random } from ".";

const snowContent = ['&#10052', '&#10053', '&#10054'];

export const createSnow = (num) => {
    for (var i = num; i > 0; i--) {
      var snow = document.createElement("div");
      snow.className = "snow";
      snow.style.cssText = getRandomStyles();
      snow.innerHTML = snowContent[random(3)];
      snowContainer.append(snow);
    }
  }
  
export const removeSnow = () => {
    setTimeout(() => {
        const snow = document.querySelectorAll('.snow');
        for (const s of snow) {
            s.remove();
        }
    }, 200);
}

export function snowEvents() {
    const quad4 = document.getElementById("quad4");

    quad4.addEventListener('mouseenter', () => {
        createSnow(30);
        setTimeout(removeSnow, (1000 * 60));
    });

    quad4.addEventListener('mouseleave', () => {
        removeSnow();
    });

}