import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";
import AnonymNavbar from "../components/AnonymNavbar";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  useTitle("Kelontongpedia");
  return (
    <>
      <Layout>
        <div>Landing Page</div>
      </Layout>
    </>
  );
};

export default WithRouter(LandingPage);
