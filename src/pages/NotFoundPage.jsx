import React from "react";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";

const NotFoundPage = () => {
  useTitle("404 Not Found");
  return (
    <Layout>
      <div>NotFoundPage</div>
    </Layout>
  );
};

export default NotFoundPage;
