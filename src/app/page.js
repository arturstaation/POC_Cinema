'use client'
import { useEffect, useState } from 'react';
import BotaoComprar from './components/BotaoComprar';
import DadosFilme from './components/DadosFilme';
import Sala from './components/Sala';
import TituloConteudo from './components/TituloConteudo';
import styles from "./styles/page.module.css";
import './styles/global.css';

function HomePage() {

  const [listaAssentos, setListaAssentos] = useState([]);

  const handleListaAssentos = (disponivel, id) => {
    if (disponivel) {
      setListaAssentos((prevLista) =>
        prevLista.includes(id)
          ? prevLista.filter((assento) => assento !== id)
          : [...prevLista, id]);
    }
  };


  return (
    <body>
      <main id={styles.tudo}>
        <TituloConteudo endpoint="Titulo" />

        <section id={styles.principal}>
          <Sala onToggleAssento={handleListaAssentos} listaAssentos={listaAssentos}></Sala>
          <DadosFilme></DadosFilme>
        </section>

        <BotaoComprar id="compra" listaAssentos={listaAssentos}></BotaoComprar>
      </main>
    </body>
  );

}

export default HomePage;
