import styles from '../styles/Legenda.module.css'
import BolinhaTexto from './BolinhaTexto';

function Legenda() {


    return (
        <div id={styles.estados}>

            <BolinhaTexto estado="livre"></BolinhaTexto>
            <BolinhaTexto estado="selecionado"></BolinhaTexto>
            <BolinhaTexto estado="ocupado"></BolinhaTexto>



        </div>
    );
}


export default Legenda;