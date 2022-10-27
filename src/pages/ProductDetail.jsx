import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { Button } from "../components/buttons/ButtonAdd";
import Footer from "../components/Footer";

import { useTitle } from "../utils/hooks/useTitle";
import { WithRouter } from "../utils/Navigation";
import { apiRequest } from "../utils/apiRequest";
import { handleAuth, setCarts } from "../utils/reducers/reducer";

const ProductDetail = (props) => {
  useTitle("Product Detail");

  const [data, setData] = useState([]);
  const dispatch = useDispatch([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { id_product } = props.params;
    apiRequest(`products/${id_product}`, "get", {})
      .then((res) => {
        const results = res.data;
        setData(results);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return <h2 className="text-secondary p-4">Loading...</h2>;
  }

  function handleCart(product) {
    const getProducts = localStorage.getItem("myCarts");
    if (getProducts) {
      const parsedProducts = JSON.parse(getProducts);
      parsedProducts.push(product);
      const temp = JSON.stringify(parsedProducts);
      dispatch(setCarts(parsedProducts));
      localStorage.setItem("myCarts", temp);
    } else {
      const temp = JSON.stringify([product]);
      dispatch(setCarts([product]));
      localStorage.setItem("myCarts", temp);
    }
  }

  return (
    <Layout key={data.id}>
      <Navbar />
      <div className="w-full flex justify-center my-32">
        <div className="w-3/4 flex justify-center gap-12 items-start">
          <img
            src={data.images}
            alt="Product"
            className="object-containt w-80 h-80 rounded-lg shadow-lg"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{data.name}</h2>
            <h1 className="text-3xl font-extrabold text-primary">
              {data.price}
            </h1>
            <p>Stock:{data.stock}</p>
            <p>
              <strong>Detail:</strong>
              <br />
              {data.description}
            </p>
            <div className="flex items-baseline gap-2 my-5">
              <p>Seller:</p>
              <p className="text-xl font-bold">{data.seller}</p>
            </div>
            <div>
              <Button addToCart={() => handleCart(data)} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default WithRouter(ProductDetail);
