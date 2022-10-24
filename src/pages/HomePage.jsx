import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";

const HomePage = () => {
  useTitle("Kelontongpedia");
  return (
    <Layout>
      <div>HomePage</div>
    </Layout>
  );
};

export default WithRouter(HomePage);