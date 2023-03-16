import { Link } from "react-router-dom";
import { porducts } from "../../data";
import  "./productlist.scss";

const ProductList = ({ item }) => {
  
   
  return (
  
     <Link to={`/product/${item?.id}`} className="productList">
        <img src={item.img} alt="Loading..." />
        <div className="content">
            <h3 className="title">{item.title}</h3>
            <span>$19.90</span>
            <p className="desc">{item.desc.slice(0,80)+"..."}</p>
        </div>
    </Link>
  )
}

export default ProductList