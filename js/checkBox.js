// import { createTask } from "./addTask";
import { localObj } from "./form.js";
console.log(localObj);
// console.log(taskObj);

export function handleCheckBoxChange(taskObj) {
  const div = document.querySelector(`[data-id="${taskObj.id}"]`);
  const p = div.querySelector(`p.input`);
  const checkBox = div.querySelector("input");
  console.log(localObj);

  localObj.forEach((element) => {
    console.log(element);
    if (element.id === taskObj.id) {
      if (element.checkbox === false) {
        p.style.textDecoration = "line-through";
        checkBox.setAttribute("checked", " ");
        element.checkbox = true;
      } else {
        p.style.textDecoration = "none";
        checkBox.removeAttribute("checked");
        element.checkbox = false;
      }
    }
  });

  localStorage.setItem("object", JSON.stringify(localObj));
}
