// src/App.jsx

// Importe TODOS os seus arquivos CSS globais aqui e na ORDEM correta:
import './css/reset.css';      // 1. Reset (Remove margens padrão)
import './css/fontes.css';     // 2. Fontes (Carrega a fonte "Yugioh")
import './css/estilos.css';    // 3. Estilos Principais (body, cartao, slider, etc.)
import './css/responsivo.css'; // 4. Responsivo (Media Queries)

import Header from './components/Header';
import Slider from './components/Slider';

function App() {
  return (
    // O retorno do componente (Seus elementos estruturais)
    <> 
      <Header />
      <Slider /> 
    </>
  )
}

export default App