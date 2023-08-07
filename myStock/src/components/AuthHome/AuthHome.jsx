import './AuthHome.css'
import React from 'react';

const AuthHome = () => {
    return ( 
        <div className='AuthHome'>
            <div className='Area-auth'>
                <div className='Auth-inputs-area'>
                    <label htmlFor="input-email">Email</label>
                    <input id='input-email' type="email" placeholder='Useremail@.com.br'/>
                    <label htmlFor="input-pass">Senha</label>
                    <input id='input-pass' type="password" placeholder='Password'/>
                </div>
                <button className='bt-Auth'>Login</button>
            </div>
        </div>
     );
}
 
export default AuthHome;