import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

const CartProvider = (props: any) => {
  const [products, setProducts] = createStore([]);

  const increaseQuantity = (currentProduct: any) => {
    setProducts(
      (product: any) => product.id == currentProduct.id,
      "quantity",
      (quantity: any) => quantity + 1
    );
  };

  const decreaseQuantity = (currentProduct: any) => {
    setProducts(
      (product: any) => product.id == currentProduct.id,
      "quantity",
      (quantity: any) => quantity - 1
    );
  };

  return (
    <CartContext.Provider value={{ products, setProducts, increaseQuantity, decreaseQuantity }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
