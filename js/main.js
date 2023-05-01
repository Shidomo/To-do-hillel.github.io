import { createEl, form } from "./help.js";
import { createTask, addTaskToList } from "./addTask.js";

function setupForm() {
   form.addEventListener("submit", createTask);
}

function renderTasks() {
   const savedTasks = JSON.parse(localStorage.getItem("object"));
   if (savedTasks && savedTasks.length > 0) {
      savedTasks.forEach((task) => {
         const div = createEl("div", "list");
         div.innerHTML = task;
         addTaskToList(div);
      });
   }
}

setupForm();
renderTasks();
