const elGameZone = document.getElementById("gameZone");
const elStatus = document.getElementById("status");
const elGameZonePicker = document.getElementById("gameZonePicker");
const elHands = document.querySelectorAll(".js-hand");
const elHumanHand = document.getElementById("humanHand");
const elAiHand = document.getElementById("aiHand");
const elRefreshGame = document.getElementById("refreshGame");
const elScore = document.getElementById("score");
const elrulesWrapper = document.getElementById("rules-wrapper");
const elcloseButton = document.querySelector(".rules-x");
const elrulesCenter = document.getElementById("rules-center");

export {
  elGameZone,
  elGameZonePicker,
  elHands,
  elHumanHand,
  elAiHand,
  elRefreshGame,
  elStatus,
  elScore,
  elrulesWrapper,
  elcloseButton,
  elrulesCenter,
};
