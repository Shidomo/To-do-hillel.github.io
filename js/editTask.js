export const editFunc = (id) => {
  const div = document.querySelector(`[data-id="${id}"]`);
  const btnSave = div.querySelector(".save");
  const p = div.querySelector("p");

  p.setAttribute("contenteditable", "true");
  btnSave.classList.remove("hidden");
};
