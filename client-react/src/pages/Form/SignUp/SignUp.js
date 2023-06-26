import React from 'react';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa'
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    return (
        <div className='form-body'>
            <section>
                <div class="login-box ">
                    <form action="">
                        <h2>Signup</h2>
                        <div class="input-box">
                            <span class="icon2">
                                {/* <ion-icon name="mail"></ion-icon> */}
                                {/* <MdEmail name="name" /> */}
                                <FaUserAlt></FaUserAlt>
                            </span>
                            <input type="name" required />
                            <label>Name</label>
                        </div>
                        <div class="input-box">
                            <span class="icon2">
                                {/* <ion-icon name="mail"></ion-icon> */}
                                <MdEmail name="mail" />
                            </span>
                            <input type="email" required />
                            <label>Email</label>
                        </div>

                        <div class="input-box">
                            <span class="icon2">
                                {/* <ion-icon name="lock-closed"></ion-icon> */}
                                {/* <MdEmail name="mail" /> */}
                                <AiFillLock></AiFillLock>
                            </span>
                            <input type="password" required />
                            <label>Password</label>
                        </div>

                        <div class="remember-forgot">
                            <label><input type="checkbox" /> Remember me</label>
                            <a href="#">Forgot Password</a>
                        </div>

                        <button className='form-login-button' type="submit">Login</button>
                        <div class="register-link">
                            <p>Don't have an account? <a href="#">Register</a></p>
                        </div>

                        <SocialLogin></SocialLogin>


                    </form>

                </div>
            </section>
        </div>
    );
};

export default SignUp;