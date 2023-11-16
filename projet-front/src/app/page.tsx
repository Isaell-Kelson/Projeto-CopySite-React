'use client'
import { Vagas } from "./components/vagas/vagas";
import './globals.css'
import './components/vagas/vagas.css'
import { Section1 } from "./components/section1/Section1";
import { ColaboradoresAvaliacao } from "./components/colaboradores/colaboradores";
import { Cabecalho } from "./components/header/header";
import Cadastro from "./components/cadastro/cadastro";


export default function Home() {
  return (
    <main>
      <Cabecalho />
      <Section1 />
      <Vagas />  
      <ColaboradoresAvaliacao /> 
      <Cadastro />   
    </main>
  )
}
