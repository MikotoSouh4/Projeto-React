import React from "react";

export default function AppFooter() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Baixe nosso APP</h3>
            <p>Baixe para Android e IOS</p>
            <div className="app-logo">
              <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
              <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
            </div>
          </div>

          <div className="footer-col-3">
            <h3>Links usáveis</h3>
            <ul>
              <li>Cupons</li>
              <li>Blog pessoal</li>
              <li>Politica de privacidade</li>
              <li>Seja afiliado</li>
            </ul>
          </div>

          <div className="footer-col-4">
            <h3>Siga nossa página</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright &copy; 2022 - T Good Parfum</p>
      </div>
    </div>
  );
}
