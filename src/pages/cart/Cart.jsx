import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./cart.scss";
import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {

    const cart = useSelector((state)=>state.cart);
    console.log(cart.products)
  return (
    <div className="cart">
        <Navbar />
        
    <div className="cartcontainer">
        <div className="cartwrapper">
            <div className="cartLeft">
                <div className="cartheader">
                    <Link to="/">Continue Shoping </Link>
                </div>
               { 
               cart.products.length<1? <div className="cartItem">
                <h1>Your cart is Empty</h1>
               </div>:
               <>
               

                {cart.products.map((item)=>(

                    <div className="carItem">
                    <img src="/imgs/p1.png" alt="Loadin.." />
                    <span className="title">{item.title}</span>
                    <span className="price"><b>Price:</b>${item.price}</span>
                    <span className="total">Total:${cart.totalPrice}</span>
                    <div className="quantity">{item.quantity}</div>
                </div>
                    ))}
                    
                          </>}
              
                 
            </div>
            <div className="cartright">
                <div className="cartrightwrapper">
                <h3>Cart total</h3>
                {/* <p><span>subtotal:</span> $102.00</p> */}
                <p><span>Discount:</span> $00.00</p>
                          <p><span>total:</span> ${cart.totalPrice}</p>
                          <StripeCheckout
                              name="Three Comma Co." 
                              description="Big Data Stuff" 
                              image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" 
                              ComponentClass="div"
                              panelLabel="Give Money"
                              amount={1000000} 
                              currency="USD"
                              stripeKey="..."
                              email="info@vidhub.co"
                            
                          >

                <button>Checkout</button>
                          </StripeCheckout>
                </div>
            </div>
        </div>
    </div>
        <Footer />
    </div>
  )
}

export default Cart