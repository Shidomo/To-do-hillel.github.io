import { localObj } from "./CreatePrevForm.js";

export const saveTaksFunc = (id) => {
  const div = document.querySelector(`[data-id="${id}"]`);
  const p = div.querySelector(`p.input`);
  const btnSave = div.querySelector(".save");

  localObj.forEach((element) => {
    if (element.id === id) {
      element.p = p.textContent;
    }
  });

  localStorage.setItem("object", JSON.stringify(localObj));
  p.removeAttribute("contenteditable");
  btnSave.classList.add("hidden");
};
