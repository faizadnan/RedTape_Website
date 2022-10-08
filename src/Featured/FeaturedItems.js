import React, { useContext, createContext } from 'react'
import '../Navbar/Navbar.css'
import image1 from '../images/product-1.jpg'
import image2 from '../images/product-2.jpg'
import image3 from '../images/product-3.jpg'
import image4 from '../images/product-4.jpg'
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

                <div className="imgbox">
                    <img src={image1} alt="" />
                </div>
                <div className="imgbox">
                    <img src={image2} alt="" />
                </div>

                <div className="imgbox">
                    <img src={image3} alt="" />
                </div>
                <div className="imgbox">
                    <img src={image4} alt="" />
                </div>
            </div>


            <div>
                <h2>Latest Products</h2>
            </div>

            <div className="featureddiv">

                <div className="innerfeatureddiv">

                
               
                    {
                        
                      item.map((item) => {
                        
                            return <div className="imgbox" key={item.id}>
                                <Link to='/SingleProduct' >  <img src={item.src} alt="" /></Link>
                                <h4>{item.title}</h4>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half"></i>
                                <p>{item.cost}</p>
                                
                        
                            </div>


                        })
                    }
                </div>
            </div>
        </>
    )
}


