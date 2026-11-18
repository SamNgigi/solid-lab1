export type Product = { name: string; price: number };

export function Card(props: Product) {
  return (
    <article class="card">
      <h2>{props.name}</h2>
      <p>${props.price}</p>
    </article>
  );
}
