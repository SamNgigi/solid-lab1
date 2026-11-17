import { render } from "@solidjs/web";

function HelloWorld() {
  return <div>Hello World!</div>;
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <HelloWorld />, root);
