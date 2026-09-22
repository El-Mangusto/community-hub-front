import { createElement } from "../utils/dom.js";

export function RegisterForm({ onSubmit }) {
  const usernameInput = createElement("input", {
    type: "text",
    placeholder: "User",
    class: "form-input",
  });
  const passwordInput = createElement("input", {
    type: "password",
    placeholder: "Password",
    class: "form-input",
  });
  const errorBox = createElement("div", { class: "form-error" });
  const submitButton = createElement(
    "button",
    { type: "submit", class: "form-button" },
    ["Register"],
  );

  const form = createElement(
    "form",
    {
      onSubmit: (event) => {
        event.preventDefault();
        errorBox.textContent = "";
        onSubmit({
          username: usernameInput.value,
          password: passwordInput.value,
        });
      },
    },
    [
      createElement("h2", { class: "form-title" }, ["Register"]),
      usernameInput,
      passwordInput,
      errorBox,
      submitButton,
    ],
  );

  form.errorBox = errorBox;
  return form;
}
