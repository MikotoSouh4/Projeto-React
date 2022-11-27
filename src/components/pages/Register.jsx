import React from "react";
import "../../styles/Register.css";

export default function Register() {
  return (
    <div className="main-login">
      <div className="login-left">
        <h1>
          Faça seu Registro
          <br />e entre para o mundo dos perfumes!
        </h1>
        <img src="mao.svg" alt="mão com flor" />
      </div>
      <div className="login-right">
        <div className="card-login">
          <h1>REGISTRO</h1>
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
          <button className="btn-login">Registre-se</button>
          <div className="link">
            <p>
              <a href="#">Esqueceu sua Senha?</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
