import { createEl } from "./utility/utility.js";
import { createTask } from "./addTask.js";

export const localObj = JSON.parse(localStorage.getItem("object")) || [];

const createForm = () => {
  const form = createEl("form", "form");
  const toDoLabel = createEl("label", "label", "Add your text");
  const input = createEl("input", "to-do");
  input.name = "taskInput";
  const submitBtn = createEl("button", "submitBtn", "Add");
  toDoLabel.append(input);
  form.append(toDoLabel);
  form.append(submitBtn);
  document.body.append(form);
};

const setupForm = () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", createTask);
};

createForm();
setupForm();
