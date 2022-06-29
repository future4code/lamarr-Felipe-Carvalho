import imagemLogo from './imagens/imagem-felipe.JPG';
import './App.css';

function App() {
  function aviso (){
    alert("Mergulhar é uma experiência fantástica e faz bem à saúde")
  }
  return (
    <div className="App">
      <h2>Olá!!!! Eu me chamo Felipe. É um prazer te ter por aqui!</h2>
      <img className="imagem-felipe" src={imagemLogo} alt="logo inspiron"/>
      <p>Esta é minha imagem predileta. Nela eu estou mergulhando. Eu adoro mergulhar</p>
      <button className="style-button"  onClick={aviso}>Clique aqui para se inspirar!</button>
    </div>
);
}

export default App;

