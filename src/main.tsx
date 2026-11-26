import { createMemo, Loading, Errored } from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { button } from "@/components/recipes/button.recipe";
import { mainContainer } from "@/components/recipes/layout.recipe";

let attempt = 0;
async function fetchReport(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  if (++attempt === 1) {
    throw new Error("The report service is temporarily unavailable");
  }
  return "Report ready";
}

function Result() {
  const report = createMemo(fetchReport);
  return (
    <Loading fallback={<p>Loading report..</p>}>
      <p>{report()}</p>
    </Loading>
  );
}

const errorMessage = (error: unknown): string => {
  return error instanceof Error ? error.message : String(error);
};

function App() {
  return (
    <div class={mainContainer}>
      <h1 class={css({ fontSize: "2xl", fontWeight: "bold" })}>Async Error</h1>
      <Errored
        fallback={(error, reset) => (
          <div role="alert" class={css({ display: "flex", gap: "2", alignItems: "center" })}>
            <p>{errorMessage(error())}</p>
            <button class={button()} onClick={reset}>
              Try again
            </button>
          </div>
        )}
      >
        <Result />
      </Errored>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
