import "./slider.scss";
import React, { useRef, useState } from "react";
import Slider from 'infinite-react-carousel';
import { porducts } from "../../data";
import { Link } from "react-router-dom";



export default function Slide() {
    return (
        <div className="slider" >
           <div className="sliderWrapper">
                <Slider className="slide" arrowsScroll={1} autoplaySpeed={3000} autoplay={true} slidesToShow={1} centerMode={true}>
                    {porducts.map((item)=>(

                    <div  className="sliderItem">
                        <div className="slideContent">
                                <h1>{item.title}</h1>
                            <p>50% OFF</p>
                                <a href="#products">Order Now</a>
                        </div>
                        <img src={item.img} alt="" />
                    </div>
                    ))}
                    
                </Slider> 
           </div>
        </div>
    );
}