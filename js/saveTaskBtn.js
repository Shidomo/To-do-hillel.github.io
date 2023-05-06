import { createEl, localObj } from "./form.js";

export function saveTaskBtn() {
  const btn = createEl("button", "save", "Save task");
  btn.classList.add("hidden");
  return btn;
}

export function saveTaksFunc(id) {
  const div = document.querySelector(`[data-id="${id}"]`);
  const p = div.querySelector(`p.input`);
  const btnSave = div.querySelector(".save");

  localObj.forEach((element) => {
    console.log(element);
    if (element.id === id) {
      element.p = p.textContent;
    }
  });

  localStorage.setItem("object", JSON.stringify(localObj));
  p.removeAttribute("contenteditable");
  btnSave.classList.add("hidden");
}
