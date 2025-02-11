import { useOutletContext } from "react-router-dom";
import "../Styles/Checkout.css";

function Checkout() {
  const { cartItems, deleteItem, addToCart } = useOutletContext();
  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const gst = 0.15 * totalCost;
  
  return (
    <div className="checkout-container">
      <h2>Cart Summary</h2>
      <div className="checkout">
        <div className="leftSide">
          {cartItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <div className="photo-title">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
              </div>
              <div className="quantity">
                <button onClick={() => item.quantity > 1 && addToCart(item,1,false)}>-</button>
                <h3>{item.quantity}</h3>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <div className="priceDelete">
                <h3>${item.price*item.quantity}</h3>
                <button className="delete" onClick={() => deleteItem(item)}>
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="rightSide">
          <div className="right">
            <h2>Order Summary</h2>
            <div className="order-summary">
              <p>Subtotal</p>
              <p>${totalCost.toFixed(2)}</p>
            </div>
            <div className="order-summary">
              <p>GST (15%)</p>
              <p>{(gst).toFixed(2)}</p>
            </div>
            <div className="order-summary">
              <p>Total</p>
              <p>${(totalCost+gst).toFixed(2)}</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
