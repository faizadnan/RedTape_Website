import React from 'react'
import '../Navbar/Navbar.css'
import image1 from '../images/app-store.png'
import image2 from '../images/play-store.png'
import image3 from '../images/logo.png'
export default function Footer() {
    return (
        <div className="mainfooterdiv">
            <div className="footerdiv">

                <div className="footerbox footerbox1">

                    <h4 style={{marginBottom: "0px"}}>Download our App</h4>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>

                    <div className="footerdiv1"> <img src={image1} alt="" />
                        <img src={image2} alt="" />
                    </div>

                </div>
                <div className="footerbox footerbox2">

                    <img src={image3} alt="" />

                    <div style={{textAlign: "center"}}>
                        <p>Lorem ipsum dolor sit amet consectetur .</p>
                        <p>Lorem ipsum,sectetur adipisicing.</p>
                    </div>
                </div>
                <div className="footerbox footerbox3">
                    <h4>Useful Links</h4>
                    <p>Okay</p>
                    <p>Okay</p>
                    <p>Okay</p>
                </div>



            </div>
            <div className="copyright">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur, eveniet!
            </div>
        </div>
    )
}
