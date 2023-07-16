import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import bannerImage from "../assets/banner.png";
import { Icon } from "solid-heroicons";
import { shoppingCart } from "solid-heroicons/solid";

const NavBar: Component = () => {
  return (
    <nav class="flex flex-col gap-6">
      <div class="flex w-full justify-between items-center">
        <A href="/">
          <h1 class="text-2xl font-semibold">Fake Pasal</h1>
        </A>

        <Icon path={shoppingCart} style="width: 24px; color: black" />
      </div>

      <img src={bannerImage} alt="Banner" class="rounded-md h-96 object-fit" />
    </nav>
  );
};

export default NavBar;
