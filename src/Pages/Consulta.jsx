import '../App.css'

function Consulta() {
  const especialidades = [
    "Clínico Geral",
    
  ];

  return (
    <div className="consulta-container">
      <header className="consulta-header">
        <h1>🩺 Agendamento de Consulta</h1>
        <p>Escolha a especialidade médica para iniciar o agendamento.</p>
      </header>

      <div className="consulta-grid">
        {especialidades.map((esp, index) => (
          <div key={index} className="consulta-card">
            <span className="consulta-icon">🏥</span>
            <h3>{esp}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Consulta;
