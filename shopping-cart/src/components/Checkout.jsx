import { useOutletContext } from "react-router-dom";
import "../Styles/Checkout.css";

function Checkout() {
  const { cartItems, deleteItem } = useOutletContext();

  return (
    <div className="checkout">
      <div className="checkout-header">
        <h1>Checkout</h1>
      </div>
      <div className="checkout-details">
        <div className="checkout-details-left">
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <div className="checkout-item-left">
                <p>{item.title}</p>
              </div>
              <div className="checkout-item-right">
                <img src={item.image} alt="" />
                <h3>${item.price * item.quantity}</h3>
              </div>
              <button className="delete" onClick={() => deleteItem(item)}>
                X
              </button>
            </div>
          ))}
        </div>

        <div className="checkout-details-right">
          <h2>
            Total: $
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </h2>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
