import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
// import image1 from '../images/image1.png'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import ReactDOM from 'react-dom';
import Wishlist from '../WishList/Wishlist'


export default function Navbar(props) {
    // console.log(props.count)
    // console.log(props.cartitem)
    const [openModal, setopenModal] = useState(false);
    const [openWishlist, setopenWishlist] = useState(false);
  
   
    useEffect(() => {
        document.addEventListener("scroll", () => {

            let main1 = document.querySelector('.main1');
            if (window.scrollY > 150) {
                main1?.classList.add('scrolled');
            } else {
                main1?.classList.remove('scrolled');
            }
        })
    })
    return (
        <>


            <div className="main1">

                <div className="row1_col1">
                    <img src={logo} alt="" width="130px
                    "/>
                </div>
                <div className="row1_col2">
                    <ul>

                        <Link to="/"> <li>Home</li></Link>


                        <Link to="/Products"> <li>Products</li></Link>
                        <button onClick={() => {
                            console.log("clcikc");
                            setopenWishlist(true)
                        }} ><i class="fa fa-heart" aria-hidden="true"></i> WishList</button>



                        <Link to="/Login" ><li>Login</li></Link>

                        <button onClick={() => {
                            console.log("clcikc");
                            setopenModal(true)
                        }}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart  <span className='cart_badge'>{props.cartitem.length}</span></button>
                    </ul>


                </div>




            </div>

            {openModal && ReactDOM.createPortal(<Cart closeCart={setopenModal} cartitem={props.cartitem} removeitem={props.removeitem}></Cart>, document.getElementById("modal"))}


           {openWishlist && <Wishlist  closeWishlist={setopenWishlist} wishitem={props.wishitem} removefromWishList={props.removefromWishList}></Wishlist>} 



        </>
    )
}
