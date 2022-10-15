import React, { useContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Single_Product.css'
import image8 from '../images/product-8.jpg'
import { Context } from '../App'

export default function Single_Product(props) {



    const item = useContext(Context)


    return (

        <>
            {/* <Navbar count={props.count}></Navbar> */}
            <div className="single_product_main_div">


                <div className="single_product_div1 fgh">

                    <img src={image8} id="productimage" alt='Here is the image' />


                </div>

                <div className="single_product_div1">
                    <p>Home/T-Shirt</p>
                    <h1>Red Printed T-Shirt <br /> By HRX</h1>
                    <h4>$50.00</h4>
                    <select name="" id="">
                        <option value="">Select Size</option>
                        <option value="">Small </option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                    </select> <br /><br />
                    <input type="number" name="" id="" min="1" max="5" defaultValue="1" />
                    <button onClick={props.onClick} >Add to Cart</button>

                    <h3>Product Details </h3>
                    <p style={{ width: "500px" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, debitis? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero odit non, consequuntur optio
                        consequatur voluptate labore ut ipsa impedit ratione illo.</p>
                </div>
            </div>





        </>
    )
}
