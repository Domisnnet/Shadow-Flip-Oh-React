// src/App.jsx
import './css/reset.css';    // Importe seu reset.css
import './css/estilos.css';  // Importe seu estilos.css
import Slider from './components/Slider';

function App() {
  return (
    // O body do seu HTML original (cabecalho e slider) vira o retorno do App
    <> 
      <header className="cabecalho">
        <h1 className="titulo">Yu-Gi-Oh!</h1>
      </header>
      
      {/* Aqui chamamos o Slider, que terá toda a interatividade */}
      <Slider /> 
    </>
  )
}

export default App