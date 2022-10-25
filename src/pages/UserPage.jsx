import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";
import Navbar from "../components/Navbar";
import { FormAccount } from "../components/FormAccount";
import { ListSelling } from "../components/ListSelling";
import CardUser from "../components/CardUser";
import Footer from "../components/Footer";

const UserPage = () => {
  useTitle("Kelontongpedia");

  return (
    <Layout>
      <Navbar />
      <div className="grid grid-cols-3">
        <div className="w-full">
          <CardUser />
        </div>
        <div className="w-full">
          <FormAccount />
        </div>
        <div className="w-full">
          <div className="ml-10 mt-6 w-60 h-96 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-6 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
              <h5 className ="text-xl font-bold text-primary dark:text-white">
                Selling Product
              </h5>
              <ListSelling />
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </Layout>
  );
};

export default WithRouter(UserPage);
