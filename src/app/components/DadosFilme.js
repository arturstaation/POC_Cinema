import styles from '../styles/DadosFilme.module.css'
import TituloConteudo from './TituloConteudo';


function DadosFilme() {
    return (
        <div>
            <TituloConteudo endpoint={"Sinopse"} />
            <TituloConteudo endpoint={"Data"} />
            <TituloConteudo endpoint={"Direção"} />
        </div>
    );
}

export default DadosFilme;