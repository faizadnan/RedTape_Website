import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import image1 from '../images/user-1.png'
import image2 from '../images/user-2.png'
import image3 from '../images/user-3.png'
import image4 from '../images/logo-coca-cola.png'
import image5 from '../images/logo-godrej.png'
import image6 from '../images/logo-oppo.png'
import image7 from '../images/logo-paypal.png'
import image8 from '../images/logo-philips.png'

const peoples = [
    { src: image1,
        id: 1,
        name: "Emma Watson"
    },
    {  
        id: 2,
        src: image3,
        name: "Sean Parker"
    },
    { 
        id: 3,
        src: image2,
        name: "Garry Fey"
    },
]
export default function People() {
    const [people, setpeople] = useState(peoples)
    return (
        <div className="people">
            <div className="innerpeoplediv">

                {
                    people.map(people => {
                        return <div className="peoplebox" key={people.id}>
                                <i className="fa-solid fa-quote-left"></i>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim, fuga dolorum asperiores odit
                                    harum amet ipsam, tempore quos a voluptas hic error deserunt eligendi laboriosam animi culpa
                                    nisi
                                    assumenda perferendis.
                                </p>
                                <div className="starsize">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                                <img src={people.src} alt="" />

                                <h4>{people.name}</h4>
                            </div>
                        
                    })
                }

            </div>

            <div className="logocontainer">
                <div className="logo"><img src={image4} alt="" /></div>
                <div className="logo"><img src={image5} alt="" /></div>
                <div className="logo"><img src={image6} alt="" /></div>
                <div className="logo"><img src={image7} alt="" /></div>
                <div className="logo"><img src={image8} alt="" /></div>
            </div>
        </div>
    )
}
