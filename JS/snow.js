import { getRandomStyles, random } from "./random.js";

const snowContent = ['&#10052', '&#10053', '&#10054'];

export function createSnow(num) {
    for (var i = num; i > 0; i--) {
        var snow = document.createElement("div");
        snow.className = "snow effectElement";
        snow.style.cssText = getRandomStyles();
        snow.innerHTML = snowContent[random(snowContent.length)];
        $('#snowcontainer').append(snow);
    }
  }
  
export function removeSnow() {
    setTimeout(() => {
        const snow = document.querySelectorAll('.snow');
        for (const s of snow) {
            s.remove();
        }
    }, 200);
}

function snowEvents(idString) {
    const e = document.getElementById(idString);

    e.addEventListener('mouseenter', () => {
        createSnow(30);
        setTimeout(removeSnow, (1000 * 60));
    });
}