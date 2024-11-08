async function TituloConteudo( {endpoint} ) {

    if(endpoint == "Titulo"){
        let requestTitulo = await fetch("http://localhost:3000/titulo");
        let requestHorario = await fetch("http://localhost:3000/horario");  
        if(requestTitulo.ok  && requestHorario.ok){

            var titulo = await requestTitulo.text();
            
            var conteudo = await requestHorario.text();
                        
        }

    }
    else if(endpoint == "Sinopse"){
        let requestSinopse = await fetch("http://localhost:3000/sinopse");
        if(requestSinopse.ok){

            var titulo = "Sinopse do filme"
            
            var conteudo = await requestSinopse.text();
                        
        }
    }
    else if(endpoint == "Data"){
        let requestData = await fetch("http://localhost:3000/dataLancamento");
        if(requestData.ok){

            var titulo = "Data de lançamento"
            
            var conteudo = await requestData.text();
                        
        }
    }

    else if(endpoint == "Direção"){
        let requestDirecao = await fetch("http://localhost:3000/direcao");
        if(requestDirecao.ok){

            var titulo = "Direção"
            
            var conteudo = await requestDirecao.text();
                        
        }
    }
    return (
        <div>
            <h1>{titulo}</h1>
            <p>{conteudo}</p>
        </div>
    );
}

export default TituloConteudo;
