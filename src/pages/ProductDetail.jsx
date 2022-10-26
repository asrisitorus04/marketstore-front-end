import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { Button } from "../components/buttons/ButtonAdd";
import Footer from "../components/Footer";

import { useTitle } from "../utils/hooks/useTitle";
import { useFetchGet } from "../utils/hooks/useFetchGet";
import { WithRouter } from "../utils/navigation";

import { data } from "autoprefixer";

const ProductDetail = (props) => {
  useTitle("Product Detail");

  const { id } = props.params;
  const [data, setData] = useState([]);
  const dispatch = useDispatch([]);
  // const [data] = useFetchGet(
  //   `https://app.swaggerhub.com/9tw/ALTA-commerce/1.0.0/products/${id}`
  // );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { id } = props.params;
    apiRequest(`products/${id}`, "get", {})
      .then((res) => {
        const results = res.data;
        setData(results);
        console.log(results);
      })
      .catch((err) => {
        alert(err.toString());
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // if (loading) {
  //   return <h2 className="text-secondary p-4">Loading...</h2>;
  // }

  function handleCart(product) {
    const getProducts = localStorage.getItem("myCart");
    if (getProducts) {
      const parsedProducts = JSON.parse(getProducts);
      parsedProducts.push(product);
      const temp = JSON.stringify(parsedProducts);
      dispatch(setCart(parsedProducts));
      localStorage.setItem("myCart", temp);
    } else {
      const temp = JSON.stringify([product]);
      dispatch(setCart([product]));
      localStorage.setItem("myCart", temp);
    }
  }

  return (
    <Layout key={data.id}>
      <Navbar />
      <div className="w-full flex justify-center my-32">
        <div className="w-3/4 flex justify-center gap-12 items-start">
          <img
            src="https://placeimg.com/400/300/arch"
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
            <div className="mt-12">
              <Button addToCart={() => handleCart} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default WithRouter(ProductDetail);
