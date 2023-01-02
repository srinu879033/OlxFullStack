import React from "react";
import "./Banner.css";
import Arrow from "../../assets/icons/Arrow";

const Banner = () => {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow>
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycles...</span>
            <span>Mobile Phones...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scooters...</span>
            <span>Commercial & Others...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        {/* <div className="banner">
          <img src="../../../Images/banner copy.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
