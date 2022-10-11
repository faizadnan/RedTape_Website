import React, { useState } from 'react'
import Homepage from './Homepage'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Login from './Login'
import Navbar from './Navbar/Navbar';
import Products from './Products_Page/Products';
import Single_Product from './Single_Product_Page/Single_Product';
import Register from './Register/Register';
import { items } from './Data';

const Context = React.createContext()
export default function App() {
  const [count, setcount] = useState(0)
  const [modalOpen, setmodalOpen] = useState(false)
  const [cartitem, setcartitem] = useState([])

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

  const removeitem=(id)=>{
    console.log("clicked delte")
    console.log(id)
    const newList = cartitem.filter((item) => item.id !== id);
    console.log(newList)
    setcartitem(newList);
  }
  return (



    <Context.Provider value={items}>

      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar count={count} cartitem={cartitem} removeitem={removeitem}></Navbar>
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
