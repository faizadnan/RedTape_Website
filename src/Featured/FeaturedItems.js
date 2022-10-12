import React, { useContext, createContext } from 'react'
import '../Navbar/Navbar.css'
import image5 from '../images/product-5.jpg'
import image9 from '../images/product-9.jpg'
import image6 from '../images/product-6.jpg'
import image10 from '../images/product-10.jpg'
import { useState } from 'react'
import { Context } from '../App'
import { Link } from 'react-router-dom'

export default function FeaturedItems(props) {

    const abc = useContext(Context)
    const [item, setitem] = useState(abc);

    console.log(item.length)

    return (
        <>

            <div className="innerfeatureddiv">

                <div className="imgbox featured_imgbox">
                    <img src={image5} alt="" />
                    <h5>HRX Sneakers</h5>
                </div>
                <div className="imgbox featured_imgbox">
                    <img src={image9} alt="" />
                    <h5>Quartz Wrist Watches</h5>
                </div>

                <div className="imgbox featured_imgbox">
                    <img src={image6} alt="" />
                    <h5>Puma T-Shirt</h5>
                </div>
                <div className="imgbox featured_imgbox">
                    <img src={image10} alt="" />
                    <h5>RedTape Shoes</h5>
                </div>
            </div>


            <div>
                <h2 style={{marginTop: "20px"}}> Latest Products</h2>
            </div>

            <div className="featureddiv">

                <div className="innerfeatureddiv">

                
               
                    {
                        
                      item.slice(4,12).map((item) => {
                        
                            return <div className="imgbox" key={item.id}>
                                <Link to='/SingleProduct' >  <img src={item.src} alt="" /></Link>
                                <h4>{item.title}</h4>
                                <div>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i></div>
                                <span>${item.cost}</span> <span>|</span>
                                <span style={{marginLeft: "10px"}}> <span>Save for Later</span> <i class="fa fa-heart" aria-hidden="true"></i></span>
                                
                        
                            </div>


                        })
                    }
                </div>
            </div>
        </>
    )
}


