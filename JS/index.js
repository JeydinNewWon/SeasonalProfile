import { eventRegister } from "./eventFuncs.js";

window.addEventListener("load", () => {
  $('#loadwrapper').fadeOut(2500, () => {
      $('#loadwrapper').remove();
  });
  eventRegister("quad4", 4);
  eventRegister("quad3", 3);
  eventRegister("quad2", 2);
  eventRegister("quad1", 1);
});