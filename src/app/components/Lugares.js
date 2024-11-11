import styles from '../styles/Lugares.module.css'
import '../styles/global.css'
async function Lugares() {



    const request = await fetch("http://localhost:3000/assentos");
    let response = [];
    if (request.ok) {

        response = await request.json();
    }


    return (
        <div id={styles.todosLugares}>
            {response.map((assento) => (
                <div
                    className={`${styles.assento} ${assento.disponivel ? 'disponivel' : 'ocupado'}`}
                >
                </div>
            ))}
        </div>
    );
}


export default Lugares;