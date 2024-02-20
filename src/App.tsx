import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Trangchu from './pages/Trangchu';
import Gioithieu from './pages/GioiThieu';
import Lienhe from './pages/Lienhe';
import Nike from './pages/Nike';
import Adidas from './pages/Adidas';

import Index from './pages/index'; // Assuming the component is named "Index" and the file is "index.js"

function App() {
  return (
    <div className="App">
      <Index />
    </div>
  );
}

export default App;

