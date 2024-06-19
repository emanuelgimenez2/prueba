// ForgotPasswordForm.js

import React, { useState } from 'react';

const ForgotPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    lastPassword: '',
    newPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí enviarías los datos al servidor para restablecer la contraseña
    console.log('Datos enviados:', formData);
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Restablecer Contraseña</h1>
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
            name="username"
            placeholder="Nombre de Usuario"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="lastPassword"
            placeholder="Última Contraseña Recordada"
            value={formData.lastPassword}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="newPassword"
            placeholder="Nueva Contraseña"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Restablecer</button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
