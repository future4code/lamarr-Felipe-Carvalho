import React, {useState} from 'react';
import Post from './components/Post/Post';
import './style.css'
import styled from 'styled-components';

const Form = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding: 10px;
margin: 10px;
border-radius:20px;
background-color:green;

label{
  padding:10px;
  font-family: Arial, Helvetica, sans-serif;
  font-size:30px;
}

input{
  text-align: center;
  height:5vh;
  width:20vw;
  border-radius:20px;
  font-style:bold;
} 

button{
  font-weight:bold;
  font-size:large;
  margin-top:20px;
  width:15vw;
  height:7vh;
  border-radius:40px;
}

button:hover{
  cursor:pointer;
  background-color:lightcoral;
} 
`

function App() {
  //estados
  const [inputUsuario, setInputUsuario] = useState("")
  const [inputFotoUsuario, setInputFotoUsuario] = useState("")
  const [inputFotoPost, setInputFotoPost] = useState("")
  const [inputArrayPost, setArrayPost] = useState([
    {nomeUsuario:"Paulinha", fotodoUsuario:'https://picsum.photos/50/50', fotodoPost:"https://picsum.photos/200/149"},
    {nomeUsuario:`Jorge`, fotodoUsuario:"https://picsum.photos/50/50", fotodoPost:"https://picsum.photos/200/151"},
    {nomeUsuario:`Patrícia`, fotodoUsuario:"https://picsum.photos/50/13", fotodoPost:"https://picsum.photos/200/138"}
  ])  


  //eventos
  const handleInputUsuario = (e) => {
    setInputUsuario(e.target.value)
  }

  const handleInputFotoUsuario = (e) => {
    setInputFotoUsuario(e.target.value)
  }

  const handleInputFotoPost = (e) => {
    setInputFotoPost(e.target.value)
  }

//addpost
  const addPost = (e) => {
    e.preventDefault();
  const novoPost = {nomeUsuario: inputUsuario, fotodoUsuario: inputFotoUsuario, fotodoPost:inputFotoPost} 
  const novaListaPosts = [...inputArrayPost, novoPost]
  setArrayPost (novaListaPosts)
}

//array map
  const listaPost = inputArrayPost.map((elemento, index) => {
    return <Post
        nomeUsuario={elemento.nomeUsuario}
        fotodoUsuario={elemento.fotodoUsuario}
        fotodoPost={elemento.fotodoPost}
        key={index}
      />
    })
  
      
  //Return
  return(
    <div className="MainContainer">{listaPost}
      <Form>
        <label>Usuario: </label>
        <input 
          placeholder= "Nome de Usuário"
          value={inputUsuario}
          onChange={handleInputUsuario}
        />

        <label>FotoUsuario: </label>
        <input
          placeholder= "Foto do Usuário"
          value={inputFotoUsuario}
          onChange={handleInputFotoUsuario}
        />

        <label>FotoPost: </label>
        <input 
          placeholder= "Foto do Post"
          value={inputFotoPost}
          onChange={handleInputFotoPost}
        />
        <button onClick={addPost} > Enviar Postagem  </button>
      </Form>
      

      {console.log(inputArrayPost)}

    </div>
  )
}

export default App;
