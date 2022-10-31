import React, { useContext, useState, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import './Single_Product.css'
import image8 from '../images/product-8.jpg'
import { Context } from '../App'
import { Pincode } from './Pincode'

console.log(Pincode)
export default function Single_Product(props) {
    console.log(props)
    // console.log(props.items[0].src)


    const item = useContext(Context)
    const inputRef = useRef();

    //function to check pinvalidity:-
    let day1 = Math.floor(Math.random() * 2);
    let day2 = Math.floor(Math.random() * 10);
    let delivery_div = document.getElementById("deliveryResult");

    function checkPin() {
       
        let day1 = Math.floor(Math.random() * (1)+2);
        let day2 = Math.floor(Math.random() *  (4)+8);
        if (inputRef.current.value.length > 0) {
            document.getElementById("Change").style.display = "block";
            document.getElementById("pinCheckButton").style.display = "none";
            for (let i = 0; i < Pincode.length; i++) {
                if (inputRef.current.value == Pincode[i]) {
                    document.getElementById("deliveryResult").innerText = (`Delivery by ${day1}-${day2} days`);
                    break;
                } else {
                    document.getElementById("deliveryResult").innerText = ("Invalid PinCode");
                }
            }
        }

    }


    //fucntion to ficus the input on clciking the change button:-
    function changeFocus() {
        inputRef.current.focus()
        document.getElementById("Change").style.display = "none";
        document.getElementById("pinCheckButton").style.display = "block"
    }

     function onFucus(){
        if(inputRef.current.value){
            document.getElementById("Change").style.display = "none";
            document.getElementById("pinCheckButton").style.display = "block"
        }
      
    }


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



                    <button id='saveforLater' onClick={() => {
                        props.onClickWish(props.productsource);
                    }}> <span>Save for Later</span> <i class="fa fa-heart" aria-hidden="true"></i></button>

                    {/* <span  style={{marginLeft: "12px"}}>|</span> */}

                    <button id='addtoCart' onClick={() => {
                        props.onClick(props.productsource);
                    }}><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-shopping-cart" aria-hidden="true"></i> </button> <br />


                    <h3>Product Details </h3>

                    <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, debitis? <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio libero odit non, consequuntur optio
                        consequatur voluptate labore ut ipsa impedit ratione illo.</p>

                    <div id='delivery_div'>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <input type="text" placeholder='Check Delivery Pincode' id='input' ref={inputRef} onFocus={onFucus}/>
                        <button onClick={checkPin} id="pinCheckButton">Check</button>
                        <button id="Change" onClick={changeFocus}>Change</button>

                    </div>

                    <div id="deliveryResult"></div>

                </div>
            </div>





        </>
    )
}

