import { createMemo, Loading, lazy } from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { mainContainer } from "@/components/recipes/layout.recipe";
import { type GreetingT } from "@/components/ui/other";

const Greeting = lazy(() => import("@/components/ui/other"), { export: "Greeting" });

async function fetchUser(): Promise<GreetingT> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { name: "Jed" };
}

function App() {
  const user = createMemo<GreetingT>(fetchUser);
  return (
    <div class={mainContainer}>
      <h1 class={css({ fontSize: "4xl", fontWeight: "bold" })}>Welcome</h1>
      <Loading fallback={<p>Loading greeting...</p>}>
        <Greeting {...user()} />
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
