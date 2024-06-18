// RegisterForm.js
/* registerForms.css */

import React, { useState } from 'react';
import './registerForms.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviarías los datos al servidor
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <div className="input-box">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="firstName"
            placeholder="Nombre"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="lastNameName"
            placeholder="Apellido"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="username"
            placeholder="Usuario"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="password"
            placeholder="Contaseña"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Agrega los otros campos aquí */}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default RegisterForm;
