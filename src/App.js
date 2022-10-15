import React, { useState } from 'react'
import Homepage from './Homepage'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Login from './Login'
import Navbar from './Navbar/Navbar';
import Products from './Products_Page/Products';
import Single_Product from './Single_Product_Page/Single_Product';
import Register from './Register/Register';
import { items } from './Data';
import './App.css'

const Context = React.createContext()
export default function App() {
  const [count, setcount] = useState(0)
  const [modalOpen, setmodalOpen] = useState(false)
  const [cartitem, setcartitem] = useState([])
  const [colorChange, setColorchange] = useState(false);

  //function for changing color of navbar:-


  //--------------------------------------


  function onAddtoCartHandler() {
    setcount(count + 1);
    console.log(count)
  }

  function openCart() {
    setmodalOpen(true)
  }


  const addtoCart = (item) => {
    cartitem.push(item);
    console.log(cartitem);
    setcartitem([...cartitem]);
  }

  const removeitem = (id) => {
    setcartitem(cartitem.filter((item) => item.id !== id));
  }

  //change color of navbar on scroll:-
  window.addEventListener("scroll", function () {
    const changeNavbarColor = () => {
      console.log("scrolled")
      if (window.scrollY >= 100) {
        console.log("scrolling")
        setColorchange(true);
      }
      else {
        setColorchange(false);
      }
    };
  })
  return (



    <Context.Provider value={items}>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar className={colorChange ? 'main1 colorChange' : 'main1'} count={count} cartitem={cartitem} removeitem={removeitem}></Navbar>
        <Routes>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path='/' element={<Homepage count={count} openCart={openCart} />} />
          <Route path='/Products' element={<Products onClick={addtoCart} />} />
          <Route path='/SingleProduct' element={<Single_Product items={items} onClick={onAddtoCartHandler} count={count} />} />


        </Routes>
      </BrowserRouter>
    </Context.Provider>

  )
}

export { Context };
