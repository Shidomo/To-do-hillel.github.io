import { createEl, localObj } from "./help.js"

export function saveTaskBtn() {
   const btn = createEl('button', 'save', 'Save task');
   btn.classList.add('hidden');
   return btn
}

export function saveTaksFunc(div) {
   div.querySelector('.save').classList.add('hidden');

   console.log(div.innerHTML)
   localObj.forEach(element => {
      console.log(element)
   });





}
