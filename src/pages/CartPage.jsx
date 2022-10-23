import React from "react";
import { WithRouter } from "../utils/navigation";
import Layout from "../components/Layout";

const CartPage = () => {
  useTitle("My Cart");
  return (
    <Layout>
      <div>CartPage</div>
    </Layout>
  );
};

export default WithRouter(CartPage);
