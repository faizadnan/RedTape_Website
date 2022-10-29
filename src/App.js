import React, { useState } from 'react'
import Homepage from './Homepage'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter, json } from 'react-router-dom';
import Login from './Login'
import Navbar from './Navbar/Navbar';
import Products from './Products_Page/Products';
import Wishlist from '../src/WishList/Wishlist'
import Single_Product from './Single_Product_Page/Single_Product';
import Register from './Register/Register';
import { items } from './Data';
import './App.css'
import Footer from './Footer/Footer';

const Context = React.createContext()
export default function App() {
  let itemfromls = localStorage.getItem("cartitem");
  let cartItems =JSON.parse(itemfromls)
  const [count, setcount] = useState(0)

  const [cartitem, setcartitem] = useState(() => {
    // get the todos from localstorage
    const savedItems = localStorage.getItem("cartitem");
    // if there are todos stored)
    if (savedItems) {
      // return the parsed the JSON object back to a javascript object
      return JSON.parse(savedItems);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });
  const [wishitem, setwishitem]= useState([])
  localStorage.setItem("cartitem", JSON.stringify(cartitem) )
 
  function onAddtoCartHandler() {
    setcount(count + 1);
    console.log(count)
  }

  const addtoCart = (item) => {
    cartitem.push(item);
    console.log(cartitem);
    setcartitem([...cartitem]);
  
    // setcartitem(localStorage.getItem(JSON.parse("cartitem")))
  }


  const removeitem = (id) => {
    setcartitem(cartitem.filter((item) => item.id !== id));
  }

  //-------------------------Wishlist:-
  const addtoWishlist = (item) => {
    wishitem.push(item);
    console.log(wishitem);
    setwishitem([...wishitem]);
  
    // setcartitem(localStorage.getItem(JSON.parse("cartitem")))
  }



  return (



    <Context.Provider value={items}>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar count={count} cartitem={cartitem} removeitem={removeitem} wishitem={wishitem}></Navbar>
        <Routes>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/' element={<Homepage count={count} />} />
          <Route path='/Products' element={<Products onClick={addtoCart} onClickWish={addtoWishlist}/>} />
      
          <Route path='/SingleProduct' element={<Single_Product items={items} onClick={onAddtoCartHandler} count={count} />} />


        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </Context.Provider>

  )
}

export { Context };
