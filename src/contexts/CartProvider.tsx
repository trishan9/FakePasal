import { createContext } from "solid-js";
import { createStore } from "solid-js/store";

export const CartContext = createContext();

const CartProvider = (props: any) => {
  const [products, setProducts] = createStore([]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
