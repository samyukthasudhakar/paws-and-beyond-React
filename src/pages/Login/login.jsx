import React, {useState} from 'react'
import { Link } from "react-router-dom";

import { Header, Footer } from '../../components';
import { authBG } from '../../assets/images';
import { useAuth } from '../../context/'
import useScrollToTop from '../../utils/scrollToTop'

import './login.css'

function Login(){
    const [user, setUser] = useState({email:'',password:''})
    const { loginHandler } = useAuth()
    
    useScrollToTop()

    return(
        <div>
            <Header />
            <div className="flex-space-btwn flex-center space-around login-parent">
                
                <img className="auth-landing-img" src={authBG} alt="illustration of pets being together"/>
                
                <div>
                <form className="flex-column glass-card login-form" onSubmit={(e)=>loginHandler(e, user)}>
                    <div className="flex-column flex-center">
                        <h3 className='form-heading'>Login</h3>
                        <input type="text" placeholder="Email" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, email:e.target.value})} />
                        <input type="password" placeholder="Password" className='form-input mg-tb-1' onInput={(e)=>setUser({...user, password:e.target.value})} />
                        <div className="flex-layout space-between w-100">
                            <div className="flex-layout">
                                <input id='remember-me' type="checkbox"/> 
                                <label for='remember-me' className="fs-13px">Remember me</label>
                            </div>
                            <Link className="link-txt" to="*">Forgot Password ?</Link>      
                        </div>
                        <div className="mg-1 w-100">
                        <button className="auth-btn">Login</button>
                        <button className="auth-btn-secondary" onClick={(e)=>loginHandler(e,{email:'johndoe@gmail.com',password:'john123'})}>Login as Guest</button>
                        </div>
                        <Link className="link-txt" to="/signup">Create New Account</Link>
                    </div>
                </form>
            </div>
        </div>
            <Footer />
        </div>
    )
}

export { Login }