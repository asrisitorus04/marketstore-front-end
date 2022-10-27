import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import { TokenContext } from "../utils/context";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { handleAuth, setCarts } from "../utils/reducers/reducer";
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

axios.defaults.baseURL = "http://54.255.204.195:8000";

const index = () => {
  const isLoggedIn = useSelector((state) => state.data.isLoggedIn);
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const jwtToken = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(handleAuth(true));
    } else {
      dispatch(handleAuth(false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedIn]);

  return (
    <TokenContext.Provider value={jwtToken}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <LandingPage />}
          />
          <Route path="/home" element={<HomePage />} />
          <Route path="/detail/:id_product" element={<ProductDetail />} />
          <Route path="/users" element={<UserPage />} />
          <Route path="/mycart" element={<CartPage />} />
          <Route path="/mycheckout" element={<CheckoutPage />} />
          <Route path="/purchase" element={<PurchasePage />} />
          <Route path="/confirmpurchase" element={<ConfirmPurchase />} />
          <Route path="/sellhistory" element={<SellHistory />} />
          <Route path="/confirmsell" element={<ConfirmSell />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TokenContext.Provider>
  );
};

export default index;
