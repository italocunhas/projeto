import { createRoot } from 'react-dom/client';
import './index.css'
import Primeiro from './components/basicos/Primeiro';
import React from 'react';
import ComParametro from './components/basicos/ComParametro';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
  <div id="app">
    <h1>Olá React!</h1>
    <Primeiro></Primeiro>
    <ComParametro 
      titulo=" Situação do aluno "
      aluno= "Pedro " nota = { 9.3 }/>
      <ComParametro 
      titulo=" Situação do aluno "
      aluno="Maria " nota = { 4.3 }/>
  </div>
  </>
);
