import { For, Show, createResource } from "solid-js";
import { A } from "@solidjs/router";
import Card from "./Card";
import { getProducts } from "../../api/getProducts";

const Products = () => {
  const [products] = createResource(getProducts);

  return (
    <Show when={products()} fallback={<p>Loading...</p>}>
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <For each={products()}>
          {(product) => (
            <Card>
              <img
                src={product.img}
                alt={product.title}
                class="border border-gray-200"
              />

              <h1 class="text-lg font-medium text-center">{product.title}</h1>

              <A
                href={`/product/${product.id}`}
                class="p-2 rounded-md bg-[#FFBD59] text-center hover:bg-[#d19336] ease-in-out transition-all"
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
