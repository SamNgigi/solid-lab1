import { render } from "@solidjs/web";

import "./style.css";
import { container } from "@/styled-system/patterns";
import { Steps } from "@/components/ui/other";

function App() {
  return (
    <div class={container({ debug: true, p: "2", m: "2" })}>
      <Steps>
        <p>Pick a product.</p>
        <p>Add it to your cart.</p>
        <p>Checkout.</p>
      </Steps>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
