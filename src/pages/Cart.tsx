import { For, Show, useContext } from "solid-js";
import Card from "../components/Card";
import { CartContext } from "../contexts/CartProvider";
import PaymentOptions from "../components/PaymentOptions";

const Cart = () => {
  const { products, increaseQuantity, decreaseQuantity }: any =
    useContext(CartContext);

  const calculateTotal = () => {
    return products.reduce((total: any, p: any) => {
      return total + p.quantity * p.price;
    }, 0);
  };

  return (
    <div class="w-full my-8 mx-auto text-center">
      <Card>
        <h1 class="text-xl font-semibold my-4">Shopping Cart</h1>

        <div class="flex justify-center gap-32 items-center py-10">
          <div class="flex flex-col justify-center items-center gap-6">
            <For each={products}>
              {(product) => (
                <div class="flex gap-4 justify-center items-center">
                  <img
                    src={product.img}
                    class="w-24 border border-gray-200 invisible sm:visible"
                    alt=""
                  />

                  <div class="flex flex-col gap-3 items-start w-96 text-sm sm:text-base">
                    <p>{product.title}</p>

                    <p>Per unit Price: Rs.{product.price}</p>

                    <div class="flex gap-4 justify-center items-center">
                      <div class="flex gap-3 justify-center items-center">
                        Quantity:
                        <button
                          onClick={() => increaseQuantity(product)}
                          class="text-xl p-1 px-3 rounded-md bg-[#FFBD59] text-center flex gap-3 items-center hover:bg-[#d19336] ease-in-out transition-all cursor-pointer"
                        >
                          +
                        </button>
                        <p> {product.quantity}</p>
                        <Show when={product.quantity > 1}>
                          <button
                            onClick={() => decreaseQuantity(product)}
                            class="text-xl p-1 rounded-md border hover:bg-[#f5f5f5] border-[#FFBD59] text-center px-3.5 flex gap-3 items-center cursor-pointer"
                          >
                            -
                          </button>
                        </Show>
                      </div>

                      <p>Price: Rs.{product.price * product.quantity}</p>
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>

          <div class="flex flex-col gap-10 justify-center items-center invisible sm:visible">
            <PaymentOptions />

            <div class="flex gap-3">
              <p class="text-xl mt-6 p-2 rounded-md border border-[#FFBD59] text-center px-4 flex gap-3 items-center">
                Total = Rs.{calculateTotal()}
              </p>

              <button class="text-xl mt-6 p-2 rounded-md bg-[#FFBD59] text-center px-4 flex gap-3 items-center hover:bg-[#d19336] ease-in-out transition-all cursor-pointer">
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Cart;
