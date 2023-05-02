import { createEl, localObj } from "./form.js";
export function createRemoveBtn() {
  const removeBtn = createEl("button", "remove", "Delete task");

  return removeBtn;
}

export function deleteTask(id) {
  const index = localObj.findIndex((obj) => obj.id === id);

  const div = document.querySelector(`[data-id="${id}"]`);
  div.remove();

  if (index !== -1) {
    localObj.splice(index, 1);
    localStorage.setItem("object", JSON.stringify(localObj));
  }
}
