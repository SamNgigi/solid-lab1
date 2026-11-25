import { render } from "@solidjs/web";

import "./style.css";
import { mainContainer, nav, sidebar, main } from "@/components/recipes/nsm_grid.recipe";

function App() {
  return (
    <div class={mainContainer}>
      <nav class={nav}>Nav</nav>
      <aside class={sidebar}>Sidebar</aside>
      <main class={main}>Main</main>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
