import './AuthHome.css'
import React from 'react';

const AuthHome = () => {
    return ( 
        <>
            <div className='Area-auth'>
                <div className='Auth-inputs-area'>
                    <input type="email" placeholder='Useremail@.com.br'/>
                    <input type="password" placeholder='Password'/>
                </div>
                <button className='bt-Auth'>Login</button>
            </div>
        </>
     );
}
 
export default AuthHome;