import "./Agenda.css"

function Agenda () {
    const whatsappNumber = "5561981353643"; // Substitua pelo número real
    const message = "Olá, gostaria de agendar uma consulta.";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    return(
        <main className="cards">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="card-link">
                <div className="card azul">
                    <h3>AGENDAR</h3>
                    <p>Serviços de consulta e outras categorias</p>
                </div>
            </a>
            <div className="card verde">
                <h3>MEUS AGENDAMENTOS</h3>
                <p>Consulte ou cancele seus agendamentos</p>
            </div>
        </main>
    )
}

export default Agenda;
