
import BotaoComprar from './components/BotaoComprar';
import DadosFilme from './components/DadosFilme';
import Sala from './components/Sala';
import TituloConteudo from './components/TituloConteudo';

import styles from "./page.module.css";

function HomePage() {

  return (
    <main id={styles.tudo}>

      <TituloConteudo endpoint={"Titulo"} />
      <section id={styles.principal} >
        <Sala></Sala>
        <DadosFilme></DadosFilme>
      </section>
      <BotaoComprar id="compra"></BotaoComprar>
    </main>
  );

}

export default HomePage;