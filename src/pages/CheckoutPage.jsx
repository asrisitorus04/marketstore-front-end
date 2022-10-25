import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Checkout } from "../components/buttons/ButtonAdd";
import BuyerNotes from "../components/BuyerNotes";

import { WithRouter } from "../utils/Navigation";

const CheckoutPage = () => {
  useTitle("Checkout");
  return (
    <Layout>
      <Navbar />
      <div className="w-full my-32 flex flex-col items-center justify-center gap-20">
        <h1 className="text-5xl font-extrabold">Payment Process</h1>
        <div className="w-2/4 flex flex-col p-10 justify-center gap-5 border-2 shadow-lg rounded-lg">
          <span className="w-full flex justify-between">
            <p className="w-1/2 font-extrabold text-lg">Buyer</p>
            <p className="w-1/2  text-lg">Handoko</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="w-1/2 font-extrabold text-lg">Address</p>
            <p className="w-1/2  text-lg">
              Jl. Handoko Gang 2 No. 46 Kota San Andreas
            </p>
          </span>
          <span className="w-full flex justify-between">
            <p className="w-1/2 font-extrabold text-lg">Total Item</p>
            <p className="w-1/2  text-lg">4</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="w-1/2 font-extrabold text-lg">Total Price</p>
            <p className="w-1/2  text-lg">Rp 209.596</p>
          </span>
          <span className="w-full flex justify-between">
            <p className="w-1/2 font-extrabold text-lg">Date</p>
            <p className="w-1/2  text-lg">22/10/2022</p>
          </span>
          <span className="w-full flex justify-center">
            <Checkout />
          </span>
        </div>
        <BuyerNotes />
      </div>
      <Footer />
    </Layout>
  );
};

export default WithRouter(CheckoutPage);
