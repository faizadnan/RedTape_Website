import React, { useState } from 'react'
import image1 from '../images/category-1.jpg'
import image2 from '../images/category-2.jpg'
import image3 from '../images/category-3.jpg'
import '../Navbar/Navbar.css'

let item = [
    {   
        id: 1,
        src: image1
    },
    {
        id: 2,
        src: image2
    },
    {
        id: 3,
        src: image3
    }
]
export default function Exclusive() {
    const [items, setitems] = useState(item)
    return (
        <>
            <div className="exclusivediv">
                <div className="innerexclusivediv">
                    {
                        items.map((item) => {
                            return <div className="exclusive_imgbox" key={item.id}>
                                <img src={item.src} alt="" />
                            </div>
                        })
                    }


                </div>

            </div>
        </>
    )
}
