import { RegisterForm } from "../components/RegisterForm.js";
import { register } from "../api/authApi.js";
import { ApiError } from "../api/httpClient.js";

export function RegisterPage(container) {
  const form = RegisterForm({
    onSubmit: async (data) => {
      try {
        await register(data);
        alert("Registration successful");
      } catch (err) {
        if (err instanceof ApiError && err.body?.validationError) {
          form.errorBox.textContent = Object.values(
            err.body.validationError,
          ).join(", ");
        } else if (err instanceof ApiError && err.body?.message) {
          form.errorBox.textContent = err.body.message;
        } else {
          form.errorBox.textContent = "Something went wrong";
        }
      }
    },
  });

  container.innerHTML = "";
  container.appendChild(form);
}
