import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import axios from "../../axios";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;

  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const getProductDetails = async () => {
      const result = await axios.get(`/products/details/${id}`, {
        headers: {
          authorization: `BearerToken ${localStorage.getItem("jwt_token")}`,
        },
      });
      console.log(result, "sexy");
      setProductDetails({
        ...result.data.productData,
        uploaderName: result.data.sellerData.name,
      });
    };
    getProductDetails();
  }, [id]);
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={
            productDetails &&
            productDetails.image_urls &&
            productDetails.image_urls[0]
          }
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9;{productDetails.price}</p>
          <span>{productDetails.name}</span>
          <p>{productDetails.description}</p>
          {/* <span>Tue May 04 2021</span> */}
        </div>
        <div className="contactDetails">
          <p>{productDetails.uploaderName}</p>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
