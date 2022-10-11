import React from 'react'
import './Cart.css'
import { useState, useEffect } from 'react';
// import  ReactDOM  from 'react-dom';
export default function Cart(props) {



    const [myitem, setmyitem] = useState(props.cartitem);
    let sum = 0;
    // const [numberOfItems, setnumberOfItems] = useState(true)




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
                   {[...myitem].map(items => {
                       sum += parseInt(items.cost);
                       return <div className='cart_items' key={items.id}>
                           <img src={items.src} alt="" />
                           <div>
                               <div className='cart_items_title'>
                                   <h4>{items.title}</h4>
                                   <h5>${items.cost}</h5>
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
                                       <i class="fa fa-trash-o" aria-hidden="true" ></i> <span>Delete</span></div>
                                   <span>|</span>
                                   <div>  <i class="fa fa-heart" aria-hidden="true"></i> <span>Save</span></div>

                               </div>
                           </div>
                       </div>
                   })}
               </div>

               <div className='total_cost_div'>
                   <div className='total_cost_row1'>
                       <h3>Total Cost</h3>
                       <h3>
                           ${sum}
                       </h3>
                   </div>   
               </div>

               <div className='cart_button'>
                   <button onClick={() => {
                       props.closeCart(false)
                   }}>Close </button>
                   <button>Order</button>
               </div>
           </div>

       </div>
       </>
    )
}
