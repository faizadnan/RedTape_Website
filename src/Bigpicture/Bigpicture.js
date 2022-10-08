import React from 'react'
import '../Navbar/Navbar.css'
import image1 from '../images/image1.png'
import { Link } from 'react-router-dom'
import Products from '../Products_Page/Products'
export default function Bigpicture() {
  return (
    <div className="bigpicutrediv">
      <div className="bigpicinnerdiv">
        <div className="bpdiv1 abc efg">
          <h2>Give Your Workout <br /> A new lifestle!</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas tempore maxime, quis esse
            earum et
            quo architecto eius magni in sunt .</p><br />
          <Link to='/Products'>Explore Now <i className="fas fa-arrow-right"></i></Link>
        </div>
        <div className="picdiv abc">

          <img src={image1} alt="" />
        </div>
      </div>

    </div>
  )
}
