import './App.css';

// 1- Configurando rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components 
import Navbar from './components/Navbar';

// Pages 
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';



function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - Links com react Router */}

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path='/product/:id' element={<Product />} />
          {/* 6 - Nested routes */}
          <Route path='/product/:id/info' element={<Info />} />
          {/* 7 - No match route */}
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
