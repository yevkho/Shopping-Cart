import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

import { useContext } from "react";
import { ShopContext } from "./RootLayout";

export default function ShopLayout() {
  const [setCartItems] = useOutletContext();

  const { cartItems } = useContext(ShopContext);

  return (
    <>
      <div className="shop">
        <h2>Our Shop</h2>
        <h3>{cartItems}</h3>
        <Outlet context={[setCartItems]} />
      </div>
    </>
  );
}
