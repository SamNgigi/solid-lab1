import { createSignal, createMemo, Loading, For, isPending } from "solid-js";
import { render } from "@solidjs/web";

import "./style.css";
import { css } from "@/styled-system/css";
import { mainContainer } from "@/components/recipes/layout.recipe";

const selectStyle = css({
  m: "1",
  p: "2",
  bg: "zinc.800",
  borderWidth: "1",
  borderColor: "white",
});
const optionStyle = css({ bg: "zinc.800" });

const stateCities = {
  California: ["Los Angeles", "San Francisco", "San Diego"],
  Florida: ["Miami", "Orlando", "Tampa"],
  Texas: ["Houston", "Dallas", "Austin"],
  Utah: ["Salt Lake City", "Provo", "West Valley City"],
};

type State = keyof typeof stateCities;

async function getStates() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return Object.keys(stateCities);
}

async function getCities(state: State) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return stateCities[state] ?? [];
}

function App() {
  const states = createMemo(getStates);
  const [selectedState, setState] = createSignal(() => states()[0]);
  const cities = createMemo(() => getCities(selectedState() as State));
  const [selectedCity, setCity] = createSignal(() => cities()[0]);

  return (
    <div class={mainContainer}>
      <Loading fallback={<p>Loading...</p>}>
        <select
          class={selectStyle}
          name="states"
          id="state"
          onChange={(e) => setState(e.currentTarget.value)}
        >
          <For each={states()}>
            {(state) => (
              <option class={optionStyle} value="state">
                {state}
              </option>
            )}
          </For>
        </select>
        <select
          class={selectStyle}
          name="cities"
          id="cities"
          disabled={isPending(cities)}
          onChange={(e) => setCity(e.currentTarget.value)}
        >
          <For each={cities()}>
            {(city) => (
              <option class={optionStyle} value="city">
                {city}
              </option>
            )}
          </For>
        </select>
        <p>
          Selection: {selectedState()}, {selectedCity()}
        </p>
      </Loading>
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
