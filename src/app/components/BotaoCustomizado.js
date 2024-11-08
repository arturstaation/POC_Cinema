"use client"
function BotaoCustomizado({ texto, aoClicar }) {
    return (
        <button
            onClick={aoClicar}
        >
            {texto}
        </button>
    );
}




export default BotaoCustomizado;