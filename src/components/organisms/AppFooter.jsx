import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(

            <>
             <div ClassName="footer">
        <div ClassName="container">
          <div ClassName="row">
            <div ClassName="footer-col-1">
              <h3>Baixe nosso APP</h3>
              <p>Baixe para Android e IOS</p>
              <div ClassName="app-logo">
                <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
                <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
              </div>
            </div>
      
      
            <div ClassName="footer-col-3">
              <h3>Links usáveis</h3>
              <ul>
                <li>Cupons</li>
                <li>Blog pessoal</li>
                <li>Politica de privacidade</li>
                <li>Seja afiliado</li>
              </ul>
            </div>
      
            <div ClassName="footer-col-4">
              <h3>Siga nossa página</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                 <li>Instagram</li>
              </ul>
            </div>
          </div>
          <hr />
          <p ClassName="copyright">Copyright &copy; 2022 - T Good Parfum</p>
        </div>
      </div>
            </>
        )
    }
}

export default Footer;