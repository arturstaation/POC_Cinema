import styles from '../styles/DadosFilme.module.css'
import TituloConteudo from './TituloConteudo';


function DadosFilme() {
    return (
        <div id={styles.container_dados}>
            <TituloConteudo endpoint="Sinopse" className='espacamento' />
            <TituloConteudo endpoint="Data" className='espacamento' />
            <TituloConteudo endpoint="Direção" className='espacamento' />
        </div>
    );
}

export default DadosFilme;