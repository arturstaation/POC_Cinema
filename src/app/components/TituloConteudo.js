import styles from '../styles/TituloConteudo.module.css'


async function TituloConteudo({ endpoint }) {

    var titulo = '';
    var conteudo = '';
    const endpoints = {
        "Titulo": { url: "http://localhost:3000/titulo", titulo: "" },
        "Sinopse": { url: "http://localhost:3000/sinopse", titulo: "Sinopse do filme" },
        "Data": { url: "http://localhost:3000/dataLancamento", titulo: "Data de lançamento" },
        "Direção": { url: "http://localhost:3000/direcao", titulo: "Direção" }
    };


    if (endpoints[endpoint]) {
        let request = await fetch(endpoints[endpoint].url);
        if (request.ok) {

            conteudo = await request.text();
            titulo = endpoints[endpoint].titulo || conteudo;

            if (endpoint == "Titulo") {
                let requestHorario = await fetch("http://localhost:3000/horario");
                if (requestHorario.ok) {

                    conteudo = await requestHorario.text();
                }
            }
        }
    }

    return (
        <div id="titulo_conteudo">
            <h1 id="titulo">{titulo}</h1>
            <p id="conteudo">{conteudo}</p>
        </div>
    );



}


export default TituloConteudo;
