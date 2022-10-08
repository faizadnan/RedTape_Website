import React, { useContext, createContext } from 'react'
import image5 from '../images/product-5.jpg'
import image6 from '../images/product-6.jpg'
import image7 from '../images/product-7.jpg'
import image8 from '../images/product-8.jpg'
import image9 from '../images/product-9.jpg'
import image10 from '../images/product-10.jpg'
import image11 from '../images/product-11.jpg'
import image12 from '../images/product-12.jpg'



export default function MyContext(props) {
    const Context = createContext()
    let items = [
        {
            title: "Red Printed T-Shirt",
            src: image5,
            cost: "50.00",
        }, {
            title: "Red Printed T-Shirt",
            src: image6,
            cost: "50.00",
        }, {
            title: "Red Printed T-Shirt",
            src: image7,
            cost: "50.00",
        }, {
            title: "Red Printed T-Shirt",
            src: image8,
            cost: "50.00",
        },
        {
            title: "Red Printed T-Shirt",
            src: image9,
            cost: "50.00",
        },
        {
            title: "Red Printed T-Shirt",
            src: image10,
            cost: "50.00",
        },
        {
            title: "Red Printed T-Shirt",
            src: image11,
            cost: "50.00",
        },
        {
            title: "Red Printed T-Shirt",
            src: image12,
            cost: "50.00",
        },
    ]



    return (

        <Context.Provider value={items}>
            {props.children}
        </Context.Provider>
    )
}
