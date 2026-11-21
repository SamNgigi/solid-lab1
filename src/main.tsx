import { render, type JSX } from "@solidjs/web";
// import { createSignal, type Signal } from 'solid-js';

import "./style.css";
import { container } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import { button } from "@/components/recipes/button.recipe";
import { type Cart, createCart } from "@/components/ui/other";

type CartProps = {
  name?: string;
  cart: Cart;
};

function Header(props: CartProps): JSX.Element {
  return <h1>Shop . {props.cart.count()} in cart</h1>;
}

function Product(props: CartProps): JSX.Element {
  return (
    <p class={css({ display: "flex", width: "fit-content", gap: "2" })}>
      {props.name}
      <button class={button({ tone: "solid" })} onClick={props.cart.add}>
        Add to Cart
      </button>
    </p>
  );
}

function Shop(props: CartProps) {
  return (
    <>
      <Product name="Mug" cart={props.cart} />
      <Product name="Notebook" cart={props.cart} />
    </>
  );
}

function App() {
  const cart = createCart();
  return (
    <div class={container({ debug: true, p: "2", m: "2" })}>
      <Header cart={cart} />
      <Shop cart={cart} />
    </div>
  );
}

const root = document.getElementById("app");
if (!root) throw new Error("#app element not found");

render(() => <App />, root);
