let snowContainer;
const snowContent = ['&#10052', '&#10053', '&#10054'];
const autumnLeavesContent = ['&#127809;', '&#127810;'];

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

function createAutumnLeaves(num) {
    for (let i = num; i > 0; i--) {
        var aLeaf = document.createElement("div");
        aLeaf.className = "aLeaf effectElement";
        aLeaf.style.cssText = getRandomStyles();
        aLeaf.innerHTML = autumnLeavesContent[random(autumnLeavesContent.length)];
        $('#autumnleavescontainer').append(aLeaf);
    }
}

function removeAutumnLeaves() {
    setTimeout(() => {
        const aLeaves = document.querySelectorAll('.aLeaf');
        for (const aL of aLeaves) {
            aL.remove();
        }
    }, 200);
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
    $('#loadwrapper').fadeOut(2500, () => {
        $('#loadwrapper').remove();
    });
    snowContainer = document.getElementById("snowcontainer");
    snowEvents();
    autumnLeavesEvents();

});


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