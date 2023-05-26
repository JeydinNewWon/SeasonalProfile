import { createSnow, removeSnow } from "../effects/snow.js";

const colorSwitch = {
    "true": "rgba(0, 0, 0, 0.6)",
    "false": "rgba(0, 0, 0, 0.3)"
};

const bgOpacity = {
    "true": "1",
    "false": "0.4"
};

function returnOpp(boolStr) {
    return "true" ? (boolStr === "false") : "false";
}

window.addEventListener("load", () => {
    $('#loadwrapper').fadeOut(2500, () => {
        $('#loadwrapper').remove();
    });

    const imgs = document.querySelectorAll('#contactscontainer img');
    for (const img of imgs) {
        img.addEventListener('mouseenter', () => {
            img.nextElementSibling.style.color = '#fff';
        });

        img.addEventListener('mouseleave', () => {
            img.nextElementSibling.style.color = 'transparent';
        });
    }

    createSnow(30);

    $('#effectoption').on('click', () => {
        let val = returnOpp($('#effectoption').attr('clicked'));

        $('#effectoptioncontainer').css('background-color', colorSwitch[val]);
        $('#effectoption').css('opacity', bgOpacity[val]);

        console.log(val);

        if (val === true) {
            createSnow(30);
        } else {
            removeSnow();
        }

        $('#effectoption').attr('clicked', val);
        
    });
});