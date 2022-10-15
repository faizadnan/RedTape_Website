import React from 'react'
import classes from  './Register.module.css'
import image1 from '../images/image1.png'
import './Register1.scss'

export default function Register() {    
  return (
    <>
          <div className={classes.account_page_div}>
           
                <div className={classes.row}>
                    <div className={classes.col}>
                        <img src={image1} width="100%"/>
                    </div>

                    <div className={classes.col}>

                        <div className={classes.form_container}>
                            <div className={classes.form_btn}>
                                <span>Register</span>
                            </div>                    
                            <form action="" className={classes.login_form} id="login_form">
                                <input type="text" name="" id="" placeholder="Username"/>
                                <input type="email" name="" id="" placeholder="Email"/>
                                <input type="password" name="" id="" placeholder="Password"/><br/>
                                <button type="Submit">Register</button>
                      
                            </form>

                        </div>

                    </div>
                </div>



        </div>
    </>
  )
}
