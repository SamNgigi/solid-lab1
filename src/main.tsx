import { render } from "@solidjs/web";
import { createSignal, createMemo } from "solid-js";

import "./style.css";
import { css } from "@/styled-system/css";

const temps = { Oslo: 4, Lisbon: 21, Tokyo: 16 };
type City = keyof typeof temps;
type ForecastT = { city: string; temp: number; sky: string };

async function fetchForecast(city: string): Promise<ForecastT> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return { city, temp: temps[city as City], sky: city === "Oslo" ? "Snow" : "Sunny" };
}

type Props = { city: City };

function Forecast(props: Props) {
  const forecast = createMemo(() => fetchForecast(props.city));
  return (
    <p>
      {forecast().city}: {forecast().temp}°C, {forecast().sky}
    </p>
  );
}

function App() {
  const [city, setCity] = createSignal<City>("Oslo");

  return (
    <div class={css({ debug: true, mt: "1" })}>
      <h1></h1>
      <select
        name="city"
        id="city"
        onChange={(event) => setCity(event.currentTarget.value as City)}
      >
        <option value="oslo">Oslo</option>
        <option value="lisbon">Lisbon</option>
        <option value="tokyo">Tokyo</option>
      </select>
      <Forecast city={city()} />
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
