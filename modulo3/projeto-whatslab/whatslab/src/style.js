import styled from "styled-components";

export const Cabeçalho = styled.header`
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    align-items: center;
    justify-content: center;
    font-size: 70px;
    color: green;
    padding-bottom: 20px;
img {
    width: 80px;
    padding: 10px
  }
`;

export const Tela = styled.div`
    background-color: green;
    width: 20vw;
    display: flex;
    height: 100vh;
`;

export const FeedMensagem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    position:block;
    padding: 20px;
input,button,label{
    position: relative;
    margin: 0 10px;
  }
`;

export const Main = styled.main`
    display: flex;
    align-items: flex-end;
`;

export const NovasMensagens = styled.span`
display: flex;
margin-bottom: 30px;
//align-items: flex-end;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
border-style:solid;
border-width:1px;
border-color:red;
border-radius: 5px;
padding: 3px;
//align-items: center;
`;

export const Rodape = styled.footer`
    display: flex;
    background-color: grey;
    align-items: center;
    justify-content: center;
    padding: 20px;
    color: white;
`;



