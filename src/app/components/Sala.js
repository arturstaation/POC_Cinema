import styles from '../styles/Sala.module.css'
import Legenda from './Legenda';
import Lugares from './Lugares';
import Tela from './Tela';


function Sala({onToggleAssento, listaAssentos = []}) {

    return (
        <div id={styles.container_sala}>
            <div className='espacamento espacamento_direita'>
                <Lugares id={styles.lugares} listaAssentos={listaAssentos} onToggleAssento={onToggleAssento}></Lugares>
                <Tela></Tela>
            </div>
            <Legenda></Legenda>
        </div>
    );
}


export default Sala;