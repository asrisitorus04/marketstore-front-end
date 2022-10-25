import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";
import AnonymNavbar from "../components/AnonymNavbar";
import Carousel from "../components/Carousel"
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";


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
        <Carousel/>
      </Layout>
  );
};

export default WithRouter(LandingPage);
