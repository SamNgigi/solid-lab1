import { createMemo, isPending, Loading } from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { mainContainer } from "@/components/recipes/layout.recipe";
import { button } from "@/components/recipes/button.recipe";

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

  const like = async () => {
    await api.like();
  };

  return (
    <div class={mainContainer}>
      <Loading>
        <button class={button()} onClick={() => like()}>
          {isPending(likes) ? "Saving..." : `Like (${likes()})`}
        </button>
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
