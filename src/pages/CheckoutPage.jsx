import React from "react";
import { WithRouter } from "../utils/Navigation";
import Layout from "../components/Layout";

const CheckoutPage = () => {
  useTitle("Checkout");
  return (
    <Layout>
      <div>CheckoutPage</div>
    </Layout>
  );
};

export default WithRouter(CheckoutPage);
