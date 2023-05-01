import { createEl, localObj, form } from "./help.js";
import { deleteTask, createRemoveBtn } from "./RemoveTaskbtn.js";

export function createTask() {
  const div = createEl("div", "list");
  const formData = new FormData(form);
  for (const [key, value] of formData.entries()) {
    if (value.trim().length > 0) {
      const input = createEl("input", key, value);
      input.setAttribute('value', value)
      const removeBtn = createRemoveBtn(div);
      div.append(input);
      div.append(removeBtn);
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
