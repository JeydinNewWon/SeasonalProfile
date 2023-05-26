import { random, getRandomStyles } from "./random.js";

const autumnLeavesContent = ['./assets/sprites/maple_sprite.png', './assets/sprites/fallen_leaf_sprite.png'];

export function createAutumnLeaves(num) {
    for (let i = num; i > 0; i--) {
        var aLeaf = document.createElement("div");
        aLeaf.className = "aLeaf effectElement";
        let initialStyle = getRandomStyles();
        let dim = random(25) + 20;
        let bg = autumnLeavesContent[random(autumnLeavesContent.length)];
  
        aLeaf.style.cssText = `${initialStyle} width: ${dim}px; height: ${dim}px; background-image: url(${bg});`;
        $('#autumnleavescontainer').append(aLeaf);
    }
  }
  
export function removeAutumnLeaves() {
    setTimeout(() => {
        const aLeaves = document.querySelectorAll('.aLeaf');
        for (const aL of aLeaves) {
            aL.remove();
        }
    }, 200);
}
  