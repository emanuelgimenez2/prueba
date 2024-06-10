import React from 'react';
import './loginForms.css';
import { LiaUserSecretSolid } from "react-icons/lia";
import { RiLockPasswordFill } from "react-icons/ri";
const loginForms = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className="iput-box">
                <input type="text" placeholder='Usuario' required/>
                <LiaUserSecretSolid className='icon'/>
           </div>
            <div className="iput-box">
                <input type="Password" placeholder='Contraseña' required/>
                <RiLockPasswordFill className='icon'/>
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Recordarme</label>
                <a href='#'>Olvide mi cotraseña</a>
            </div>

            <button type="submit">Iniciar Sesión</button>
            <div className="register-link">
                <p>No esta registrado? <a href='#'>Registrarse</a></p>
            </div>
        </form>

    </div>
  );
};

export default loginForms;