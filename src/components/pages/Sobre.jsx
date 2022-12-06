import React from "react";
import { AppFooter, AppHeader } from "../organisms";
import Imagem from "../../Images/perfume.jpg";

import "../../styles/Sobre.css";
export default function Sobre() {
  return (
    <>
      <AppHeader />
      <main>
        <div className="h1">
          <h1>Sobre Nós</h1>
        </div>

        <div>
          <img className="img" src={Imagem} alt="perfumaria" />
        </div>
        <div className="text">
          Nossa empresa surgiu para atender um mercado cada vez maior de pessoas
          e empresas que demandam conteúdo textual de qualidade para alcançarem
          seus objetivos e se diferenciarem no mercado moderno cada vez mais
          competitivo. Nossa equipe operacional é formada por editores,
          revisores, escritores, ghost writers e copywriters, pós-graduados,
          mestres e doutores com formação em humanas, exatas e biológicas e
          amplo e profundo conhecimento teórico e prático em suas áreas de
          atuação. A expertise de nossos consultores garante a produção de
          conteúdo textual de qualidade, em linha com as mais modernas técnicas,
          filosofias e metodologias, em todas áreas do conhecimento, trazendo
          para os textos a vanguarda existente no mundo acadêmico e corporativo,
          no Brasil e no exterior. Seja uma monografia, um trabalho de conclusão
          de curso, uma dissertação, uma tese, um artigo científico, uma
          apresentação, uma palestra ou uma aula. Seja um manual, uma campanha,
          uma comunicação interna, com seus colaboradores, ou externa, com o
          mercado ou seus acionistas. Não importa onde você esteja, no Brasil ou
          no exterior. Não importa se precisa de uma tradução em português ou
          para outro idioma. Dedique-se ao que é realmente importante para você
          ou seu negócio. Deixe que cuidamos do resto.
        </div>
      </main>
      <AppFooter />
    </>
  );
}
