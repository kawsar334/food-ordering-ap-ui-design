import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss"

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
        const [scrolled, setScrolled] = useState(false);
        const [open, setOpen] = useState(true);
        const location = useLocation().pathname

        console.log(location)
        const isActive = ()=>{
            window.scrollY > 0 ? setScrolled(true): setScrolled(false);
        }   
    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener("scroll", isActive);
        }
    }, []);

  return (
      <div className={!open ? "activeBar navcontainer" : isActive ? "activeBar navcontainer active": "navcontainer"}>
    {      
              open && <div className={scrolled ?"active navbar" :"navbar"}>
        <div className="navwrapper">
            <Link to="/" className="navleft">
                  <div className="navIcon"><i className="fa-solid fa-phone"></i></div>
                  <div className="logocontainer"><p>Order Now</p>
                  <span>+12343455</span>
                  </div>
            </Link>
            <div className="navmiddle">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    {location  ==="/" &&<li><a href="#products">Products</a></li>}
                    <li><Link to="#">Menu</Link></li>
                    {location === "/" &&<li><Link to="/" className="logo">Kawsar firoz</Link></li>}
                      <li><Link to="#">Events</Link></li>
                      <li><Link to="#">Blog</Link></li>
                      <li><Link to="#">Contact</Link></li>
                </ul>
            </div>
            <div className="navright">
                  <Link to="/cart" className="rightBase">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>{cart.totalQuantity}</span>

                  </Link>
            </div>
        </div>
    </div>}
         {!open? <i className="fa-solid fa-bars " onClick={() => setOpen(!open)}></i>
         :<i className="fa-solid fa-xmark " onClick={() => setOpen(!open)}></i>}

          
    </div>
  )
}

export default Navbar