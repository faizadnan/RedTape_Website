import React, { useState } from 'react'
import './Navbar.css'
import logo from '../images/logo.png'
// import image1 from '../images/image1.png'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
export default function Navbar(props) {
    // console.log(props.count)
    // console.log(props.cartitem)

    const [openModal, setopenModal] = useState(false)
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



                        <Link to="/Login" ><li>Login</li></Link>

                        <button onClick={() => {
                            console.log("clcikc");
                            setopenModal(true)
                        }}><i className="fa fa-shopping-cart" aria-hidden="true"></i> <span className='cart_badge'>{props.cartitem.length}</span></button>
                    </ul>


                </div>




            </div>

            {openModal && <Cart closeCart={setopenModal} cartitem={props.cartitem}></Cart>}



        </>
    )
}
