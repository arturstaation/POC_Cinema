import BotaoComprar from './components/BotaoComprar';
import DadosFilme from './components/DadosFilme';
import Sala from './components/Sala';
import TituloConteudo from './components/TituloConteudo';
import styles from "./styles/page.module.css";
import './styles/global.css';

function HomePage() {

  return (
    <main id={styles.tudo} className='lightMode'>

      <TituloConteudo endpoint="Titulo" />
      <section id={styles.principal} >
        <Sala></Sala>
        <DadosFilme></DadosFilme>
      </section>
      <BotaoComprar id="compra" listaAssentos={[]}></BotaoComprar>
    </main>
  );

}

export default HomePage;