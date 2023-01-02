import React, { useEffect, useState } from "react";
import Heart from "../../assets/icons/Heart";
import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const result = await axios.get("/products/getAllUnsoldProducts");
      setProducts(result.data.data);
    };
    getProducts();
  }, []);
  return (
    <div className="postParentDiv">
      {/* <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>Tue May 04 2021</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          {products &&
            products.map((product) => {
              return (
                <Link to={`/products/${product._id}`}>
                  <div className="card">
                    <div className="favorite">
                      <Heart></Heart>
                    </div>
                    <div className="image">
                      <img src={product.image_urls[0]} alt="" />
                    </div>
                    <div className="content">
                      <p className="rate">{product.price}</p>
                      <span className="kilometer">{product.name}</span>
                      <p className="name"> {product.description}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
