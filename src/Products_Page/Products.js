import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState,useContext,useEffect } from 'react'
import Footer from '../Footer/Footer'
import { Context } from '../App'
import './Products.css'
import { Link } from 'react-router-dom'

export default function Products(props) {

    const items = useContext(Context)
    const [item, setitem] = useState(items);
    const [cartitem, setcartitem] =useState([])
  
    // function onAddHandler(item){
    //     console.log(item)
    // //    if(cartitem.indexOf(item) !== -1) return;
    // cartitem.push(item)
    //    setcartitem([...cartitem,item]);
    //    console.log(cartitem)
    // }
    
    return (
        <>
            {/* <Navbar count={props.count}></Navbar> */}
            <div className="products_page_row2  ">
                <h2>All Products</h2>
                <select name="" id="">
                    <option value="">Sort By</option>
                    <option value="">Sort By price</option>
                    <option value="">Sort By most ordered</option>
                    <option value="">Sort By rating </option>
                    <option value="">Sort By popularity</option>
                </select>
            </div>

            <div className="featureddiv">
           
                <div className="innerfeatureddiv"  >
               
                    {

                        item.map((item) => {
                            return <div className="imgbox" key={item.id} onClick={()=> props.openProduct(item)}>
                            <Link to='/SingleProduct'  >
                                <img src={item.src} alt="" />
                                </Link>
                                <h4>{item.title}</h4>

                                <button id='saveforLater'  onClick={() =>{props.onClickWish(item);
                                }}> <span>Save for Later</span> <i class="fa fa-heart" aria-hidden="true"></i></button>
                                
                                {/* <span  style={{marginLeft: "12px"}}>|</span> */}

                                <button id='addtoCart' onClick={() =>props.onClick(item)}><i class="fa fa-plus" aria-hidden="true"></i> <i class="fa fa-shopping-cart" aria-hidden="true"></i> </button> <br />
                                
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                                <p>${item.cost}</p>

                              


                               
                            </div>
                        }
                        )
                    }
                </div>
            


            </div>
            <div className="product_page_btn2">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>4</span>
                    <span><i className="fas fa-arrow-right" ></i></span>
                    
                </div>
          
        </>
    )
}
