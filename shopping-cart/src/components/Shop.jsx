import {useNavigate, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import "../Styles/Shop.css";
// import { useState } from "react";

function Shop() {
  const { items, addToCart} = useOutletContext();
  const Navigate = useNavigate();

  return (
    <div>
      <div className="shop-info">
        <div>
          <h1>Products</h1>
          <p>Items ({items.length})</p>
          <button>Filters</button>
        </div>
      </div>

      <div className="shop">
        {items.map((item) => (
          <div key={item.id} className="card" 
            onClick={() => Navigate(`/item/${item.id}`)}>
            <div className="title">{item.title}</div>
            <img src={item.image} alt="" />  
            <div className="info">
              <p>${item.price}</p>
              <div className="checkout-details">
                {/* <input type="number" placeholder="1" min={1} max={15} onClick={(e) => handleQuantity(e,item)}/> */}
                <button onClick={(e) => { e.stopPropagation(); addToCart(item);}}>Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Shop.propTypes = {
  addToCart: PropTypes.func,
};

export default Shop;
