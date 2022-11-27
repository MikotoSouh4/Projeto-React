import React from "react";
import "../../styles/home.css";
import { AppHeader, AppFooter } from "../organisms";

export default function Home() {
  return (
    <div>
      <AppHeader />
      <main>
        <div className="small-container">
          <div className="row row-2">
            <h2>Todos os Produtos</h2>
            <select>
              <option value="">Ferrari Black</option>
              <option value="">212 VIP</option>
              <option value="">Invictus</option>
              <option value="">Montblanc</option>
              <option value="">Sauvage</option>
              <option value="">Armani Code</option>
              <option value="">Todos os Produtos</option>
            </select>
          </div>

          <div className="row">
            <div className="col-4">
              <a href={"/Ferrari-Black"}>
                <img
                  src="http://d2r9epyceweg5n.cloudfront.net/stores/001/074/788/products/screen-shot-2020-03-04-at-21-26-291-d781505544a3a4036015833682100595-640-0.png"
                  alt=""
                />
              </a>
              <h4>Ferrari Black</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>R$150.00</p>
            </div>

            <div className="col-4">
              <a href={"/212-VIP"}>
                <img
                  src="https://epocacosmeticos.vteximg.com.br/arquivos/ids/485797-500-500/212vipfemininoeaudeparfumcarolinaherrera--2-.jpg?v=637867659981130000"
                  alt=""
                />
              </a>
              <h4>212 VIP</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>R$380,00</p>
            </div>

            <div className="col-4">
              <a href={"/Invictus"}>
                <img
                  src="https://images.tcdn.com.br/img/img_prod/589063/perfume_masculino_invictus_paco_rabanne_importado_2415_1_20191030152315.jpg"
                  alt=""
                />
              </a>
              <h4>Invictus</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <p>R$515,00</p>
            </div>

            <div className="col-4">
              <a href={"/Montblanc"}>
                <img
                  src="https://m.media-amazon.com/images/I/519E-jtQs1L._AC_SX679_.jpg"
                  alt=""
                />
              </a>
              <h4>Montblanc</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>R$439,00</p>
            </div>
          </div>

          <div className="row">
            <div className="col-4">
              <a href={"/Sauvage"}>
                <img
                  src="https://i.zst.com.br/thumbs/12/17/15/1951698942.jpg"
                  alt=""
                />
              </a>
              <h4>Sauvage</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>R$629,00</p>
            </div>

            <div className="col-4">
              <a href={"/Armani-Code"}>
                <img
                  src="https://imgs.casasbahia.com.br/11074703/1xg.jpg?imwidth=500"
                  alt=""
                />
              </a>
              <h4>Armani Code</h4>
              <div className="rating">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <p>R$480,00</p>
            </div>
          </div>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
