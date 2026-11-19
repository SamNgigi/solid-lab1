import "./style.css";
import { container } from "../styled-system/patterns";
import Avatar from "./other";

import { render } from "@solidjs/web";
import { createSignal } from "solid-js";

function App() {
  const [name, setName] = createSignal("Ada Lovelace");

  return (
    <>
      <div class={container({ debug: true, p: "8" })}>
        <input
          id="set-name"
          name="name"
          autocomplete="false"
          value={name()}
          onInput={(event) => setName(event.currentTarget.value)}
        />
        <div>
          <Avatar name={name()} />
          <Avatar name={name()} size={96} />
        </div>
      </div>
    </>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
