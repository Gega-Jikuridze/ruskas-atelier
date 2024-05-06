import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import MainPage from "../pages/main-page";
import ProductsPage from "../pages/products-page";
import AboutPage from "../pages/about-page";
import "../App.css";
import DetailedProduct from "../pages/DetailedProduct";

const userRoutes = [
  {
    element: (
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    path: "/",
    children: [
      {
        element: <MainPage />,
        index: true,
      },
      {
        element: <ProductsPage />,
        path: "products",
      },
      {
        element: <DetailedProduct />,
        path: "products/:id",
      },
      {
        element: <AboutPage />,
        path: "about",
      },
    ],
  },
];

export default userRoutes;
