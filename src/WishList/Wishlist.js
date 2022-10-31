import React, { useEffect } from 'react'
import '../Cart/Cart.css'
import './WishList.css'

import { useState, useReducer } from 'react';
// import  ReactDOM  from 'react-dom';
const initialState = { count: 0 };

// let quantity= document.getElementById("quantity_input").value
// console.log(quantity)


export default function WishList(props) {
   
    const [mywishitem, setmywishitem] = useState(props.wishitem);
    
   
    // console.log(obj1)
    // console.log(props.cartitem)
 
    let sum = 0;
    return (
        <>
            <div className='okay'>

                <div className='cart_container'>
                    <div className='heading'>

                        <h2>Your Cart</h2>
                        <i class="fa fa-times" aria-hidden="true" onClick={() => {
                            props.closeWishlist(false)
                        }}></i>
                    </div>


                    <div className='cart_items_outer'>
                        
                        {(mywishitem.length > 0) ? mywishitem.map(items => {
                            sum += parseInt(items.cost);
                            return <div className='cart_items' key={items.id}>
                                <img src={items.src} alt="" />
                                <div className='carts_info'>
                                    <div className='cart_items_title'>
                                        <h4>{items.title}</h4>
                                        <h5>${items.cost }</h5>
                                    </div>

                                    <div className='cart_items_row2'>
                                        <h6>${items.cost}</h6>
                                        <h6>|</h6>
                                        <h6>Rating</h6>

                                        <h6>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star-half"></i>

                                        </h6>
                                    </div>
                                    
                                    <div className="cart_items_row3">
                                        <div>
                                            <i class="fa fa-trash-o" aria-hidden="true" ></i> <span onClick={() => { props.removefromWishList(items.id); setmywishitem(props.wishitem) }}>Remove</span>
                                            
                                            
                                        </div>
                                        <span>|</span>

                                        <button id='toCart' onClick={()=> props.onClick(items)}><i class="fa fa-plus" ></i> <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                         </button> 

                                    </div>
                                    <span>Quantity: <input id="quantity_input" type="number" defaultValue="1" min="1" max="5" /></span>
                              
                                  

                                </div>
                            </div>
                        }) : <h2>No items in WishList</h2>}
                    </div>

                    {(mywishitem.length > 0) && <div className='total_cost_div'>
                        <div className='total_cost_row1'>
                            <h3>Total Cost</h3>
                            <h3>
                                ${sum}
                            </h3>
                        </div>
                    </div>}

                    <div className='cart_button'>
                        <button onClick={() => {
                            props.closeWishlist(false)
                        }}>Close </button>
                       
                    </div>
                </div>

            </div>
        </>
    )
}
