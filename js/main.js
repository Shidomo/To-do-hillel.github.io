// Импорт необходимых функций из других файлов
import { createEl, localObj } from "./form.js";
import { addTaskToList } from "./addTask.js";
import { createRemoveBtn } from "./RemoveTaskbtn.js";
import { editTaskBtn } from "./editTaskBtn.js";
import { saveTaskBtn } from "./saveTaskBtn.js";

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
      checkBox.checked = taskObj.checkBox;

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

      checkBox.addEventListener("click", function () {
        const div = document.querySelector(`[data-id="${taskObj.id}"]`);
        console.log(div);
        const p = div.querySelector(`p.input`);
        const checkBox = div.querySelector("input");
        console.log(localObj);

        localObj.forEach((element) => {
          console.log(element);
          if (checkBox.checked) {
            if (element.id === taskObj.id) {
              p.style.textDecoration = "line-through";
              element.checkbox = true;
            }
          } else {
            p.style.textDecoration = "none";
            element.checkbox = false;
          }
        });

        if (element.checkbox) {
          //p-стили
        } else {
        }
        // taskObj.checkbox;
        // console.log(taskObj.checkbox);
        // if (checkBox.checked) {
        //   localObj.checkbox;
        //   p.style.textDecoration = "line-through";
        // } else {
        //   p.style.textDecoration = "none";
        // }

        localStorage.setItem("object", JSON.stringify(localObj));
      });

      // export function saveTaksFunc(id) {
      //   const div = document.querySelector(`[data-id="${id}"]`);
      //   const p = div.querySelector(`p.input`);
      //   const btnSave = div.querySelector("input");

      //   localObj.forEach((element) => {
      //     console.log(element);
      //     if (element.id === id) {
      //       element.p = p.textContent;
      //     }
      //   });

      //   localStorage.setItem("object", JSON.stringify(localObj));
      //   p.removeAttribute("contenteditable");
      //   btnSave.classList.add("hidden");
      // }

      // Добавление созданной задачи в список задач на странице
      addTaskToList(div, taskObj.id);
    });
  }
}

loadTasks();
