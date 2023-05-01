import { createEl, localObj, form } from "./help.js";
import { deleteTask, createRemoveBtn } from "./RemoveTaskbtn.js";
import { editTaskBtn } from "./editTaskBtn.js";

export function createTask() {
  const div = createEl("div", "list");
  const formData = new FormData(form);
  console.log(formData);
  for (const [key, value] of formData.entries()) {
    if (value.trim().length > 0) {
      const divTaskWrap = createEl('div', 'task-wrapper');
      const divBtnsWrap = createEl('div', 'btns-wrapper');
      const p = createEl('p', 'input', value);
      const checkBox = createEl('input', 'checkbox');
      checkBox.type = 'checkbox'
      const removeBtn = createRemoveBtn(div);
      const editBtn = editTaskBtn(p);

      divBtnsWrap.append(editBtn);
      divBtnsWrap.append(removeBtn);
      divTaskWrap.append(checkBox);
      divTaskWrap.append(p);
      div.append(divTaskWrap);
      div.append(divBtnsWrap);
    }
  }
  if (div.children.length > 0) {
    localObj.push(div.innerHTML);
    localStorage.setItem("object", JSON.stringify(localObj));
    addTaskToList(div);
  }
}
export function addTaskToList(div) {
  document.body.append(div);
  const removeBtn = div.querySelector("button.remove");

  removeBtn.addEventListener("click", () => deleteTask(div));
}
