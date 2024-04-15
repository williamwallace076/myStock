import './Register.css';
import React from 'react';

const Register = () => {
    return ( 
        <>
         <div className='register'>
            <div className='area-register'>
                <div className='title-form-register'>
                    <h1> Crie sua conta <span>MyStack </span>!</h1>
                </div>

                <form action="submit" className='register-form'>

                    <div className='input-name-area'>
                        <div className='container-input'>
                            <label htmlFor="input-name">Nome</label>
                            <input id='input-name' type="name" placeholder='Nome'/>
                        </div>
                        
                        <div className='container-input'>
                            <label htmlFor="input-Lastname">Sobrenome</label>
                            <input id='input-Lastname' type="name" placeholder='Sobrenome'/>
                        </div>
                    </div>

                    <label htmlFor="input-name">Apelido</label>
                    <input id='input-name' type="name" placeholder='Apelido'/>

                    <label htmlFor="input-email">Email</label>
                    <input id='input-email' type="email" placeholder='Emaildousuario@.com.br'/>

                    <label htmlFor="input-pass">Senha</label>
                    <input id='input-pass' type="password" placeholder='Exemple9517!sd#'/>

                    <div className='area-bt-resgister'>
                        <button className='bt-resgister'>Registrar</button>
                        <span>Já passui cadastro ? <b>Faça login !</b></span>
                    </div>

                </form>
            </div>
        </div>
        </>
     );
}
 
export default Register;