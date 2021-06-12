import React, { useState, useEffect } from "react";
import "./ProductImages.css";
import { useHistory } from "react-router-dom";
import JsonImages from "./JsonImages.js";
import { useStateValue } from "./StateProvider";

function ProductImages() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const [mediaInfo, setMediaInfo] = useState([]);

  useEffect(() => {
    const getMediaData = async () => {
      fetch("https://shopster.ai/wizard-test/?output=json")
        .then((response) => response.json())
        .then((data) => {
          setMediaInfo(data.media);
        });
    };
    getMediaData();
  }, []);
  console.log(mediaInfo);

  return (
    <div className="productImages">
      <h1 className="step__name">Step 1/2 - Product Images</h1>

      {/* Header */}
      <div className="image__grid">
        {mediaInfo.map((eachMedia) => (
          <JsonImages
            id={eachMedia.id}
            media_type={eachMedia.media_type}
            media_url={eachMedia.media_url}
            timestamp={eachMedia.timestamp}
          />
        ))}
      </div>
      {/* Products */}
      <div className="button__container">
        <div>
          <p>{basket.length} images selected</p>
          <button
            className="button__primary"
            onClick={(e) => history.push("/productdetails")}
          >
            PROCEED
          </button>
        </div>
      </div>
      {/* Button and count of images */}
    </div>
  );
}

export default ProductImages;
