import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/HomePage';
import Cart from './pages/CartPage';
import Footer from './components/Footer';
import MobilePage from './pages/MobilePage';
import ComputingPage from './pages/ComputingPage';
import AppliancePage from './pages/AppliancePage';
import VideogamesPage from './pages/VideogamesPage';
import AccessoriesPage from './pages/AccesoriesPage';

function App() {
  return (
    
      <BrowserRouter>
        <Header />
        <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/mobile' element={<MobilePage />} />
          <Route path='/computing' element={<ComputingPage />} />
          <Route path='/appliances' element={<AppliancePage />} />
          <Route path='/videogames' element={<VideogamesPage />} />
          <Route path='/accesories' element={<AccessoriesPage />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>

  );
}

export default App;
