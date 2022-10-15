import React from 'react'
import Navbar from './Navbar/Navbar'
import './Navbar/Navbar.css'
import Bigpicture from './Bigpicture/Bigpicture'
import Exclusive from './Exclusiv/Exclusive'
import Featured from './Featured/Featured'
import Offer from './Offer/Offer'
import People from './People_Section/People'
import Footer from './Footer/Footer'
import Cart from './Cart/Cart'





export default function Homepage(props) {

   
  return (
   
   <>
      {/* <Navbar count={props.count} openCart={props.openCart} ></Navbar> */}
      <Bigpicture></Bigpicture>
      <Exclusive></Exclusive>
      <Featured></Featured>
      <Offer></Offer>
      <People></People>
      <Footer></Footer>
      {/* <Cart/> */}

    </>
  )
  console.log(props.count)
}
