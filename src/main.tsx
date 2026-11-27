import { action, createOptimisticStore, createSignal, refresh, For, Loading } from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { mainContainer } from "@/components/recipes/layout.recipe";
import { button } from "@/components/recipes/button.recipe";

import { api, newId, type Todo } from "@/mock_api";

function App() {
  type TodoView = Todo & { pending?: boolean };
  const [error, setError] = createSignal("");
  const [todos, setTodos] = createOptimisticStore<TodoView[]>(() => api.list(), []);

  const toggle = action(function* (id) {
    setTodos((draft) => {
      const todo = draft.find((todo) => todo.id === id);
      if (!todo) return;
      todo.done = !todo.done;
      todo.pending = true;
    });
    yield api.toggle(id);
    refresh(todos);
  });

  const add = action(function* (text: string) {
    const todo = { id: newId(), text, done: false };
    setTodos((draft) => {
      draft.push({ ...todo, pending: true });
    });
    yield api.add(todo);
    refresh(todos);
  });

  return (
    <div class={mainContainer}>
      <Loading fallback={<p>Loading todos...</p>}>
        <div class={css({ display: "flex", alignItems: "center", gap: "2" })}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const text = String(new FormData(form).get("text") ?? "").trim();
              if (text) {
                add(text);
              }
              form.reset();
            }}
          >
            <input
              id="todo"
              class={css({ border: "[1px solid #ccc]", rounded: "lg", p: "1.5", m: "0.5" })}
              placeholder="New todo"
              name="text"
              type="text"
            />
            <button class={button()}>Add</button>
          </form>
          <p role="alert">
            <label>
              <input
                id="fail-next"
                name="fail-next"
                type="checkbox"
                onChange={(event) => {
                  api.failNext = event.currentTarget.checked;
                  if (!api.failNext) setError("");
                }}
              />{" "}
              Fail the next toggle
            </label>
          </p>
        </div>
        <For each={todos}>
          {(todo) => (
            <label
              class={css({
                display: "block",
                m: "[0.25rem 0]",
                opacity: todo.pending ? "0.5" : "1",
              })}
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() =>
                  toggle(todo.id).catch((err) => {
                    setError(err.message);
                    api.failNext = true;
                  })
                }
              />{" "}
              {todo.text}
            </label>
          )}
        </For>
        <p role="alert">{error()}</p>
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
