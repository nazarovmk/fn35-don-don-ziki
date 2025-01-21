import {
  elGameZone,
  elGameZonePicker,
  elrulesWrapper,
} from "./html-selection.js";

export function uiChanger(type) {
  if (type === "elGameZone") {
    elGameZone.style.display = "none";
    elrulesWrapper.style.display = "none";
    elGameZonePicker.style.display = "block";
  } else if (type === "elGameZonePicker") {
    elGameZonePicker.style.display = "none";
    elrulesWrapper.style.display = "block";
    elGameZone.style.display = "block";
  } else {
    console.error("Bunday tur mavjud emas");
  }
}
