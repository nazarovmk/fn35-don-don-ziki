import { elAiHand, elHumanHand, elScore, elStatus } from "./html-selection.js";

export function uiChangerByWinner(state) {
  const elTitle = elStatus.querySelector(".status__title");
  if (state === "tie") {
    elStatus.style.display = "block";
    elTitle.textContent = "You tied";
  } else if (state === "user") {
    elStatus.style.display = "block";
    elHumanHand.classList.add("win-shadow");
    elScore.innerText = +elScore.innerText + 1;
    elTitle.textContent = "You win";
  } else if (state === "ai") {
    elStatus.style.display = "block";
    elAiHand.classList.add("win-shadow");
    elScore.innerText = +elScore.innerText - 1;
    elTitle.textContent = "You lose";
  } else {
    console.error("Bunqay holat mavjud emas");
  }
}
