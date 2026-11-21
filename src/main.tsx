import { render, Portal } from "@solidjs/web";

import "./style.css";

function App() {
  return (
    <div class="app-container">
      <p>Just some text inside a div that has a restricted size.</p>
      <Portal>
        <div class="popup">
          <h1>Popup</h1>
          <p>Some text we might need for something</p>
        </div>
      </Portal>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
