import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";
import Navbar from "../components/Navbar";
import { FormAccount } from "../components/FormAccount";
import { ListSelling } from "../components/ListSelling";
import CardUser from "../components/CardUser";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ModalSell from "../components/ModalSell";
import { apiRequest } from "../utils/apiRequest";
import { useDispatch } from "react-redux";
import { handleAuth } from "../utils/reducers/reducer";

const UserPage = () => {
  useTitle("Kelontongpedia");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [image, setImage] = useState("");
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchDataProduct();
  }, []);

  const fetchDataProduct = async () => {
    apiRequest("products", "get", {})
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

  const createProduct = async (e) => {
    const body = {
      name,
      stock,
      price,
      description,
      images,
    };
    apiRequest("products", "post", body)
      .then((res) => {
        const results = res.data;
        alert(res.message);
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => {
        fetchDataProduct();
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    apiRequest("users", "get", {})
      .then((res) => {
        const results = res.data;
        setUsers(results);
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = async () => {
    localStorage.removeItem("token");
    dispatch(handleAuth(true));
    navigate("/");
    alert("Are you sure you want to delete the account? ");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Navbar />
      <Modal />
      <ModalSell
        onClick={() => createProduct()}
        onSubmit={() => createProduct()}
        name={(e) => setName(e.target.value)}
        stock={(e) => setStock(e.target.value)}
        price={(e) => setPrice(e.target.value)}
        description={(e) => setDescription(e.target.value)}
      />
      <div className="grid grid-cols-3">
        <div className="w-full">
          <CardUser data={users} />
        </div>
        <div className="w-full">
          <FormAccount data={users} />
          <div>
            <label
              onClick={() => handleDelete()}
              className="w-32 ml-10 mt-10 justify-center px-4 py-2 font-bold bg-[#F41111] border-2 border-[#F41111] rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary"
            >
              <span>Deactive</span>
            </label>
          </div>
        </div>
        <div className="w-full">
          <div className="ml-10 mt-6 w-80 h-96 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-6   overflow-auto">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-bold text-primary ">
                Selling Product
              </h5>
              {datas.map((data) => (
                <ListSelling
                  key={data.id}
                  name={data.name}
                  price={data.price.toLocaleString("en-US", {
                    currency: "USD",
                  })}
                  images={data.images}
                  description={data.description}
                  onNavigate={() => navigate(`/detail/${data.id}`)}
                />
              ))}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default WithRouter(UserPage);
