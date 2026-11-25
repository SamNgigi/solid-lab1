import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { mainContainer, gridContainer, box } from "@/components/recipes/grid.recipe";
import { button } from "@/components/recipes/button.recipe";

function App() {
  return (
    <div class={mainContainer}>
      <div class={gridContainer()}>
        <div class={box}>
          <h2 class={css({ fontSize: "3xl", fontWeight: "bold" })}>Lorem, ipsum.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente in, magnam
            reprehenderit iure autem assumenda porro voluptates explicabo?
          </p>
          <button class={button()}>LEARN MORE</button>
        </div>
        <div class={box}>
          <h2 class={css({ fontSize: "3xl", fontWeight: "bold" })}>Lorem ipsum dolor sit</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia voluptates facere dolor
            excepturi laboriosam assumenda, consectetur deserunt odit minus aut pariatur ad
            blanditiis praesentium error sunt sit.
          </p>
          <button class={button()}>DISCOVER</button>
        </div>
        <div class={box}>
          <h2 class={css({ fontSize: "3xl", fontWeight: "bold" })}>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi illum maxime dolores at
            quod exercitationem facilis id velit minus tenetur ea, quas aut officiis?
          </p>
          <button class={button()}>OPTIMIZE</button>
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
