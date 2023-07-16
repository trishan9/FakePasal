import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import NavBar from "./components/NavBar";
import ProductDetails from "./pages/ProductDetails";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));

const App: Component = () => {
  return (
    <div class="p-10 px-16 min-h-screen bg-[#edf1f5]">
      <NavBar />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={ProductDetails} />
      </Routes>
    </div>
  );
};

export default App;
