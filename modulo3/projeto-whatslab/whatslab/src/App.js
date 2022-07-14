import React, { useState } from "react";
import {Tela, FeedMensagem, Main, Cabeçalho, Rodape, NovasMensagens } from "./style"


function App() {

  //estados
  const [inputNomeUsuario, setInputNomeUsuario] = useState("")
  const [inputTexto, setInputTexto] = useState("")
  // appMsg por historicoMensagens
  const [historicoMensagens,setHistoricoMensagens] = useState([
    {}
  ])

//eventos
const handleInputNomeUsuario = (event) => {
  setInputNomeUsuario(event.target.value)
}
const handleInputTexto = (event) => {
  setInputTexto(event.target.value)
}

const novaMensagem =() => {
  const novaMensagem = {usuario:inputNomeUsuario,mensagem:inputTexto}
  const feedMensagem = [...historicoMensagens, novaMensagem]
  setHistoricoMensagens(feedMensagem)
}

const arrayHistoricoMensagens = historicoMensagens.map((elemento) => {
  return (
    <div>
    {elemento.usuario}
    {elemento.mensagem}
    </div>
  );
});

  return (
      <div>
        <Cabeçalho>
          <img alt=""src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536445.png?token=exp=1657509106~hmac=a0dea965326304805a90dec4d14fe476"></img>
          <h4>WhatsLab</h4>
        </Cabeçalho>
        <Main>
          <Tela/>
          <FeedMensagem>
            <NovasMensagens>{arrayHistoricoMensagens}</NovasMensagens>
            <div>
                <label>Usuário:</label>
                <input type="text"
                    id="usuario"
                    value={inputNomeUsuario}
                    onChange={handleInputNomeUsuario}
                />

               <label>Mensagem:</label>
                <input
                    type="text"
                    id="mensagem"
                    value={inputTexto}
                    onChange={handleInputTexto}
                />

              <button onClick={novaMensagem}>Enviar Mensagem</button>

            </div>
          </FeedMensagem>
          <Tela/>
        </Main>
        <Rodape>Desenvolvido por Felipe o Mergulhador</Rodape>
      </div>
  );
}

export default App;


