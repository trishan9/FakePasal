import { useContext, type Component } from "solid-js";
import { A } from "@solidjs/router";
import { Icon } from "solid-heroicons";
import { shoppingCart } from "solid-heroicons/solid";
import bannerImage from "../assets/banner.png";
import { CartContext } from "../contexts/CartProvider";

const NavBar: Component = () => {
  const { products }: any = useContext(CartContext);

  return (
    <nav class="flex flex-col gap-6">
      <div class="flex w-full justify-between items-center">
        <A href="/">
          <h1 class="text-2xl font-semibold">Fake Pasal</h1>
        </A>

        <A href="/cart" class="flex gap-2 items-center cursor-pointer">
          <Icon path={shoppingCart} style="width: 24px; color: black" />

          <p class="font-medium">Cart ( {products.length} )</p>
        </A>
      </div>

      <img src={bannerImage} alt="Banner" class="rounded-md h-96 object-fit" />
    </nav>
  );
};

export default NavBar;
