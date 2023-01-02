import React, { useContext, useEffect } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import Firebase from "../../firebase";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    price: 0,
    uploadedImages: null,
    description: "",
    image_urls: null,
  });

  useEffect(() => {
    productData.uploadedImages && uploadFile(productData.uploadedImages[0]);
  }, [productData.uploadedImages]);
  const onChangeName = (event) => {
    setProductData({ ...productData, name: event.target.value });
  };

  const onChangePrice = (event) => {
    setProductData({ ...productData, price: parseInt(event.target.value) });
  };

  const onChangeDescription = (event) => {
    setProductData({ ...productData, description: event.target.value });
  };

  const onChangeImages = (event) => {
    console.log(event.target.files, URL.createObjectURL(event.target.files[0]));

    setProductData({ ...productData, uploadedImages: event.target.files });
  };

  const uploadFile = (file) => {
    const storage = getStorage(Firebase);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // const progress =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // urlType === "imgUrl"
        //   ? setImgPerc(Math.round(progress))
        //   : setVideoPerc(Math.round(progress));
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL, "fuckl");
          setProductData((prev) => {
            return { ...prev, image_urls: [downloadURL] };
          });
        });
      }
    );
  };

  const submitForm = async () => {
    try {
      const result = await axios.post("/products", productData, {
        headers: {
          authorization: `BearerToken ${localStorage.getItem("jwt_token")}`,
        },
      });
      alert("Product Added");
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            placeholder="Enter name here"
            onChange={onChangeName}
          />
          <br />
          <label htmlFor="fname">Description</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            placeholder="Enter description here"
            onChange={onChangeDescription}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            onChange={onChangePrice}
          />
          <br />

          <br />
          <img
            alt="Posts"
            width="200px"
            height="200px"
            src={
              productData.uploadedImages
                ? URL.createObjectURL(productData.uploadedImages[0])
                : ""
            }
          ></img>

          <br />
          <input type="file" onChange={onChangeImages} accept="image/*" />
          <br />
          <button onClick={submitForm} className="uploadBtn">
            upload and Submit
          </button>
        </div>
      </card>
    </>
  );
};

export default Create;
