import './App.css';
import AboutPage from './pages/about-page';
import Admin from './pages/admin'
import MainPage from './pages/main-page';
import { Routes, Route } from "react-router-dom";
import ProductsPage from './pages/products-page';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="admin" element={<Admin />} />
        </Routes>
    </div>
  );
}

export default App;
