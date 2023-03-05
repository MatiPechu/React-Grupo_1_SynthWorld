import '../index';
import React from 'react';
import Estructura from './Estructura'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Estructura/>
    </BrowserRouter>
  );
}

export default App;
