import { Outlet } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ShopLayout() {
  const [setCartItems] = useOutletContext();

  return (
    <>
      <div className="shop">
        <h2>Our Shop</h2>
        <Outlet context={[setCartItems]} />
      </div>
    </>
  );
}
