import { createEl } from "./help.js";
import { saveTaskBtn } from "./saveTaskBtn.js";

export function editTaskBtn(p) {
   const btn = createEl('button', 'edit-task-btn', 'Edit task');
   btn.addEventListener('click', () => {
      p.setAttribute('contenteditable', 'true');
   })

   return btn
}