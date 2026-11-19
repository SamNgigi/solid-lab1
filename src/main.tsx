import "./style.css";
import { container, stack } from "../styled-system/patterns";
import { button } from "./components/button.recipe";

import { render } from "@solidjs/web";
import { createSignal } from "solid-js";

function App() {
  const [name, setName] = createSignal("");
  const [agreed, setAgreed] = createSignal(false);
  const [welcome, setWelcome] = createSignal("");

  const submittable = () => name().trim() !== "" && agreed();

  return (
    <div class={container({ debug: true, p: "4", m: "4" })}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setWelcome(`Welcome ${name()}!`);
        }}
      >
        <div class={stack({ gap: "2" })}>
          <p>
            <input
              id="name"
              autocomplete="false"
              placeholder="Your Name"
              type="text"
              value={name()}
              onInput={(event) => setName(event.currentTarget.value)}
            />
          </p>
          <p>
            <label>
              <input
                id="tc"
                type="checkbox"
                checked={agreed()}
                onClick={(event) => setAgreed(event.currentTarget.checked)}
              />{" "}
              I agree to the terms
            </label>
          </p>
          <button
            class={button({ tone: submittable() ? "solid" : "ghost" })}
            disabled={!submittable()}
          >
            Sign Up
          </button>
          <p>{welcome()}</p>
        </div>
      </form>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
