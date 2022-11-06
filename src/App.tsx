import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import CriarPessoa from "./CriarPessoa";
import EditarPessoa from "./EditarPessoa";
import ExcluirPessoa from "./ExcluirPessoa";
import ExibirPessoa from "./ExibirPessoa";
import ExibirPessoaSelecionada from './ExibirPessoaSelecionada';

function App() {
  return (
    <div className="App"> 
        <BrowserRouter> 
          <Routes>  
            <Route path="/" element={<Home/>}/>
            <Route path="/CriarPessoa" element={<CriarPessoa/>}/>
            <Route path="/EditarPessoa" element={<EditarPessoa/>}/>
            <Route path="/ExcluirPessoa" element={<ExcluirPessoa/>}/>
            <Route path="/ExibirPessoa" element={<ExibirPessoa/>}/>
            <Route path="/ExibirPessoa/:id" element={<ExibirPessoaSelecionada/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
