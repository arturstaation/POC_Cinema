'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/BotaoComprar.module.css';

function BotaoComprar({ listaAssentos }) {
    const [preco, setPreco] = useState(0);
    const [error, setError] = useState(false);
    useEffect(() => {
        const fetchPreco = async () => {
            setError(false);
            try {
                const request = await fetch("http://localhost:3000/preco");
                if (request.ok) {
                    const precoData = await request.text();
                    setPreco(parseFloat(precoData));
                } else {
                    throw new Error("Erro na requisição do preço");
                }
            } catch (error) {
                console.error(error);
                setError(true);
            }
        };

        fetchPreco();
    }, []);

    const compraRealizada = () => {
        alert('Compra realizada com sucesso');
    };

    return (
        !error && (
            <button id={styles.botao_comprar} onClick={compraRealizada}>
                <h1>Comprar</h1>
                <p>{`R$ ${(listaAssentos.length * preco).toFixed(2).toString().replace('.', ',')}`}</p>
            </button>
        )
    );
}

export default BotaoComprar;
