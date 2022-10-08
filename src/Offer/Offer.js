import React from 'react'
import '../Navbar/Navbar.css'
import image1 from '../images/exclusive.png'
export default function Offer() {
  return (
    <div className="offersectiondiv">
    <div className="inneroffersectiondiv">
        <div className="offercol">
            <img src={image1} alt=""/>
        </div>
        <div className="offercol">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, fugiat.</p>
            <h2>Smart Band 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, debitis?<br/>lorem17</p><br/>
            <div className="efg">
                <a href="">Buy Now <i className="fas fa-arrow-right"></i></a>
            </div>
        </div>
    </div>
</div>
  )
}
