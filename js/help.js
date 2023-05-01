export function createEl(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function createForm() {
  const form = createEl("form");
  const toDoLabel = createEl("label", "", "Введите вашу задачу");
  const input = createEl("input", "to-do");
  input.name = "taskInput";
  const submitBtn = createEl("button", "submitBtn", "Добавить");

  form.addEventListener('submit', (e) => {
    e.preventDefault()
  })

  toDoLabel.append(input);
  form.append(toDoLabel);
  form.append(submitBtn);
  document.body.append(form);
}

createForm();

export const localObj = JSON.parse(localStorage.getItem("object")) || [];
export const form = document.querySelector("form");
