import { createEl, localObj } from "./form.js";
import { deleteTask, createRemoveBtn } from "./RemoveTaskbtn.js";
import { editTaskBtn, editFunc } from "./editTaskBtn.js";
import { saveTaskBtn, saveTaksFunc } from "./saveTaskBtn.js";

export function createTask() {
  let taskObj = {}; // создал пустой объект из которого я беру id

  const div = createEl("div", "list");
  div.setAttribute("data-id", taskObj.id); // задаем атрибут data-id со значением id объекта

  const divTaskWrap = createEl("div", "task-wrapper");
  const divBtnsWrap = createEl("div", "btns-wrapper");

  const inputValue = document.querySelector("input").value;
  const p = createEl("p", "input");
  const checkBox = createEl("input", "checkbox");

  checkBox.type = "checkbox";

  if (inputValue.trim().length > 0) {
    p.textContent = inputValue;

    const removeBtn = createRemoveBtn();
    const editBtn = editTaskBtn();
    const saveBtn = saveTaskBtn();

    divBtnsWrap.append(saveBtn, editBtn, removeBtn);
    divTaskWrap.append(checkBox, p);
    div.append(divTaskWrap, divBtnsWrap);

    taskObj = {
      id: Date.now(), // задаем уникальный идентификатор
      checkbox: checkBox.checked, // задаем состояние чекбокса
      p: p.textContent, // задаем текст задачи
    };
  }

  localObj.push(taskObj); // добавляем объект задачи в локалку
  localStorage.setItem("object", JSON.stringify(localObj)); // сохраняем локальку
  addTaskToList(div, taskObj.id); // добавляем задачу в список задач с id
}

export function addTaskToList(div, id) {
  document.body.append(div);
  const removeBtn = div.querySelector("button.remove");
  const editBtn = div.querySelector("button.edit");
  const saveBtn = div.querySelector("button.save");

  editBtn.addEventListener("click", () => editFunc(id));
  saveBtn.addEventListener("click", () => saveTaksFunc(id));
  removeBtn.addEventListener("click", () => deleteTask(id));
}
