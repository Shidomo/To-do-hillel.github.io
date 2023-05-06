// Импорт необходимых функций из других файлов
import { createEl, localObj } from "./form.js";
import { addTaskToList } from "./addTask.js";
import { createRemoveBtn } from "./RemoveTaskbtn.js";
import { editTaskBtn } from "./editTaskBtn.js";
import { saveTaskBtn } from "./saveTaskBtn.js";
import { handleCheckBoxChange } from "./checkBox.js";

// Функция загрузки задач из localStorage
function loadTasks() {
  // Получение сохраненных задач из localStorage и преобразование строки в объект
  const storedObj = JSON.parse(localStorage.getItem("object"));
  // Если в localStorage есть сохраненные задачи
  if (storedObj) {
    // Для каждого объекта задачи создаем элем
    storedObj.forEach((taskObj) => {
      const div = createEl("div", "list");
      div.setAttribute("data-id", taskObj.id);

      const divTaskWrap = createEl("div", "task-wrapper");
      const divBtnsWrap = createEl("div", "btns-wrapper");

      const p = createEl("p", "input", taskObj.p);

      const checkBox = createEl("input", "checkbox");
      checkBox.type = "checkbox";

      checkBox.setAttribute("data-checked", taskObj.checkbox);

      if (checkBox.dataset.checked === "true") {
        p.style.textDecoration = "line-through";
        checkBox.setAttribute("checked", " ");
      } else {
        p.style.textDecoration = "none";
        checkBox.removeAttribute("checked");
      }

      const removeBtn = createRemoveBtn();
      const editBtn = editTaskBtn();
      const saveBtn = saveTaskBtn();

      divBtnsWrap.append(saveBtn);
      divBtnsWrap.append(editBtn);
      divBtnsWrap.append(removeBtn);

      divTaskWrap.append(checkBox);
      divTaskWrap.append(p);

      div.append(divTaskWrap);
      div.append(divBtnsWrap);

      checkBox.addEventListener("change", () => {
        handleCheckBoxChange(taskObj, localObj);
      });
      // Добавление созданной задачи в список задач на странице
      addTaskToList(div, taskObj.id);
    });
  }
}

loadTasks();
