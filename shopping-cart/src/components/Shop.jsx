import { useNavigate, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import "../Styles/Shop.css";
import { useState, useEffect } from "react";

function Shop() {
  const { items, addToCart } = useOutletContext();
  const Navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState({
    mensClothing: false,
    womensClothing: false,
    jewelery: false,
    technology: false,
  });

  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    let filtered = items.filter((item) => {
      if (filter.mensClothing && item.category === "men's clothing") return true;
      if (filter.womensClothing && item.category === "women's clothing") return true;
      if (filter.jewelry && item.category === "jewelery") return true;
      if (filter.technology && item.category === "electronics") return true;
      return Object.values(filter).every((val) => !val); // Show all if no filter is selected
    });
  
    setFilteredItems(filtered);
  }, [filter, items]); // Re-run when filter or items change
  
  

  function filterItems(e) {
    const { name, checked } = e.target;
    setFilter({ ...filter, [name]: checked });
  }

  return (
    <div>
      <div className="shop-info">
        <div>
          <h1>Products</h1>
          <p>Items ({items.length})</p>
          <button onClick={() => setIsOpen(!isOpen)} className="filter-button">
            Filters
          </button>
        </div>
      </div>

      <div className="container">
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button onClick={() => setIsOpen(false)} className="close-button">
            ✖
          </button>
          <h2>Filter</h2>
          <form className="filter-form">
            <label>
              <input type="checkbox" name="mensClothing" onChange={filterItems}/>
              Men`s Clothing
            </label>
            <label>
              <input type="checkbox" name="womensClothing" onChange={filterItems}/>
              Women`s Clothing
            </label>
            <label>
              <input type="checkbox" name="jewelry" onChange={filterItems}/>
              Jewelery
            </label>
            <label>
              <input type="checkbox" name="technology" onChange={filterItems}/>
              Technology
            </label>
          </form>
        </div>

        <div className="shop">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="card"
              onClick={() => Navigate(`/item/${item.id}`)}
            >
              <div className="title">{item.title}</div>
              <img src={item.image} alt="" />
              <div className="info">
                <p>${item.price}</p>
                <div className="checkout-details">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(item);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
Shop.propTypes = {
  addToCart: PropTypes.func,
};

export default Shop;
