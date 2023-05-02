import { createEl, localObj } from "./help.js";

export function createRemoveBtn() {
  const removeBtn = createEl("button", "remove", "Delete task");
  //Вона тут непотрібна, ти в addTask.js на 37 лайні вішаешь/там є свій прикол- можу рассказати якйій
  // removeBtn.addEventListener("click", () => deleteTask(div));
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
