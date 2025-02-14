import "../Styles/ItemPage.css";
import { useParams, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

function ItemPage() {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scrolls to the top of the page
  }, []);
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
        <div className="left-item">
          <div className="image">
            <img src={currItem.image} alt="Product" />
          </div>
        </div>
        <div className="right-item">
          <div className="details">
            <div className="upper-details">
              <h1>{currItem.title}</h1>
              <p>${currItem.price}</p>
            </div>
            <div className="lower-details">
              <p>{currItem.description}</p>
              <p>
                Rating ({currItem.rating.count}): {currItem.rating.rate}/5
              </p>
            </div>
            <div className="buy">
              <button onClick={(e) => handleChange(e, false)}>-</button>
              <p>{quantities[currItem.id]}</p>
              <button onClick={(e) => handleChange(e, true)}>+</button>
              <button className="buyBtn"
                onClick={() =>
                  addToCart(currItem, quantities[currItem.id], true)
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;
