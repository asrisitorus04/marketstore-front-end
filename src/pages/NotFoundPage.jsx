import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import { useTitle } from "../utils/hooks/useTitle";

const NotFoundPage = () => {
  useTitle("404 Not Found");
  return (
    <Layout>
      <Navbar></Navbar>
      <div className="text-center">
          <h2 className="text-black font-bold text-6xl mt-40">
            404 - Sorry, Page Not Found
          </h2>
          <Link to={"/home"}>
            <button className="mt-11 text-xs px-14 py-3 rounded-2xl text-white font-semibold bg-primary">
              RETURN TO HOME
            </button>
          </Link>
        </div>
    </Layout>
  );
};

export default NotFoundPage;
