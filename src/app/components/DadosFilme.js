
import TituloConteudo from './TituloConteudo';
function DadosFilme() {
return (
    <div>
<TituloConteudo endpoint={"Titulo"} />
<TituloConteudo endpoint={"Sinopse"} />
<TituloConteudo endpoint={"Data"} />
<TituloConteudo endpoint={"Direção"} />
</div>
);
}

export default DadosFilme;