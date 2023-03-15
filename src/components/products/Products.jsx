import ProductList from "../productLists/ProductList";
import "./products.scss";
import { porducts } from "../../data";

const Products = () => {
  return (
    <div className="products">
        {
              porducts.map((item)=>(

                  <ProductList item={item} key={item.id}/>
              ))  
        }

    </div>
  )
}

export default Products