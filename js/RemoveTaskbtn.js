import { createEl, localObj } from "./help.js";

export function createRemoveBtn(div) {
  const removeBtn = createEl("button", "remove", "удалить задачу");
  removeBtn.addEventListener("click", () => deleteTask(div));
  return removeBtn;
}

export function deleteTask(div) {
  const index = localObj.indexOf(div.innerHTML);

  div.remove();
  if (index !== -1) {
    localObj.splice(index, 1);
    localStorage.setItem("object", JSON.stringify(localObj));
  }
}
