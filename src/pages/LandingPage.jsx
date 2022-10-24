import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";
import AnonymNavbar from "../components/AnonymNavbar"

const LandingPage = () => {
  useTitle("Kelontongpedia");
  return (
    <Layout>
      <AnonymNavbar></AnonymNavbar>
      <div>LandingPage</div>
    </Layout>
  );
};

export default WithRouter(LandingPage);
