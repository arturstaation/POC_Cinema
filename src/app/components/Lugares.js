'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/Lugares.module.css';
import '../styles/global.css';

function Lugares({ onToggleAssento, listaAssentos = [] }) {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const fetchAssentos = async () => {
            const request = await fetch("http://localhost:3000/assentos");
            if (request.ok) {
                const data = await request.json();
                setResponse(data);
            }
        };
        fetchAssentos();
    }, []);

    return (
        <div id={styles.todosLugares}>
            {response.map((assento) => (
                <div
                    key={assento.id}
                    className={`${styles.assento} ${assento.disponivel ? 'disponivel' : 'ocupado'} ${listaAssentos.includes(assento.id) ? 'selecionado' : ''}`}
                    onClick={() => onToggleAssento(assento.disponivel, assento.id)}
                >
                </div>
            ))}
        </div>
    );
}

export default Lugares;
