import { aiChooser } from "./ai-chooser.js";
import {
  elAiHand,
  elHands,
  elHumanHand,
  elRefreshGame,
} from "./html-selection.js";
import { initialState } from "./settings.js";
import { uiChanger } from "./ui-changer.js";
elHands.forEach((hand) => {
  hand.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const choseHand = clickedElement.querySelector(".game-zone__img");
    elHumanHand.src = choseHand.src;

    const choseHandAi = aiChooser(initialState.mode);
    console.log(choseHandAi, choseHand.alt);
    setTimeout(function () {
      elAiHand.src = `img/${choseHandAi}.svg`;
      console.log(elAiHand.src);
    }, 1000);

    uiChanger("elGameZone");
  });
});

elRefreshGame.addEventListener("click", () => {
  uiChanger("elGameZonePicker");
  elAiHand.src = "img/oval.svg";
});
