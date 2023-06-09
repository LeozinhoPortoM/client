import "./Auth.css";

import { Link } from "react-router-dom";
import { Message } from "../../components/Message/Message";

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { register, reset } from "../../slices/authSlice";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword,
    };

    console.log(user);

    dispatch(register(user));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div id="register">
      <h2>React Gram</h2>
      <p>Cadastre-se para ver as fotos dos seus amigos.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          placeholder="Nome"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <input
          type="email"
          autoComplete="off"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email || ""}
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password || ""}
        />
        <input
          type="password"
          autoComplete="off"
          placeholder="Confirme a senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword || ""}
        />
        {!loading && <button type="submit">Cadastrar</button>}
        {loading && (
          <button type="submit" disabled>
            Aguarde...
          </button>
        )}
        {error && <Message msg={error} type={"error"} />}
      </form>
      <p>
        Já tem conta? <Link to={"/login"}>Clique aqui.</Link>{" "}
      </p>
    </div>
  );
};
