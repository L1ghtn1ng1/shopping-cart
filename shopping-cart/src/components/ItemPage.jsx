import "../styles/ItemPage.css";
import { useParams, useOutletContext } from "react-router-dom";

function ItemPage() {
    const {items} = useOutletContext()
    const {id} = useParams();
    const currItem = items.find(item => item.id === Number(id))  
    return (   
        <div className="item-page">
            <div className="item-info">
                <h1>{currItem.title}</h1>
                <p>Product Description</p>
                <p>Price</p>
                <button>Add To Cart</button>
            </div>
            <img src="" alt="Product"/>
        </div>
    );
}

export default ItemPage;

