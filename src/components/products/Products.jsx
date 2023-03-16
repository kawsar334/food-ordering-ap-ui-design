import ProductList from "../productLists/ProductList";
import "./products.scss";

import { useSelector } from "react-redux";

const Products = () => {
    const products = useSelector((state) => state.products.porducts)
    
    return (
    <div className="products">
        {
                products?.map((item)=>(

                  <ProductList item={item} key={item.id}/>
              ))  
        }

    </div>
  )
}

export default Products