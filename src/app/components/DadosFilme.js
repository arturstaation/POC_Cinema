import TituloConteudo from './TituloConteudo';


function DadosFilme() {
    return (
        <div>
            <TituloConteudo endpoint="Sinopse" className='espacamento' />
            <TituloConteudo endpoint="Data" className='espacamento' />
            <TituloConteudo endpoint="Direção" className='espacamento' />
        </div>
    );
}

export default DadosFilme;