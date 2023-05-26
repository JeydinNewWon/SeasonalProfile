import { getRandomStyles, random } from "../utility/random.js";

const cherryBlossomsContent = ['./assets/sprites/cherry_blossom_1_sprite.png', './assets/sprites/cherry_blossom_2_sprite.png', './assets/sprites/cherry_blossom_3_sprite.png'];

export function createBlossoms(num) {
    for (let i = num; i > 0; i--) {
        let cBlossom = document.createElement("div");
        cBlossom.className = "cBlossom effectElement";
        let initialStyle = getRandomStyles();
        let dim = random(25) + 10;
        let bg = cherryBlossomsContent[random(cherryBlossomsContent.length)];

        cBlossom.style.cssText = `${initialStyle} width: ${dim}px; height: ${dim}px; background-image: url(${bg});`;
        $('#cherryblossomscontainer').append(cBlossom);
    }
}
  
export function removeBlossoms() {
    let blossoms = document.querySelectorAll('.cBlossom');

    for (const cB of blossoms) {
        cB.remove();
    }
}