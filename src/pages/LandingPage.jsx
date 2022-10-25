import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";
import AnonymNavbar from "../components/AnonymNavbar";
import Carousel from "../components/Carousel"
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import {ProductCard} from "../components/Card"
import Footer from "..//components/Footer"
import Pagination from "../components/Pagination";



const LandingPage = () => {
  useTitle("Kelontongpedia");
  return (
    
      <Layout>
      <AnonymNavbar />
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal flex justify-end">
          <div className="relative flex flex-col justify-center">
            <LoginForm/>
          </div>
        </div>

        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal flex justify-end">
          <div className="relative flex flex-col justify-center">
            <RegisterForm/>
          </div>
        </div>
        
        <div className="w-full p-10 flex flex-col space-y-10">
          <Carousel/>
          <h1 className="font-semibold text-center text-2xl">All Products</h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-10 md:gap-5 px-5 lg:px-20 lg:gap-y-12">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <div className="w-full text-center">
            <Pagination/>
          </div>
        </div>
        <Footer/>
      </Layout>
      
  );
};

export default WithRouter(LandingPage);
