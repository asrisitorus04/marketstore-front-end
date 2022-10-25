import React from "react";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { Button } from "../components/buttons/ButtonAdd";
import Footer from "../components/Footer";

import { useTitle } from "../utils/hooks/useTitle";
import { WithRouter } from "../utils/navigation";

const ProductDetail = () => {
  useTitle("Product Detail");
  return (
    <Layout>
      <Navbar />
      <div className="w-full flex justify-center my-32">
        <div className="w-3/4 flex justify-center gap-12 items-start">
          <img
            src="https://placeimg.com/400/300/arch"
            alt="Product"
            className="object-containt w-80 h-80 rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">T-Shirt Supreme</h2>
            <h1 className="text-3xl font-extrabold text-primary">Rp 52.399</h1>
            <p>Stock: --</p>
            <p>
              <strong>Detail:</strong>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus maxime aliquam velit quos nostrum enim totam adipisci
              aliquid, nisi distinctio.
            </p>
            <div className="mt-12">
              <Button />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default WithRouter(ProductDetail);
