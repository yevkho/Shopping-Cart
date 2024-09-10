import { useState, createContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../Layouts/RootLayout.css";

//NEW CONTEXT (can extract in separate module)
export const ShopContext = createContext(null);
//NEW CONTEXT

export default function RootLayout() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  function toggleCart() {
    setIsCartOpen(isCartOpen === true ? false : true);
  }

  // NavBar & Cart can be extracted ina separate component (see https://github.com/NontasBak/shopping-cart):
  // e.g., <NavBar/>, <main/>, <Cart/>
  return (
    <>
      <nav>
        <h3>Dashboard</h3>
        <NavLink to="/">Home</NavLink>
        <NavLink to="shop">Shop</NavLink>
        <button className="cartIcon" onClick={toggleCart}>
          Cart
        </button>
        <div>total items: {cartItems}</div>
      </nav>
      <main>
        <ShopContext.Provider value={{ cartItems, setCartItems }}>
          <Outlet context={[setCartItems]} />
        </ShopContext.Provider>
      </main>

      {isCartOpen && (
        <div
          className={`cartSidebar ${isCartOpen ? "open" : ""}`}
          data-testid="sidebar"
        >
          <button onClick={toggleCart}>Close</button>
          <h2>Your Cart</h2>
          <p>Items in cart: {cartItems}</p>
          <button onClick={() => alert("you are checked out!")}>
            Checkout
          </button>
        </div>
      )}
    </>
  );
}
