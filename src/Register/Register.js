import React from 'react'
import './Register.css'
import image1 from '../images/image1.png'
import './Register1.scss'

export default function Register() {    
  return (
    <>
          <div className="account_page_div">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src={image1} width="100%"/>
                    </div>

                    <div className="col">

                        <div className="form_container">
                            <div className="form_btn">
                                <span>Register</span>
                            </div>                    
                            <form action="" className="login_form" id="login_form">
                                <input type="text" name="" id="" placeholder="Username"/>
                                <input type="email" name="" id="" placeholder="Email"/>
                                <input type="password" name="" id="" placeholder="Password"/><br/>
                                <button type="Submit">Register</button>
                      
                            </form>

                        </div>

                    </div>
                </div>


            </div>

        </div>
    </>
  )
}
