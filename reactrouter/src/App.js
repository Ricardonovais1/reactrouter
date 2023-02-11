import './App.css';

// 1- Configurando rotas
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Components 
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// Pages 
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';



function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
      {/* 2 - Links com react Router */}

        <Navbar />
        {/* 9 - Search Params */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* 4 - Rota dinâmica */}
          <Route path='/product/:id' element={<Product />} />
          {/* 9 - Search Params */}
          <Route path='/search' element={<Search />} />
          {/* 10 - Redirecionamento de URL */}
          <Route path='/company' element={<Navigate to='/about' />} />
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
