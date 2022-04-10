//Componentes
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Estilos
import './App.css';

//Pages
import NotFound from './pages/NotFound';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import DetailPage from './pages/DetailPage'
import CategoryPage from './pages/CategoryPage';

//context
import {CartProvider} from './context/CartContext';

function App() {


  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/carrito" element={<CartPage />} />
            <Route path="/productos/:id" element={<DetailPage />} />
            <Route path="/categorias/:category" element={<CategoryPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
