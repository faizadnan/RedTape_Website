import React from 'react'
import classes from './Login.module.css'
import { Link } from 'react-router-dom'
import image from './images/image1.png'

export default function Login() {
    return (
        <>


            <div class="account_page_div">
                <div class={classes.container}>
                    <div class={classes.row}>
                        <div class="col">
                            <img src={image} width="100%" alt='Here is a image' />
                        </div>

                        <div class={classes.col}>

                            <div class="form_container">
                                <div class="form_btn">

                                    <span>Login</span>

                                </div>

                                <form action="" class="login_form" id="login_form">
                                    <input type="text" name="" id="" placeholder="Username" />
                                    <input type="password" name="" id="" placeholder="Password" /> <br /><br />
                                    <button type="Submit">Submit</button><br />
                                    <a href="">Forgot Password</a>
                                    <br /> <br />
                                    <p>Don't have an account?</p>

                                 <Link to='/Register'>  <p style={{ color: "grey" }}>Click Here </p></Link> 

                                </form>


                            </div>

                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
