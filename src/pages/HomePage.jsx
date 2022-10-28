import React, {useState, useEffect} from "react";
import { WithRouter } from "../utils/Navigation";
import { useTitle } from "../utils/hooks/useTitle";
import { useNavigate } from "react-router-dom";
import { setCarts } from "../utils/reducers/reducer";
import { useDispatch } from "react-redux";
import {apiRequest} from "../utils/apiRequest"

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import { ProductCard } from "../components/Card";
import Footer from "../components/Footer";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";


const HomePage = (props) => {
  useTitle("Kelontongpedia")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    apiRequest("products", "get", {})
    .then((res) => {
      const results = res.data
      setDatas(results)
    })
    .catch((err) => {
      const {data} = err.response
      alert(data.message)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  function handleCart() {
    apiRequest("carts", "post", {})
      .then((res) => {
        const { message } = res.data;
        alert(message);
      })
      .catch((err) => {
        const { message } = err.response.data;
        alert(message);
      })
      .finally(() => {
        setLoading(false);
      });
    }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <Navbar />
      <div className="w-full p-10 flex flex-col space-y-10">
        <Carousel />
        <h1 className="font-semibold text-center text-2xl">All Products</h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10 md:gap-5 px-5 lg:px-20 lg:gap-y-12">
          {datas.map((data)=> (
            <ProductCard 
            key={data.id}
            name={data.name}
            price={(data.price).toLocaleString("en-US", {currency:"USD"})}
            images={data.images}
            stock={data.stock}
            onNavigate={() => navigate(`/detail/${data.id}`)}
            onCart={() => handleCart(data)}
            />
          ))}
        </div>
        <div className="w-full text-center">
          <Pagination />
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default WithRouter(HomePage);
