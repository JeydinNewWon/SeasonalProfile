import { random, getRandomStyles } from "../utility/random.js";

const summerLeavesContent = ['./assets/sprites/green_falling_leaf_sprite.png', './assets/sprites/herb_sprite.png', './assets/sprites/flower_sprite.png', './assets/sprites/oak_leaf_sprite.png'];

export function createSummerLeaves(num) {
    for (let i = num; i > 0; i--) {
      let sLeaf = document.createElement("div");
      sLeaf.className = "sLeaf effectElement";
      let initialStyle = getRandomStyles();
      let dim = random(25) + 15;
      let bg = summerLeavesContent[random(summerLeavesContent.length)];
  
      sLeaf.style.cssText = `${initialStyle} width: ${dim}px; height: ${dim}px; background-image: url(${bg});`;
      $('#summerleavescontainer').append(sLeaf);
    }
  } 
  
export function removeSummerLeaves() {
    setTimeout(() => {
        const sLeaves = document.querySelectorAll('.sLeaf');
        for (const sL of sLeaves) {
            sL.remove();
        }
    }, 200);
}