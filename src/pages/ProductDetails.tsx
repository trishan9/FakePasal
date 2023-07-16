import { useParams } from "@solidjs/router";
import { Show, createResource } from "solid-js";
import { getProductDetails } from "../../api/getProductDetails";

const ProductDetails = () => {
  const params = useParams();
  const [productDetails] = createResource(params.id, getProductDetails);

  return (
    <Show when={productDetails()} fallback={<p>Loading...</p>}>
      <div class="flex gap-10 my-8">
        <div>
          <img
            src={productDetails().img}
            alt=""
            class="min-w-[500px] max-w-[500px]"
          />
        </div>

        <div class="w-full flex flex-col gap-6">
          <p class="text-2xl font-medium">{productDetails().title}</p>
          <p class="font-medium">{productDetails().description}</p>
          <p class="font-medium text-lg">{`Only Rs.${productDetails().price}`}</p>
        </div>
      </div>
    </Show>
  );
};

export default ProductDetails;
