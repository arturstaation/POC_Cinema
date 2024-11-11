import styles from '../styles/BolinhaTexto.module.css'
import '../styles/global.css'
function BolinhaTexto({ estado }) {
    return (
        <div className={styles.legenda}>
            <span className={`${styles.bolinha} ${estado === 'livre' ? 'disponivel' : ''} 
                    ${estado === 'ocupado' ? 'ocupado' : ''} 
                    ${estado === 'selecionado' ? 'selecionado' : ''}`}></span>
            <span >{estado}</span>
        </div>
    );
}

export default BolinhaTexto;