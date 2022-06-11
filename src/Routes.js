import React from "react";
import Home1 from "pages/Home1";
import Shop from "pages/Shop";
import ProductDetail from "pages/ProductDetail";
import Gallery from "pages/Gallery";
import Cart from "pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/productdetail" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
