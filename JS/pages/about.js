import { createBlossoms, removeBlossoms } from "../effects/blossom.js";

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

    createBlossoms(40);

    $('#effectoption').on('click', () => {
        let val = returnOpp($('#effectoption').attr('clicked'));

        $('#effectoptioncontainer').css('background-color', colorSwitch[val]);
        $('#effectoption').css('opacity', bgOpacity[val]);

        console.log(val);

        if (val === true) {
            createBlossoms(40);
        } else {
            removeBlossoms();
        }

        $('#effectoption').attr('clicked', val);
        
    });
});