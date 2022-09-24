import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListPage from './pages/product-list/product-list';
import CartPage from './pages/cart-page/cart-page';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<ProductListPage/>} />
          <Route path="/product-list-page" element={<ProductListPage/>} />
          <Route path="/cart-page" element={<CartPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
