import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";
import { useTitle } from "../utils/hooks/useTitle";

const ProductDetail = () => {
  useTitle("Product Detail");
  return (
    <Layout>
      <div>ProductDetail</div>
    </Layout>
  );
};

export default WithRouter(ProductDetail);
