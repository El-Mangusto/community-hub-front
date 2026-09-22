const listeners = [];

let state = {
  token: localStorage.getItem("token") || null,
};

export function getState() {
  return state;
}

export function setState(patch) {
  state = { ...state, ...patch };

  if (state.token) {
    localStorage.setItem("token", state.token);
  } else {
    localStorage.removeItem("token");
  }

  listeners.forEach((listener) => listener(state));
}

export function subscribe(listener) {
  listeners.push(listener);
}
