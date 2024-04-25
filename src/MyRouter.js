import AboutPage from "./pages/about-page";
import Admin from "./pages/admin";
import MainPage from "./pages/main-page";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/products-page";
import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";

const UseRouter = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default UseRouter;
