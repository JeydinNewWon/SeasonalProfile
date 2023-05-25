let snowContainer;
const snowContent = ['\u2744', '\u2745', '\u2746'];
const autumnLeavesContent = ['./assets/sprites/maple_sprite.png', './assets/sprites/fallen_leaf_sprite.png'];
const summerLeavesContent = ['./assets/sprites/green_falling_leaf_sprite.png', './assets/sprites/herb_sprite.png', './assets/sprites/flower_sprite.png', './assets/sprites/oak_leaf_sprite.png'];
const cherryBlossomsContent = ['./assets/sprites/cherry_blossom_1_sprite.png', './assets/sprites/cherry_blossom_2_sprite.png', './assets/sprites/cherry_blossom_3_sprite.png'];

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
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

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow effectElement";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(snowContent.length)];
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

function createAutumnLeaves(num) {
  for (let i = num; i > 0; i--) {
      var aLeaf = document.createElement("div");
      aLeaf.className = "aLeaf effectElement";
      let initialStyle = getRandomStyles();
      let dim = random(25) + 20;
      let bg = autumnLeavesContent[random(autumnLeavesContent.length)];

      aLeaf.style.cssText = `${initialStyle} width: ${dim}px; height: ${dim}px; background-image: url(${bg});`;
      $('#autumnleavescontainer').append(aLeaf);
  }
  twemoji.parse(document.body);
}

function removeAutumnLeaves() {
  setTimeout(() => {
      const aLeaves = document.querySelectorAll('.aLeaf');
      for (const aL of aLeaves) {
          aL.remove();
      }
  }, 200);
}

function createSummerLeaves(num) {
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

function removeSummerLeaves() {
  setTimeout(() => {
    const sLeaves = document.querySelectorAll('.sLeaf');
    for (const sL of sLeaves) {
        sL.remove();
    }
  }, 200);
}

function createBlossoms(num) {
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

function removeBlossoms() {
  setTimeout(() => {
    const cBlossoms = document.querySelectorAll('.cBlossom');
    for (const cB of cBlossoms) {
        cB.remove();
    }
  }, 200);
}

window.addEventListener("load", () => {
  $('#loadwrapper').fadeOut(2500, () => {
      $('#loadwrapper').remove();
  });
  snowContainer = document.getElementById("snowcontainer");
  snowEvents();
  autumnLeavesEvents();
  summerLeavesEvents();
  cherryBlossomsEvents();
});


///////////////

function snowEvents() {
    const quad4 = document.getElementById("quad4");

    quad4.addEventListener('mouseenter', () => {
        createSnow(30);
    });

    quad4.addEventListener('mouseleave', () => {
        removeSnow();
    });

}

function autumnLeavesEvents() {
    const quad3 = document.getElementById("quad3");

    quad3.addEventListener('mouseenter', () => {
        createAutumnLeaves(30);
    });

    quad3.addEventListener('mouseleave', () => {
        removeAutumnLeaves();
    });
}

function summerLeavesEvents() {
  const quad2 = document.getElementById("quad2");

  quad2.addEventListener('mouseenter', () => {
    createSummerLeaves(40);
  });

  quad2.addEventListener('mouseleave', () => {
    removeSummerLeaves();
  });
}

function cherryBlossomsEvents() {
  const quad1 = document.getElementById("quad1");

  quad1.addEventListener('mouseenter', () => {
    createBlossoms(40);
  });

  quad1.addEventListener('mouseleave', () => {
    removeBlossoms();
  });
}