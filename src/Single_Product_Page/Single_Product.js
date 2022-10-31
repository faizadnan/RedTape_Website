import React, { useContext, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Single_Product.css'
import image8 from '../images/product-8.jpg'
import { Context } from '../App'

export default function Single_Product(props) {
    console.log(props)
    // console.log(props.items[0].src)


    const item = useContext(Context)


    return (

        <>
            {/* <Navbar count={props.count}></Navbar> */}
            <div className="single_product_main_div">


                <div className="single_product_div1 fgh">

                    <img src={props.productsource.src
                    } id="productimage" alt='Here is the image' />


                </div>

                <div className="single_product_div1">
                    {/* <p>{props.productsource.title}</p> */}
                    <h1>{props.productsource.title}</h1>
                    <h4>${props.productsource.cost}</h4>
                    <div>
                    <select name="" id="">
                        <option value="">Select Size</option>
                        <option value="">Small </option>
                        <option value="">Medium</option>
                        <option value="">Large</option>
                        <option value="">Extra Large</option>
                    </select> 
                    <input type="number" name="" id="" min="1" max="5" defaultValue="1" />
                    </div>
                    


                    <button id='saveforLater'  onClick={() =>{props.onClickWish(props.productsource);
                                }}> <span>Save for Later</span> <i class="fa fa-heart" aria-hidden="true"></i></button>
                                
                                {/* <span  style={{marginLeft: "12px"}}>|</span> */}

                                <button id='addtoCart' onClick={() =>{props.onClick(props.productsource);
                                }}><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-shopping-cart" aria-hidden="true"></i> </button> <br />


                    <h3>Product Details </h3>

                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, debitis? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero odit non, consequuntur optio
                        consequatur voluptate labore ut ipsa impedit ratione illo.</p>
                </div>
            </div>





        </>
    )
}
