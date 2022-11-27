import React from "react";
import { Link } from "react-router-dom";

export default function AppHeader() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">
          <Link to={"/"}>
            <img
              src="https://i.pinimg.com/originals/89/9a/30/899a3075798ce40e92ea4d4ccb418f4b.jpg"
              alt="RedStore"
              width="55px"
            />
          </Link>
        </div>
        <nav>
          <ul id="MenuItems">
            <li>
              <Link className="menuLista" to="#">
                Inicio
              </Link>
            </li>

            <li>
              <Link to={"/Sobre"}>Sobre</Link>
            </li>
            <li>
              <Link to={"/Login"}>Entre</Link>
            </li>
          </ul>
        </nav>
        <Link id="Carrinho" to="#">
          <img
            src="https://i.ibb.co/PNjjx3y/cart.png"
            alt=""
            width="30px"
            height="30px"
          />
        </Link>
        <img
          src="https://i.ibb.co/6XbqwjD/menu.png"
          alt=""
          className="menu-icon"
          onClick="menutoggle()"
        />
      </div>
    </div>
  );
}
