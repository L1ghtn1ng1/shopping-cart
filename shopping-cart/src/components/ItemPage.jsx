import "../styles/ItemPage.css";
import { useParams, useOutletContext } from "react-router-dom";
import { useState } from "react";

function ItemPage() {
  const { items, addToCart } = useOutletContext();
  const { id } = useParams();
  const [quantities, setQuantities] = useState([]);
  const currItem = items.find((item) => item.id === Number(id));
  if (!currItem) return <p className="loading-message">Loading Item!</p>;
  if (!quantities[currItem.id]) {
    quantities[currItem.id] = 1;
  }

  function handleChange(e, increment) {
    e.preventDefault();
    if (increment) {
      quantities[currItem.id] += 1;
    } else if (quantities[currItem.id] > 1) {
      quantities[currItem.id] -= 1;
    }
    setQuantities([...quantities]);
  }

  return (
    <div className="item-page">
      <div className="item-info">
        <div className="image">
          <img src={currItem.image} alt="Product" />
        </div>
        <div className="details">
          <h1>{currItem.title}</h1>
          <p>{currItem.description}</p>
          <p>${currItem.price}</p>
          <p>
            Rating ({currItem.rating.count}): {currItem.rating.rate}/5
          </p>
        </div>
        <div className="buy">
          <button onClick={(e) => handleChange(e, false)}>-</button>
          <p>{quantities[currItem.id]}</p>
          <button onClick={(e) => handleChange(e, true)}>+</button>
          <button
            onClick={() => addToCart(currItem, quantities[currItem.id], true)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
