import React from "react";
import "../../styles/Login.css";
import Logo from "../../Images/Logo.png";

export default function Login() {
  return (
    <div className="main-login">
      <div className="login-left">
        <h1>
          Faça login
          <br />e entre para o mundo dos perfumes!
        </h1>
        <img src={Logo} alt="mão com flor" />;
      </div>

      <div className="login-right">
        <div className="card-login">
          <h1>LOGIN</h1>
          <div className="textfield">
            <label htmlfor="Usuário">Usuário</label>
            <input
              type="text"
              name="Usuário"
              placeholder="Digite aqui seu Usuário"
            />
          </div>

          <div className="textfield">
            <label htmlfor="senha">Senha</label>
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
              <a href="file:///C:/Users/hpere/OneDrive/%C3%81rea%20de%20Trabalho/T%20Good%20Parfum/Registro/REGISTRO.html">
                Registre-se
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
