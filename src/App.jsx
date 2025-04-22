import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Importação das páginas
import Inicio from "./Pages/Inicio";
import Sobre from "./Pages/Sobre";
import Consulta from "./Pages/Consulta";
import Contatos from "./Pages/Contatos";

// Componentes
import Header from './Componets/Header/Header';



function App() {
  return (
    <Router>
      <Header />

      <div className="main-content">
        <Routes>       
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/contatos" element={<Contatos />} />
        </Routes>
      </div>
    
    

    </Router>
  );
}

export default App;
