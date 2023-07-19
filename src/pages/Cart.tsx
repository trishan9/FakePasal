import { For, useContext } from "solid-js";
import Card from "../components/Card";
import { CartContext } from "../contexts/CartProvider";

const Cart = () => {
  const { products }: any = useContext(CartContext);

  const calculateTotal = () => {
    return products.reduce((acc: any, p: any) => {
      return acc + p.quantity * p.price;
    }, 0);
  };

  return (
    <div class="min-w-[400px] my-8 mx-auto text-center">
      <Card>
        <h1>Shopping Cart</h1>

        <For each={products}>
          {(product) => (
            <p>
              {product.title} - Rs.{product.price} x {product.quantity} = Rs.
              {product.price * product.quantity}
            </p>
          )}
        </For>

        Total = Rs.{calculateTotal()}
      </Card>
    </div>
  );
};

export default Cart;
