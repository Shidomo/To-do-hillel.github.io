import { createEl } from "./help.js"

export function saveTaskBtn(p) {
   const btn = createEl('button', 'save-task-btn', 'Save task');

   btn.addEventListener('click', () => {
      p.setAttribute('contenteditable', 'true');
   })


   return btn
}