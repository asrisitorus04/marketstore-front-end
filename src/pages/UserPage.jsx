import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";

const UserPage = () => {
  useTitle("Kelontongpedia");

  return (
    <Layout>
      <div>UserPage</div>
    </Layout>
  );
};

export default WithRouter(UserPage);
