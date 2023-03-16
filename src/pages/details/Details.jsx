import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./details.scss";
import {porducts} from "../../data";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Details = () => {

    const id = useLocation().pathname.split("/")[2];
    
    const [quantity , setQuantity] = useState(1)
    const dispatch = useDispatch();
    const product = useSelector((state) => state.products.product);
    

    useEffect(()=>{
        dispatch({
            type:"PRODUCT_DETAILS",
            id
        })
    },[id])
    

  return (
    <div className="details">
        <Navbar />

<div className="detailsWrapper">

<div className="left">
    <img src={product.img} alt="" />
</div>
<div className="right">
    <h3 className="title">{product?.title}</h3>
    <span className="price">${product?.price}</span>
    <p className="desc">{product?.desc}</p>
        <h3 className="title">Choose the  Size </h3>
    <div className="categories">
        <div className="small">
            <input type="checkbox" name="" id="" />
            <span>small</span>
        </div>
        <div className="medium">
            <input type="checkbox" name="" id="" />
            <span>Medium</span>
        </div>
        
        <div className="large">
        <input type="checkbox" name="" id="" />
        <span>Large</span>
        </div>
    </div>

    <div className="counter">
        <span onClick={()=>setQuantity(quantity+1)}>+</span>
        <span>{quantity}</span>
       {quantity>0 && <span onClick={() => setQuantity(quantity - 1)}>-</span>}
        <button onClick={()=>dispatch({type:"ADD_TO_CART", payload:{product, quantity}})}>Add to cart</button>
    </div>
</div>
</div>
        <Footer />
    </div>
  )
}

export default Details