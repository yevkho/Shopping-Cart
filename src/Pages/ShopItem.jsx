import { useState } from "react";
import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useShoppingData } from "../hooks/useData";
import styles from "../Pages/shopItem.module.css";

export default function ShopItem() {
  const { itemId } = useParams();
  //import data
  const { shoppingData, error, loading } = useShoppingData(
    `https://fakestoreapi.com/products/${itemId}`
  );

  //track quantity of items
  const [quantity, setQuantity] = useState(0);

  //sync local quantity with cart items
  const [setCartItems] = useOutletContext();

  function sendItems() {
    setCartItems((q) => q + Number(quantity));
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Following Error ocurred: {error.message}</p>;

  return (
    <>
      <div className="itemCard">
        <p>{shoppingData.title}</p>
        <p>{shoppingData.description}</p>
        <p>{shoppingData.price}</p>
        <img
          src={shoppingData.image}
          className={styles.img}
          alt="placeholder"
        />
      </div>

      <label>
        quantity:{" "}
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>

      <button onClick={sendItems} className={styles.btn}>
        Add To Cart
      </button>
    </>
  );
}
