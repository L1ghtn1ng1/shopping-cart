import { useNavigate, useOutletContext, useLocation } from "react-router-dom";
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
  const [search, setSearch] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const from = useLocation().state?.from;

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  useEffect(() => {
    if (from) {
      setFilter((prevFilter) => ({
        ...prevFilter,
        [from]: true,
      }));
    }
  }, [from]);

  useEffect(() => {
    let filtered = items.filter((item) => {
      const matchesCategory =
        (filter.mensClothing && item.category === "men's clothing") ||
        (filter.womensClothing && item.category === "women's clothing") ||
        (filter.jewelery && item.category === "jewelery") ||
        (filter.technology && item.category === "electronics") ||
        Object.values(filter).every((val) => !val);

      const matchesSearch = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });

    setFilteredItems(filtered);
  }, [filter, search, items, from]);

  function filterItems(e) {
    const { name, checked } = e.target;
    setFilter({ ...filter, [name]: checked });
  }

  return (
    <div>
      <div className="shop-info">
        <div className="left-shop-info">
          <h1>Products</h1>
          <h4>Items ({items.length})</h4>
          <button onClick={() => setIsOpen(!isOpen)} className="filter-button">
            Filters
          </button>
        </div>
        <div className="right-shop-info">
          <label htmlFor = "search">Search</label>
          <input id="search" type="text" onChange={(e) => setSearch(e.target.value)} />
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
              <input
                type="checkbox"
                name="mensClothing"
                onChange={filterItems}
                checked={filter.mensClothing}
              />
              Men&apos;s Clothing
            </label>
            <label>
              <input
                type="checkbox"
                name="womensClothing"
                onChange={filterItems}
                checked={filter.womensClothing}
              />
              Women&apos;s Clothing
            </label>
            <label>
              <input
                type="checkbox"
                name="jewelery"
                onChange={filterItems}
                checked={filter.jewelery}
              />
              Jewelery
            </label>
            <label>
              <input
                type="checkbox"
                name="technology"
                onChange={filterItems}
                checked={filter.technology}
              />
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
                  <button className="buy-Btn"
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
