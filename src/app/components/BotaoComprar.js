'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/BotaoComprar.module.css';

function BotaoComprar({ listaAssentos }) {
    const [preco, setPreco] = useState(0);

    useEffect(() => {
        const fetchPreco = async () => {
            const request = await fetch("http://localhost:3000/preco");
            if (request.ok) {
                const precoData = await request.text();
                setPreco(parseFloat(precoData));
            }
        };

        fetchPreco();
    }, []);


    const compraRealizada = () =>{
        alert(`Você Comprou ${listaAssentos.length} ingressos por R$ ${(listaAssentos.length * preco).toFixed(2).toString().replace('.', ',')}`)
    }
    return (
        <button id={styles.botao_comprar} onClick={() => compraRealizada()}>
            <h1>Comprar</h1>
            <p>{`R$ ${(listaAssentos.length * preco).toFixed(2).toString().replace('.', ',')}`}</p>
        </button>
    );
}

export default BotaoComprar;
