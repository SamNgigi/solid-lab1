import "./style.css";
import { container } from "../styled-system/patterns";
import { css } from "../styled-system/css";
import { button, type ButtonVariants } from "./components/button.recipe";

import { render, type JSX } from "@solidjs/web";
import { createSignal, omit } from "solid-js";

type ButtonProps = ButtonVariants & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const others = omit(props, "class", "tone", "children");
  return (
    <button {...others} class={button({ tone: props.tone })}>
      {props.children}
    </button>
  );
}

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <div class={container({ debug: true, p: "2", m: "2" })}>
      <p>Saved {count()} times</p>
      <div class={css({ display: "flex", width: "fit-content", gap: "2" })}>
        <Button tone="solid" onClick={() => setCount((val) => val + 1)}>
          Save
        </Button>

        <Button tone="danger" disabled={count() === 0} onClick={() => setCount(0)}>
          Reset
        </Button>

        {/* <button */}
        {/*   class={button({ tone: 'solid' })} */}
        {/*   onClick={() => setCount((val) => val + 1)} */}
        {/* > */}
        {/*   Save */}
        {/* </button> */}
        {/* <button */}
        {/*   class={button({ tone: count() === 0 ? 'ghost' : 'danger' })} */}
        {/**/}
        {/*   onClick={() => setCount(0)} */}
        {/* > */}
        {/*   Reset */}
        {/* </button> */}
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
