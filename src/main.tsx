import { render, Repeat } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { mainContainer, gridContainer, box } from "@/components/recipes/grid.recipe";

function App() {
  return (
    <div class={mainContainer}>
      <h1 class={css({ fontSize: "4xl", fontWeight: "bold", textAlign: "center", p: "2" })}>
        Responsive Grid
      </h1>
      <div class={gridContainer()}>
        <Repeat count={10}>
          {(_) => (
            <div class={box}>
              <h2 class={css({ fontSize: "2xl", fontWeight: "bold" })}>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus cupiditate ab
                quia magni numquam vitae, similique eos nam, dolorum sed iste doloremque ullam
                aperiam eaque assumenda animi ratione quidem!
              </p>
            </div>
          )}
        </Repeat>
      </div>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
