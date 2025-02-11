import "../Styles/Header.css";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function Header({cartItems}) {
  let totalItems = 0;
  cartItems.forEach((item) => {
    totalItems += item.quantity;
  });
  return (
    <div className="header">
      <div className="left-header">
        <Link to="home">
          <button>Home</button>
        </Link>
        <Link to="shop">
          <button>Shop</button>
        </Link>
      </div>
      <div className="middle-header">
        <Link to="home">
          <button>Logo</button>
        </Link>
      </div>
      <div className="right-header">
        <Link to="checkout">Cart:</Link> 
        <h1>{totalItems}</h1>
      </div>
    </div>
  );
}
Header.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Header;
