import styles from '../styles/BotaoComprar.module.css'

async function BotaoComprar({ listaAssentos }) {



    const request = await fetch("http://localhost:3000/preco");
    let preco = 0;
    if (request.ok) {

        preco = parseFloat(await request.text());
    }


    return (
        <btn id={styles.botao_comprar}>
            <h1>Comprar</h1>
            <p>{`R$ ${(listaAssentos.length * preco).toFixed(2).toString().replace('.', ',')}`}</p>
        </btn>

    );
}

export default BotaoComprar;