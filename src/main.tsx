import { render, Repeat } from "@solidjs/web";

import "./style.css";
import { cx, css } from "@/styled-system/css";
import { flexContainer, flexBox, mainContainer } from "@/components/recipes/flex.recipe";

function App() {
  return (
    <div class={cx(mainContainer(), flexContainer({ jc: "center", ai: "center", ac: "center" }))}>
      <Repeat count={4}>
        {(_) => (
          <div class={cx(flexContainer(), flexBox({ br: "set" }))}>
            <div class={flexBox({ dir: "col" })}>
              <h3 class={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello World</h3>
              <p class={css({ fontSize: "md" })}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi nesciunt, facere
                vel dolorem dolor delectus sunt. Incidunt asperiores quaerat, nobis tempore dolor
                deleniti reiciendis, cum ex voluptatem adipisci quisquam sit.
              </p>
            </div>
          </div>
        )}
      </Repeat>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
