import { createRoot } from 'react-dom/client';
import './index.css'
import Segundo from './components/basicos/Primeiro';
import React from 'react';


const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Olá React!</h1>
    <Segundo />
  </>
);
a = "q"