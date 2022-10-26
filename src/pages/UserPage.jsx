import React, { useState } from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";
import Navbar from "../components/Navbar";
import { FormAccount } from "../components/FormAccount";
import { ListSelling } from "../components/ListSelling";
import CardUser from "../components/CardUser";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import ModalSell from "../components/ModalSell";

const UserPage = () => {
  useTitle("Kelontongpedia");

  const [users, setUsers] = useState([
    {
      username: "Samleho",
      email: "samleho123@gmail.com",
      phone: "081234567890",
      name: "Samleho Wowo",
      address: "Jl. In Aja Lah Ya",
    },
  ])

  const [sells, setSells] = useState([
  {
    name: "Sepatu",
    price: "64.000",
    detail: "sepatu ini mahal",
  },

  {
    name: "Baju",
    price: "100.000",
    detail: "baju ini bagus",
  },
])

  return (
    <Layout>
      <Navbar />
      <Modal />
      <ModalSell/>
      <div className="grid grid-cols-3">
        <div className="w-full">
          <CardUser />
        </div>
        <div className="w-full">
          <FormAccount data={users} />
            <div>
              <label htmlFor="my-modal-2" className="w-32 ml-10 mt-10 justify-center px-4 py-2 font-bold bg-[#F41111] border-2 border-[#F41111] rounded-md text-white shadow-lg transform active:scale-75 transition-transform mx-5 flex hover:bg-white hover:text-primary">
                <span>Deactive</span>
              </label>
            </div>
        </div>
        <div className="w-full">
          <div className="ml-10 mt-6 w-80 h-96 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h5 className="text-xl font-bold text-primary dark:text-white">
                Selling Product
              </h5>
              <ListSelling data={sells}/>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default WithRouter(UserPage);
