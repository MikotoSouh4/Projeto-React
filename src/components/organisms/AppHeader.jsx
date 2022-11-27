import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <>
<div class="container">
        <div className="navbar">
          <div className="logo">
            <a href="index.html"><img src="https://i.pinimg.com/originals/89/9a/30/899a3075798ce40e92ea4d4ccb418f4b.jpg" alt="RedStore" width="55px" /></a>
          </div>
          <nav>
            <ul id="MenuItems">
              <li><a className="menuLista"  href="#">Inicio</a></li>
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a href="file:///C:/Users/hpere/OneDrive/%C3%81rea%20de%20Trabalho/T%20Good%20Parfum/Login/Login.html">Entre</a></li>
            </ul>
          </nav>
          <a id= "Carrinho" href="#"><img src="https://i.ibb.co/PNjjx3y/cart.png" alt="" width="30px" height="30px" /></a>
          <img src="https://i.ibb.co/6XbqwjD/menu.png" alt="" class="menu-icon" onclick="menutoggle()" />
        </div>
      </div>
   </>
      
        )
    }
}

export default Header;