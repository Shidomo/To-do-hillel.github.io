import { localObj } from "./CreatePrevForm.js";

export function handleCheckBoxChange(id) {
  const div = document.querySelector(`[data-id="${id}"]`);
  const p = div.querySelector(`p.input`);
  const checkBox = div.querySelector("input");

  localObj.forEach((element) => {
    if (element.id === id) {
      if (element.checkbox === false) {
        p.style.textDecoration = "line-through";
        checkBox.setAttribute("checked", null);
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
