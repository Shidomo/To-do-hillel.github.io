import { createEl } from "./utility/utility.js";
import { addTaskToList } from "./addTask.js";

// Функция загрузки задач из localStorage
const loadTasks = () => {
  const storedObj = JSON.parse(localStorage.getItem("object"));
  // Если в localStorage есть сохраненные задачи
  if (storedObj) {
    storedObj.forEach((taskObj) => {
      const div = createEl("div", "list");
      const divTaskWrap = createEl("div", "task-wrapper");
      const divBtnsWrap = createEl("div", "btns-wrapper");
      const p = createEl("p", "input", taskObj.p);
      const checkBox = createEl("input", "checkbox");
      const removeBtn = createEl("button", "remove", "");
      const editBtn = createEl("button", "edit", "");
      const saveBtn = createEl("button", "save", "Save");

      saveBtn.classList.add("hidden");
      checkBox.type = "checkbox";
      div.setAttribute("data-id", taskObj.id);
      checkBox.setAttribute("data-checked", taskObj.checkbox);

      if (checkBox.dataset.checked === "true") {
        p.style.textDecoration = "line-through";
        checkBox.setAttribute("checked", null);
      } else {
        p.style.textDecoration = "none";
        checkBox.removeAttribute("checked");
      }

      divBtnsWrap.append(saveBtn);
      divBtnsWrap.append(editBtn);
      divBtnsWrap.append(removeBtn);

      divTaskWrap.append(checkBox);
      divTaskWrap.append(p);

      div.append(divTaskWrap);
      div.append(divBtnsWrap);

      // Добавление созданной задачи в список задач на странице
      addTaskToList(div, taskObj.id);
    });
  }
};

loadTasks();
