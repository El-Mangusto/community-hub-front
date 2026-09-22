import { createElement } from "../utils/dom.js";

export function LoginForm({ onSubmit }) {
  const usernameInput = createElement("input", {
    type: "text",
    placeholder: "Username",
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
    ["Login"],
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
      createElement("h2", { class: "form-title" }, ["Login"]),
      usernameInput,
      passwordInput,
      errorBox,
      submitButton,
    ],
  );

  form.errorBox = errorBox;
  return form;
}
