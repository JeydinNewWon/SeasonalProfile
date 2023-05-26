export function random(num) {
    return Math.floor(Math.random() * num);
}
  
export function getRandomStyles() {
    const top = random(100);
    const left = random(100);
    const dur = random(10) + 5;
    const size = random(25) + 13;
    return `
        top: -${top}%;
        left: ${left}%;
        font-size: ${size}px;
        animation-duration: ${dur}s;
    `;
}