import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <div className="homeParentDiv">
      <Header />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
};

export default HomePage;
