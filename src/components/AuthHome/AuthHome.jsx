import './AuthHome.css'
import React from 'react';

const AuthHome = () => {
    return ( 
        <div className='AuthHome'>
            <div className='Area-auth'>
                <div className='title-auth-area'>
                <h1>Faça login na sua conta <span>MyStack </span>!</h1>
                </div>
                <div className='Auth-inputs-area'>
                    <label htmlFor="input-email">Email</label>
                    <input id='input-email' type="email" placeholder='Useremail@.com.br'/>
                    <label htmlFor="input-pass">Senha</label>
                    <input id='input-pass' type="password" placeholder='Password'/>
                </div>
                <div className='area-bt-auth'>
                    <button className='bt-Auth'>Login</button>
                    <span>Ainda não tem cadastro ? <b>Cadastre-se aqui !</b></span>
                </div>
            </div>
        </div>
     );
}
 
export default AuthHome;