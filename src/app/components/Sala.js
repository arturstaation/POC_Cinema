import styles from '../styles/Sala.module.css'
import Legenda from './Legenda';
import Lugares from './Lugares';
import Tela from './Tela';


async function Sala() {


    return (
        <container id={styles.container_sala}>
            <div className='espacamento'>
                <Lugares id={styles.lugares}></Lugares>
                <Tela></Tela>
            </div>
            <Legenda></Legenda>
        </container>
    );
}


export default Sala;