import styles from '../styles/Sala.module.css'
import Legenda from './Legenda';
import Lugares from './Lugares';
import Tela from './Tela';


async function Sala() {


    return (
        <section >
            <div>
                <Lugares></Lugares>
                <Tela></Tela>
            </div>
            <Legenda></Legenda>
        </section>
    );
}


export default Sala;