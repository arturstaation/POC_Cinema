'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/TituloConteudo.module.css';

function TituloConteudo({ endpoint }) {
    const [titulo, setTitulo] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [error, setError] = useState(false); // Estado de erro

    const endpoints = {
        "Titulo": { url: "http://localhost:3000/titulo", titulo: "" },
        "Sinopse": { url: "http://localhost:3000/sinopse", titulo: "Sinopse do filme" },
        "Data": { url: "http://localhost:3000/dataLancamento", titulo: "Data de lançamento" },
        "Direção": { url: "http://localhost:3000/direcao", titulo: "Direção" }
    };

    useEffect(() => {
        const fetchData = async () => {
            setError(false);
            try {
                if (endpoints[endpoint]) {
                    const request = await fetch(endpoints[endpoint].url);
                    if (request.ok) {
                        const data = await request.text();
                        setTitulo(endpoints[endpoint].titulo || data);
                        setConteudo(data);

                        if (endpoint === "Titulo") {
                            const requestHorario = await fetch("http://localhost:3000/horario");
                            if (requestHorario.ok) {
                                const horarioData = await requestHorario.text();
                                setConteudo(horarioData);
                            }
                        }
                    } else {
                        throw new Error(`Erro na requisição para ${endpoints[endpoint].url}`);
                    }
                }
            } catch (error) {
                console.error(error);
                setError(true);
            }
        };

        fetchData();
    }, [endpoint]);

    return (
        !error && (
            <div id={`${endpoint === 'Titulo' ? styles.titulo_conteudo : ''}`} className={styles.conteudo_filme}>
                <h1><strong>{titulo}</strong></h1>
                <p>{conteudo}</p>
            </div>
        )
    );
}

export default TituloConteudo;
