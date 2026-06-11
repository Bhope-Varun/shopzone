import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Success from "./pages/Success";

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/success"
             element={<Success />}
          />

          <Route path="/cart" element={<Cart />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}