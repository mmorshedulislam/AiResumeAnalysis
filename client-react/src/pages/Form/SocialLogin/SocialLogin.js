import React from 'react';
import './SocialLogin.css'

const SocialLogin = () => {
    const buttonStyle = {
        width: "100%",
        height: "40px",
        // background: "#fff",
        border: 'none',
        outline: 'none',
        borderRadius: '40px',
        cursor: 'pointer',
        fontSize: '1rem',
        color: 'white',
        // color: '#000',
        fontWeight: '500',
        border: '1px solid'
    }
    return (
        <div>
            <div className='mb-3'>
                <div class="separator">
                    <div class="line"></div>
                    <h6 className='text-white px-2'>OR</h6>
                    <div class="line"></div>
                </div>
            </div>

            <button style={buttonStyle} type="submit">GOOGLE</button>
        </div>
    );
};

export default SocialLogin;