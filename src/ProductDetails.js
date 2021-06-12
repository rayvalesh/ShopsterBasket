import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { useStateValue } from "./StateProvider";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { useHistory } from "react-router-dom";
import ProductItem from "./ProductItem.js";

function ProductDetails() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const [uploadImage, setUploadImage] = useState(null);
  const handleUpload = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      console.log(window.URL.createObjectURL(e.target.files[0]));
    }

  };

  // useEffect(() => {
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: "123456",
  //       media_type: "IMAGE",
  //       media_url: { uploadImage },
  //       timestamp: "01:00PM 21/06/2021",
  //     },
  //   });
  // }, []);
  return (
    <div className="productDetails">
      <div className="step2__name" onClick={(e) => history.push("/")}>
        <div>
          <NavigateBeforeIcon />
          <p>Back</p>
        </div>
        <p>Step 2/2 - Product Details</p>
      </div>
      <div className="image__detailsGrid">
        <p>Enter at least 1 product</p>
        {basket.map((item) => (
          <ProductItem
            id={item.id}
            media_type={item.media_type}
            media_url={item.media_url}
            timestamp={item.timestamp}
          />
        ))}
      </div>
      <div className="button__container">
        <div>
          <input type="file" id ="fileupload" onClick={handleUpload}/>
          <label htmlFor="fileupload" className="button__upload">UPLOAD FROM DEVICE</label>
          {/* <button className="button__upload" onClick={handleClick}>
            UPLOAD FROM DEVICE
          </button> */}
          <button
            className="button__primary"
            onClick={(e) => history.push("/productdetails")}
          >
            PROCEED
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
