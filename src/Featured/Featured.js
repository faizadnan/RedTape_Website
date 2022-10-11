import React from 'react'
import FeaturedItems from './FeaturedItems'

export default function Featured(props) {
    return (
        <div className="featureddiv">
            <div>
                <h2 style={{marginTop: "20px"}}>Featured Products</h2>
            </div>
            <FeaturedItems items={props.items}></FeaturedItems>
        </div>
    )
}
