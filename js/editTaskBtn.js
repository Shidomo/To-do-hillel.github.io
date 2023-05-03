import { createEl } from "./form.js";

export function editTaskBtn() {
   const btn = createEl("button", "edit", "Edit task");

   return btn;
}

export function editFunc(id) {
   const div = document.querySelector(`[data-id="${id}"]`);
   const btnSave = div.querySelector(".save")
   const p = div.querySelector("p");

   p.setAttribute("contenteditable", "true");
   btnSave.classList.remove("hidden");
}
