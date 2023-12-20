import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled, { createGlobalStyle } from 'styled-components'
import Logo from './assets/Designer.jpeg'
import './App.css'

const EstiloGlobal = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`
const HeaderStyled = styled.header`
  width:100%;
  height:100vh;
  display: flex;
  flex-direction:column;
  align-items:center;
  background: rgb(21,112,11);
background: linear-gradient(0deg, rgba(21,112,11,1) 0%, rgba(8,50,5,1) 10%, rgba(0,0,0,1) 39%);

  
`
// cabeça
const Header = styled.section`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:50vh;
`
const Img = styled.img`
  width:100px;
  height:100px;
  border-radius:50%;
  border:solid green;
  margin:5px;
@media screen and (max-width: 385px) {
  width:88px;
  height:88px;
}
`
const Texto1 = styled.h2`
  color:wheat;
  font-size: 34px;
  margin:5px;
@media screen and (max-width: 385px) {
  font-size:26px;
}
`
const Texto2 = styled.h3`
  color:wheat;
  font-size: 25px;
  margin:5px;
@media screen and (max-width: 385px) {
  font-size:21px;
}

`
const Texto3 = styled.p`
  color:wheat;
  font-size: 20px;
  margin:5px;
@media screen and (max-width: 415px) {
  font-size:16px;
}
@media screen and (max-width: 385px) {
  font-size:14px;
}
`


// Corpo
const Main = styled.section`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:50%;
  height:35vh;
@media screen and (max-width:415px) {
  width:90%;}
@media screen and (max-width:385px) {
  width:85%;
}
  
`
const Link = styled.a`
  width:100%;
  display: flex;
  justify-content:center;
  text-decoration:none;
  

`

const Botao = styled.button`
  width:50%;
  height:8vh;
  background-color:green;
  color:white;
  font-size:20px;
  margin:10px;
  box-shadow:5px 5px 5px #0E3D59;
  border-radius: 15px;
  cursor: pointer;
    &:hover{
      background-color:#13ba0a;
      transform: scale(1.07)}
@media screen and (max-width:415px) {
  width:100%;}
@media screen and (max-width:385px) {
  width:100%;
  font-size:18px;
  font-family:monospace;
  
}
`
// Final
const Footer = styled.section`
display:flex;
align-items:center;
text-align:center;
justify-content:center;
flex-direction:column;
height:15vh;
`
const Texto4 = styled.p`
  color:wheat;
@media screen and (max-width:385px) {
  font-size:10px;
  
}
`


function App() {
  const [count, setCount] = useState(0)

  return (
    <HeaderStyled>
      <EstiloGlobal />
      
      <Header>
        <Img src={Logo} alt="logo" />
        <Texto1>Rodrigo sousa</Texto1>
        <Texto2>Desenvolvedor Front-End</Texto2>
        <Texto3>React.js / javaScript / Html / Css / Sass / Next.js / RestApi</Texto3>
      </Header>

      <Main>
        <Link href="https://www.linkedin.com/in/rodrigo-sousa-b531191bb/" target='_blank'>
          <Botao>Linkedin</Botao>
        </Link>
        <Link href="https://github.com/Rodrigo-Sousa1" target='_blank'>
          <Botao>Github</Botao>
        </Link>
        <Link href="https://rodrigo-sousa-portfolio.netlify.app/" target='_blank'>
          <Botao>Portfólio</Botao>
        </Link>
      </Main>

      <Footer>
        <Texto4>Criado por</Texto4>
        <Texto4>Rodrigo Sousa</Texto4>
      </Footer>
    </HeaderStyled>
  )
}

export default App
