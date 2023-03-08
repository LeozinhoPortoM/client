import "./Auth.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div id="register">
      <h2>React Gram</h2>
      <p>Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirme a senha" />
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem conta? <Link to={"/login"}>Clique aqui.</Link>{" "}
      </p>
    </div>
  );
};
