import React from "react";
import { useState, useEffect } from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { ItemCart } from "../components/Card";
import { Checkout } from "../components/buttons/ButtonAdd";
import Footer from "../components/Footer";

import { useTitle } from "../utils/hooks/useTitle";
import { WithRouter } from "../utils/Navigation";
import { apiRequest } from "../utils/apiRequest";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  useTitle("My Cart");

  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    apiRequest("carts", "get", {})
      .then((res) => {
        const results = res.data;
        setDatas(results);
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Layout>
      <Navbar />
      <div className="w-full my-32 flex flex-col items-center justify-center gap-20">
        <h1 className="text-5xl font-extrabold">Cart</h1>
        <div className="w-3/4 flex justify-center gap-20">
          <div className="flex flex-col gap-2">
            <p className="text-2xl font-extrabold">Product</p>
            {datas?.map((data) => (
              <ItemCart key={data.id_cart} item={data.item} />
            ))}
          </div>
          <div className="w-1/3 max-h-64 flex flex-col gap-8 pb-6 pl-6 pr-6 rounded-lg shadow-xl">
            <h3 className="text-2xl font-extrabold">Shopping Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <p className="text-xl font-semibold">Total Items:</p>
                <p className="text-xl font-extrabold text-primary">4</p>
              </div>
              <div className="flex justify-between">
                <p className="text-xl font-semibold">Total Price:</p>
                <p className="text-xl font-extrabold text-primary">
                  Rp 209.596
                </p>
              </div>
              <hr className="border border-secondary" />
            </div>
            <Link to="/mycheckout" className="text-center">
              <Checkout />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default WithRouter(CartPage);
