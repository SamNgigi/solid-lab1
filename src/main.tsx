import { render, For } from "@solidjs/web";
import { createSignal, createStore } from "solid-js";

import "./style.css";
import { css } from "@/styled-system/css";
import { button } from "@/components/recipes/button.recipe";

// type Todo = {id: number; text: string; done:true};
let nextId = 3;

function App() {
  const [text, setText] = createSignal("");
  const [todos, setTodos] = createStore([
    { id: 1, text: "Learn Signals", done: true },
    { id: 2, text: "Learn Store", done: false },
  ]);

  const addTodo = (text: string) =>
    setTodos((draft) => {
      draft.push({ id: nextId++, text, done: false });
    });

  const toggleTodo = (id: number) =>
    setTodos((draft) => {
      const res = draft.find((td) => td.id === id);
      if (res) res.done = !res.done;
    });

  const clearDone = () =>
    setTodos((draft) => {
      return draft.filter((td) => td.done !== true);
    });

  return (
    <div class={css({ debug: true })}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!text().trim()) return;
          addTodo(text());
          setText("");
        }}
      >
        <input
          class={css({
            p: "1",
            mr: "0.5",
            border: "[1px solid #ccc]",
            rounded: "sm",
            _focus: { outline: "none", borderColor: "zinc.800" },
          })}
          id="in-todo"
          name="in-todo"
          placeholder="What needs doing?"
          type="text"
          value={text()}
          onInput={(event) => setText(event.currentTarget.value)}
        />
        <button class={button({ tone: "solid" })}> Add </button>
      </form>
      <For each={todos}>
        {(todo) => (
          <label style={{ display: "block" }}>
            <input
              id="out-todo"
              type="checkbox"
              checked={todo.done}
              onChange={() => toggleTodo(todo.id)}
            />{" "}
            <span style={{ "text-decoration": todo.done ? "line-through" : "none" }}>
              {todo.text}
            </span>
          </label>
        )}
      </For>
      <button class={button({ tone: "solid" })} onClick={clearDone}>
        Clear Done
      </button>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
