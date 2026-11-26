import { createSignal, createMemo, Loading } from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { button } from "@/components/recipes/button.recipe";
import { mainContainer } from "@/components/recipes/layout.recipe";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// INFO: A stand-in for an LLM model API that streams its answer word by word.
async function* fakeModel(topic: string) {
  const answer = `${topic} are great. Here is a longer answer about ${topic}, streamed\
  one word at a time so you can read it as it arrives.`;
  for (const word of answer.split(" ")) {
    await sleep(120);
    yield word + " ";
  }
}

function App() {
  const [topic, setTopic] = createSignal("Signals");
  const reply = createMemo(async () => {
    const current = topic();
    let text = "";
    for await (const word of fakeModel(current)) {
      text += word;
    }
    return text;
  });

  return (
    <div class={mainContainer}>
      <p class={css({ display: "flex", gap: "2", alignItems: "center" })}>
        Ask about{" "}
        <button class={button()} onClick={() => setTopic("Signals")}>
          Signals
        </button>
        <button class={button()} onClick={() => setTopic("Stores")}>
          Stores
        </button>
      </p>
      <Loading fallback={<p>Thinking...</p>}>
        <p>{reply()}</p>
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
