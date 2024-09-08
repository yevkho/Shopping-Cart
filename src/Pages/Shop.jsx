import { Link } from "react-router-dom";
import { useShoppingData } from "../hooks/useData";
import PropTypes from "prop-types";

export default function Shop({ prop1, prop2 }) {
  const { shoppingData, error, loading } = useShoppingData(
    "https://fakestoreapi.com/products?limit=10"
  );

  console.log(prop1, prop2);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Following Error ocurred: {error.message}</p>; //TBD why lifts to upper most Error catcher (page not found)

  return (
    <>
      <h2>Store</h2>
      <div className="ItemsContainer">
        {shoppingData.map((item) => (
          <Link to={item.id.toString()} key={item.id}>
            <img src={item.image} alt="placeholder" />
            <p>{item.title}</p>
            <p>{item.price}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

// prop type checking - START
Shop.propTypes = {
  prop1: PropTypes.number.isRequired,
  prop2: PropTypes.string,
};

Shop.defaultProps = {
  prop1: 2,
  prop2: "string",
};
// prop type checking - END
