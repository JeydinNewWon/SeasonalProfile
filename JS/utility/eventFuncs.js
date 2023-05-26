import { createAutumnLeaves, removeAutumnLeaves } from "../effects/autumnleaves.js";
import { createBlossoms, removeBlossoms } from "../effects/blossom.js";
import { createSnow, removeSnow } from "../effects/snow.js";
import { createSummerLeaves, removeSummerLeaves } from "../effects/summerleaves.js";

export function eventRegister(idString, SEASON) {
    let e = document.getElementById(idString);

    e.addEventListener('mouseenter', () => {
        switch (SEASON) {
            case 1:
                createBlossoms(40);
                break;
            case 2:
                createSummerLeaves(40);
                break;
            case 3:
                createAutumnLeaves(30);
                break;
            case 4:
                createSnow(30);
                break;
            default:
                break;
        }
    });

    e.addEventListener('mouseleave', () => {
        switch (SEASON) {
            case 1:
                removeBlossoms();
                break;
            case 2:
                removeSummerLeaves();
                break;
            case 3:
                removeAutumnLeaves();
                break;
            case 4:
                removeSnow();
                break;
            default:
                break;
        }
    });
}