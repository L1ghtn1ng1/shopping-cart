import "../Styles/Home.css";
import mensImage from "../assets/pexels-wolrider-30615429.jpg";
import womensImage from "../assets/pexels-mateo-almendares-1496989-2884354.jpg";
import generalImage from "../assets/pexels-rachel-claire-5531541.jpg";
import techImage from "../assets/pexels-nguyendesigner-17136613.jpg";
import jeweleryImage from "../assets/pexels-settlemania-16940629.jpg";
import { Link } from "react-router-dom";

const scrollToProducts = () => {
  // Scrolls the page to the products section smoothly
  document.querySelector(".products-by-filter").scrollIntoView({
    behavior: "smooth",
  });
};

function Home() {
  return (
    <div className="home-container">
      <div className="general-display">
        <img src={generalImage} alt="" />
        <div className="arrow" onClick={scrollToProducts}>
          <div>Explore</div>
        </div>
      </div>

      <div className="products-by-filter">
        <div className="mens">
          <Link to="/shop" state={{from: "mensClothing"}}>
            <img src={mensImage} alt="" loading="lazy" />
            <div className="title">
                <h2>Mens Clothing</h2>
            </div>
          </Link>  
        </div>
        <div className="womens">
          <Link to="/shop" state={{from: "womensClothing"}}>
            <img src={womensImage} alt="" loading="lazy" />
            <div className="title">
                <h2>Womens Clothing</h2>
            </div>
          </Link>
        </div>
        <div className="jewelery">
          <Link to="/shop" state={{from: "jewelery"}}>
            <img src={jeweleryImage} alt=""  loading="lazy"/>
            <div className="title">
                <h2>Jewellery</h2>
            </div>
          </Link>
        </div>
        <div className="tech">
          <Link to="/shop" state={{from: "technology"}}>
            <img src={techImage} alt=""  />
            <div className="title">
                <h2>Technology</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
