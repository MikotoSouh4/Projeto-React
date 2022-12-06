import React from "react";
import "../../styles/Login.css";
import Logo from "../../Images/Fav.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="main-login">
      <div className="login-left">
        <h1>
          Faça login
          <br />e entre para o mundo dos perfumes!
        </h1>
        <img className="img" src={Logo} alt="mão com flor" />;
      </div>

      <div className="login-right">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div className="textfield">
            <label htmlFor="Usuário">Usuário</label>
            <input
              type="text"
              name="Usuário"
              placeholder="Digite aqui seu Usuário"
            />
          </div>

          <div className="textfield">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              placeholder="Digite aqui sua Senha"
            />
          </div>

          <button className="btn-login">Login</button>
          <div className="link">
            <p>
              <a href="#">Esqueceu sua Senha?</a>
            </p>
            <p>
              <Link to={"/Register"}>Registre-se</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
