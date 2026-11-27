import {
  action,
  createMemo,
  createOptimistic,
  createSignal,
  refresh,
  isPending,
  Loading,
} from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { mainContainer } from "@/components/recipes/layout.recipe";
import { compound_button } from "@/components/recipes/button.recipe";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// INFO: A pretend server: it keeps the like count and takes 600ms to save.
const api = {
  likes: 41,
  async read(): Promise<number> {
    await sleep(100);
    return api.likes;
  },
  async like(fail: boolean = false) {
    await sleep(600);
    if (fail) throw new Error("Could not save your like.");
    api.likes += 1;
  },
};

function App() {
  const likes = createMemo(() => api.read());
  const [shown, setShown] = createOptimistic(() => likes());
  const [failNext, setFailNext] = createSignal(false);
  const [error, setError] = createSignal("");

  const like = action(async function* (fail: boolean) {
    setShown((n) => n + 1);
    yield api.like(fail);
    refresh(likes);
  });

  const save = () => {
    setError("");
    like(failNext()).catch((err) => setError(err.message));
  };

  const btn = () => compound_button({ loading: isPending(likes), hasLoadingText: true });

  return (
    <div class={mainContainer}>
      <Loading>
        <button
          class={btn().root}
          disabled={isPending(likes)}
          aria-busy={isPending(likes) ? "true" : undefined}
          onClick={save}
        >
          <span class={btn().spinner} aria-hidden="true" />
          <span class={btn().content}>
            <span class={btn().label}>Like ({shown()})</span>
            <span class={btn().loadingLabel}>Saving&hellip;</span>
          </span>
        </button>
        <label class={css({ mx: "1" })}>
          <input
            id="fail-next"
            name="fail-next"
            type="checkbox"
            checked={failNext()}
            onChange={(event) => setFailNext(event.currentTarget.checked)}
          />{" "}
          Fail next save
        </label>
        <p role="alert">{error()}</p>
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
