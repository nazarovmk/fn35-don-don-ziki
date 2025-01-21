import { aiChooser } from "./ai-chooser.js";
import { checkWinner } from "./chesk-winner.js";
import {
  elAiHand,
  elHands,
  elHumanHand,
  elRefreshGame,
  elStatus,
  elGameZone,
  elrulesWrapper,
  elcloseButton,
  elrulesCenter,
} from "./html-selection.js";
import { initialState } from "./settings.js";
import { uiChangerByWinner } from "./ui-changer-by-winner.js";
import { uiChanger } from "./ui-changer.js";
elHands.forEach((hand) => {
  hand.addEventListener("click", (event) => {
    const clickedElement = event.target;
    const choseHand = clickedElement.querySelector(".game-zone__img");
    elHumanHand.src = choseHand.src;

    const choseHandAi = aiChooser(initialState.mode, choseHand.alt);
    console.log(choseHandAi, choseHand.alt);
    setTimeout(function () {
      elAiHand.src = `img/${choseHandAi}.svg`;
      const currenAction = checkWinner(choseHand.alt, choseHandAi);
      uiChangerByWinner(currenAction);
    }, 1000);

    uiChanger("elGameZone");
  });
});

elRefreshGame.addEventListener("click", () => {
  uiChanger("elGameZonePicker");
  elAiHand.src = "img/oval.svg";
  elAiHand.classList.remove("win-shadow");
  elHumanHand.classList.remove("win-shadow");
  elStatus.style.display = "none";
});

// Rules
document.addEventListener("DOMContentLoaded", () => {
  elrulesWrapper.addEventListener("click", () => {
    elrulesCenter.style.display = "flex";
    elGameZone.style.display = "none";
    elrulesWrapper.style.display = "none";
  });

  elcloseButton.addEventListener("click", () => {
    elrulesCenter.style.display = "none";
    elGameZone.style.display = "block";
    elrulesWrapper.style.display = "block";
  });
});
