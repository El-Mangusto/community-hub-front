import { LoginForm } from "../components/LoginForm.js";
import { login } from "../api/authApi.js";
import { ApiError } from "../api/httpClient.js";
import { setState } from "../state/authStore.js";

export function LoginPage(container) {
  const form = LoginForm({
    onSubmit: async (data) => {
      try {
        const response = await login(data);
        setState({ token: response.token });
        alert("Login successful");
      } catch (err) {
        if (
          (err instanceof ApiError && err.status === 401) ||
          err.body?.validationError
        ) {
          form.errorBox.textContent = "Invalid username or password";
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
