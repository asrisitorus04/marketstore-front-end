import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";

const LandingPage = () => {
  useTitle("Kelontongpedia");
  return (
    <Layout>
      <div>LandingPage</div>
    </Layout>
  );
};

export default WithRouter(LandingPage);
