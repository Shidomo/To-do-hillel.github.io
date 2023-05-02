import { createEl } from "./form.js";

export function editTaskBtn() {
  const btn = createEl("button", "edit", "Edit task");

  return btn;
}

export function editFunc(div) {
  div.querySelector(".save").classList.remove("hidden");

  const p = div.querySelector("p");
  p.setAttribute("contenteditable", "true");
}
