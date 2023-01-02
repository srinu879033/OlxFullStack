import React from "react";
import "./Header.css";
import OlxLogo from "../../assets/icons/OlxLogo";
import Search from "../../assets/icons/Search";
import Arrow from "../../assets/icons/Arrow";
import SellButton from "../../assets/icons/SellButton";
import SellButtonPlus from "../../assets/icons/SellButtonPlus";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <Link to="/">
            <OlxLogo></OlxLogo>
          </Link>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        {!localStorage.getItem("jwt_token") && (
          <Link to="/login">
            <div className="loginPage">
              <span style={{ cursor: "pointer" }}>Login</span>
              <hr />
            </div>
          </Link>
        )}
        {localStorage.getItem("jwt_token") && (
          <div
            className="loginPage"
            onClick={() => {
              localStorage.removeItem("jwt_token");
              navigate("/login");
            }}
          >
            <span style={{ cursor: "pointer" }}>Logout</span>
            <hr />
          </div>
        )}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <Link to="/sellProduct">
              <span style={{ cursor: "pointer" }}>SELL</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
