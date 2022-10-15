import React, { useEffect } from 'react'
import './Cart.css'
import { useState, useReducer } from 'react';
// import  ReactDOM  from 'react-dom';
const initialState = { count: 0 };

// let quantity= document.getElementById("quantity_input").value
// console.log(quantity)
   

export default function Cart(props) {
    const [myitem, setmyitem] = useState(props.cartitem);
    

  
 
    let sum = 0;
    return (
        <>
            <div className='okay'>

                <div className='cart_container'>
                    <div className='heading'>

                        <h2>Your Cart</h2>
                        <i class="fa fa-times" aria-hidden="true" onClick={() => {
                            props.closeCart(false)
                        }}></i>
                    </div>


                    <div className='cart_items_outer'>
                        
                        {(myitem.length > 0) ? myitem.map(items => {
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
                                            <i class="fa fa-trash-o" aria-hidden="true" ></i> <span onClick={() => { props.removeitem(items.id) }}>Delete</span>
                                        </div>
                                        <span>|</span>
                                        <div>  <i class="fa fa-heart" aria-hidden="true"></i> <span>Save</span>
                                        </div>

                                    </div>
                                    <span>Quantity: <input id="quantity_input" type="number" defaultValue="1" min="1" max="5" /></span>
                        

                                </div>
                            </div>
                        }) : <h2>No items to show</h2>}
                    </div>

                    {(myitem.length > 0) && <div className='total_cost_div'>
                        <div className='total_cost_row1'>
                            <h3>Total Cost</h3>
                            <h3>
                                ${sum}
                            </h3>
                        </div>
                    </div>}

                    <div className='cart_button'>
                        <button onClick={() => {
                            props.closeCart(false)
                        }}>Close </button>
                        <button onClick={() => {
                            alert("Your Order has been placed")
                        }}>Order</button>
                    </div>
                </div>

            </div>
        </>
    )
}
