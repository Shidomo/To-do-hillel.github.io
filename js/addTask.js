import { createEl, localObj } from "./help.js";
import { deleteTask, createRemoveBtn } from "./RemoveTaskbtn.js";
import { editTaskBtn, editFunc } from "./editTaskBtn.js";
import { saveTaskBtn, saveTaksFunc } from "./saveTaskBtn.js";


export function createTask() {
  const div = createEl("div", "list");
  const divTaskWrap = createEl('div', 'task-wrapper');
  const divBtnsWrap = createEl('div', 'btns-wrapper');
  const inputValue = document.querySelector('input').value

  if (inputValue) {
    //ось цей елемент потрібно виносити на модуль як з кнопками
    const p = createEl('p', 'input', inputValue);
    const checkBox = createEl('input', 'checkbox');
    checkBox.type = 'checkbox'
    //
    const removeBtn = createRemoveBtn();
    const editBtn = editTaskBtn();
    const saveBtn = saveTaskBtn();

    divBtnsWrap.append(saveBtn)
    divBtnsWrap.append(editBtn);
    divBtnsWrap.append(removeBtn);
    divTaskWrap.append(checkBox);
    divTaskWrap.append(p);
    div.append(divTaskWrap);
    div.append(divBtnsWrap);
  }

  // console.log(localObj)
  // console.log(div)

  // localObj.push(div.innerHTML);
  // localStorage.setItem("object", JSON.stringify(localObj));
  // addTaskToList(div);

  if (div.children.length > 0) {
    localObj.push(div.innerHTML);
    localStorage.setItem("object", JSON.stringify(localObj));
    addTaskToList(div);
  }
}
export function addTaskToList(div) {
  document.body.append(div);
  const removeBtn = div.querySelector("button.remove");
  const editBtn = div.querySelector('button.edit');
  const saveBtn = div.querySelector('button.save')

  editBtn.addEventListener('click', () => editFunc(div))
  saveBtn.addEventListener('click', () => saveTaksFunc(div))
  removeBtn.addEventListener("click", () => deleteTask(div));

}
