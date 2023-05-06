import { createEl } from "./utility/utility.js";
import { localObj } from "./CreatePrevForm.js";
import { deleteTask } from "./RemoveTask.js";
import { editFunc } from "./editTask.js";
import { saveTaksFunc } from "./saveTask.js";
import { handleCheckBoxChange } from "./checkBox.js";

export function createTask() {
  let taskObj = {}; // создал пустой объект из которого я беру id

  const div = createEl("div", "list");
  const divTaskWrap = createEl("div", "task-wrapper");
  const divBtnsWrap = createEl("div", "btns-wrapper");

  const inputValue = document.querySelector("input").value;
  const p = createEl("p", "input");
  const checkBox = createEl("input", "checkbox");

  checkBox.type = "checkbox";

  if (inputValue.trim().length > 0) {
    p.textContent = inputValue;
    const removeBtn = createEl("button", "remove", "Delete task");
    const editBtn = createEl("button", "edit", "Edit task");
    const saveBtn = createEl("button", "save", "Save task");
    saveBtn.classList.add("hidden");

    divBtnsWrap.append(saveBtn, editBtn, removeBtn);
    divTaskWrap.append(checkBox, p);
    div.append(divTaskWrap, divBtnsWrap);

    taskObj = {
      id: Date.now(), // задаем уникальный идентификатор
      checkbox: checkBox.checked, // задаем состояние чекбокса
      p: p.textContent, // задаем текст задачи
    };
    localObj.push(taskObj); // добавляем объект задачи в локалку
    localStorage.setItem("object", JSON.stringify(localObj)); // сохраняем локальку
    addTaskToList(div, taskObj.id); // добавляем задачу в список задач с id
  }
}

export function addTaskToList(div, id) {
  document.body.append(div);
  const removeBtn = div.querySelector("button.remove");
  const editBtn = div.querySelector("button.edit");
  const saveBtn = div.querySelector("button.save");
  const checkBox = div.querySelector("input.checkbox");

  editBtn.addEventListener("click", () => editFunc(id));
  saveBtn.addEventListener("click", () => saveTaksFunc(id));
  removeBtn.addEventListener("click", () => deleteTask(id));
  checkBox.addEventListener("change", () => handleCheckBoxChange(id));
}
