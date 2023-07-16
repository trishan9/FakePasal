import { For, Show, createResource } from "solid-js";
import Card from "./Card";
import { getProducts } from "../../api/getProducts";
import { A } from "@solidjs/router";

const Products = () => {
  const [products] = createResource(getProducts);

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="my-6 grid grid-cols-4 gap-6">
        <For each={products()}>
          {(product) => (
            <Card>
              <img src={product.img} alt="" />

              <h1 class="text-lg font-medium text-center">{product.title}</h1>

              <A
                href={`/product/${product.id}`}
                class="p-2 rounded-md bg-[#FFBD59] text-center"
                type="button"
              >
                View Product
              </A>
            </Card>
          )}
        </For>
      </div>
    </Show>
  );
};

export default Products;
