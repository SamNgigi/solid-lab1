import { action, createOptimisticStore, For, Loading } from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { mainContainer } from "@/components/recipes/layout.recipe";
import { button } from "@/components/recipes/button.recipe";

import { server, type Message } from "@/mock_server";

let nextId = 1;
function App() {
  type MessageView = Message & { pending?: boolean };
  const [messages, setMessages] = createOptimisticStore<MessageView[]>(() => server.watch(), []);

  const send = action(function* (text: string) {
    const id = `m${nextId++}`;
    setMessages((draft) => {
      draft.push({ id, text, pending: true });
    });
    yield server.send({ id, text });
  });

  return (
    <div class={mainContainer}>
      <Loading fallback={<p>Connecting...</p>}>
        <For each={messages}>
          {(msg) => (
            <p class={css({ opacity: msg.pending ? "0.5" : "1" })}>
              <b>Msg:</b> {msg.text}
            </p>
          )}
        </For>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const form = event.currentTarget;
            const text = String(new FormData(form).get("text") ?? "").trim();
            if (text) {
              send(text);
            }
            form.reset();
          }}
        >
          <input
            class={css({ border: "[1px solid #ccc]", rounded: "lg", p: "2" })}
            id="msg"
            name="text"
            placeholder="Say something"
            type="text"
          />
          <button class={button()}>Send</button>
        </form>
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
