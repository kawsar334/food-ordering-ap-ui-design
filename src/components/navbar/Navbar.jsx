import { useEffect, useState } from "react"
import "./navbar.scss"

const Navbar = () => {
        const [scrolled, setScrolled] = useState(false);
        const [open, setOpen] = useState(true);

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
            <div className="navleft">
                  <div className="navIcon"><i className="fa-solid fa-phone"></i></div>
                  <div className="logocontainer"><p>Order Now</p>
                  <span>+12343455</span>
                  </div>
            </div>
            <div className="navmiddle">
                <ul>
                    <li><a href="#">Home</a></li>
                      <li><a href="#products">Products</a></li>
                      <li><a href="#">Menu</a></li>
                      <li><a href="#" className="logo">Kawsar</a></li>
                      <li><a href="#">Events</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                      

                </ul>
            </div>
            <div className="navright">
                  <div className="rightBase">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span>0</span>

                  </div>
            </div>
        </div>
    </div>}
         {!open? <i className="fa-solid fa-bars " onClick={() => setOpen(!open)}></i>
         :<i className="fa-solid fa-xmark " onClick={() => setOpen(!open)}></i>}

          
    </div>
  )
}

export default Navbar