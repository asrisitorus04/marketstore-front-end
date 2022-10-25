import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import ProductDetail from "../pages/ProductDetail";
import CartPage from "../pages/CartPage";
import UserPage from "../pages/UserPage";
import CheckoutPage from "../pages/CheckoutPage";
import NotFoundPage from "../pages/NotFoundPage";
import PurchasePage from "../pages/PurchasePage";
import { ConfirmPurchase } from "../pages/ConfirmPurchase";
import { SellHistory } from "../pages/SellHistory";
import { ConfirmSell } from "../pages/ConfirmSell";

axios.defaults.baseURL = "Link Basenya API";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail" element={<ProductDetail />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/mycart" element={<CartPage />} />
        <Route path="/mycheckout" element={<CheckoutPage />} />
        <Route path="/purchase" element={<PurchasePage/>}/>
        <Route path="/Confirmpurchase" element={<ConfirmPurchase/>} />
        <Route path="/sellhistory" element={<SellHistory/>} />
        <Route path="/confirmsell" element={<ConfirmSell/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
