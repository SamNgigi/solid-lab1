import { render } from "@solidjs/web";
import { createSignal, createMemo, Loading, isPending } from "solid-js";

import "./style.css";
import { css } from "@/styled-system/css";

async function fetchUser(id: string) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { id, name: `Explorer ${id}`, joined: 2020 + (Number(id) % 7) };
}

function App() {
  const [userId, setUserId] = createSignal("1");
  const user = createMemo(() => fetchUser(userId()));

  return (
    <div class={css({ debug: true, mt: "1" })}>
      <label>
        User ID{" "}
        <input
          id="num"
          name="num"
          type="number"
          min="1"
          value={userId()}
          onInput={(event) => setUserId(event.currentTarget.value)}
        />
      </label>
      <Loading fallback={<p>Loading user...</p>}>
        <h2 class={css({ fontSize: "2xl" })}>
          Username: {user().name} {isPending(user) ? "(updating...)" : ""}
        </h2>
        <p>Joined in {user().joined}</p>
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
