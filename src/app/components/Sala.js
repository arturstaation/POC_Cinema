import '../Sala.module.css'


async function Sala() {

    const request = await fetch("http://localhost:3000/assentos");
    let response = [];
    if (request.ok) {

        response = await request.json();
    }

    return (

        <div>
            {response.map((assento) => (
                <div
                    key={assento.id}
                >
                    {assento.numero}
                </div>
            ))}
        </div>
    );
}

export default Sala;