import { useParams } from "@solidjs/router";
import { Show, createResource, useContext } from "solid-js";
import { Icon } from "solid-heroicons";
import { shoppingCart } from "solid-heroicons/solid";
import { getProductDetails } from "../../api/getProductDetails";
import { CartContext } from "../contexts/CartProvider";

const ProductDetails = () => {
  const params = useParams();
  const [productDetails] = createResource(params.id, getProductDetails);
  const { products, setProducts }: any = useContext(CartContext);

  const addProduct = () => {
    const productInCartExists = products.find(
      (product: any) => product.id == productDetails().id
    );
    if (productInCartExists) {
      setProducts(
        (product: any) => product.id == productDetails().id,
        "quantity",
        (quantity: any) => quantity + 1
      );
    } else {
      setProducts([...products, { ...productDetails(), quantity: 1 }]);
    }
  };

  return (
    <Show when={productDetails()} fallback={<p>Loading...</p>}>
      <div class="flex flex-col md:flex-row gap-10 my-8 items-center">
        <div>
          <img
            src={productDetails().img}
            alt=""
            class="md:h-96 w-full  object-contain"
          />
        </div>

        <div class="w-full flex flex-col gap-6 items-start">
          <p class="text-xl sm:text-2xl font-medium">{productDetails().title}</p>

          <p class="font-medium">{productDetails().description}</p>

          <p class="font-medium text-lg">{`Only Rs.${
            productDetails().price
          }`}</p>

          <button
            onClick={addProduct}
            type="button"
            class="p-2 rounded-md bg-[#FFBD59] text-center px-4 flex gap-3 items-center hover:bg-[#d19336] ease-in-out transition-all"
          >
            <Icon path={shoppingCart} style="width: 24px; color: black" />
            Add to Cart
          </button>
        </div>
      </div>
    </Show>
  );
};

export default ProductDetails;
