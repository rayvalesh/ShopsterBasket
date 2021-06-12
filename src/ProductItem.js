import React, { useState, useEffect } from "react";
import "./ProductItem.css";
import { useStateValue } from "./StateProvider";
import AddCircleIcon from "@material-ui/icons/AddCircle";

function ProductItem({ id, media_type, media_url, timestamp }) {
  const [{ basket, products }, dispatch] = useStateValue();
  const [productNameInput, setProductNameInput] = useState("");
  const [productPriceInput, setProductPriceInput] = useState("");
  const [productDescriptionInput, setProductDescriptionInput] = useState("");
  const [createNew,setCreateNew] = useState(false)

  const createNewProduct = () => {
    setCreateNew(true)
  }

  const productName = (event) => {
    setProductNameInput(event.target.value);
  };
  const productPrice = (event) => {
    setProductPriceInput(event.target.value);
  };
  const productDescription = (event) => {
    setProductDescriptionInput(event.target.value);
  };
  useEffect(() => {
    if ((productNameInput.length !== 0) & (productPriceInput.length !== 0)) {
      dispatch({
        type: "ADD_TO_PRODUCTS",
        item: {
          id: id,
          media_url: media_url,
          product_name: productNameInput,
          product_price: productPriceInput,
          product_description: productDescriptionInput,
        },
      });

    }
  }, []);

  console.log(products);

  return (
    <div className="add-product-list">
      <div className="add-product-item">
        <div className="add-product-image">
          <img src={media_url} alt="" />
          <div className="product-count">+0</div>
        </div>
        {(basket[0].id === id | createNew) ? (
          <div className="add-product-details-section">
            <input
              className="uk-input"
              type="text"
              placeholder="Product name"
              maxlength="100"
              onBlur={productName}
            />
            <input
              className="uk-input"
              type="number"
              min="0"
              max="99999999"
              maxLength="10"
              placeholder="Product Price (฿)"
              onBlur={productPrice}
            />
            <textarea
              className="uk-textarea"
              rows="5"
              placeholder="Product Description"
              spellCheck="false"
              onBlur={productDescription}
            ></textarea>
          </div>
        ) : (
          <div className="add-product-details-section-2">
            <select className="uk-select">
              <option value="">Add to an existing product</option>
              <option value="0">cake</option>
            </select>
            <div className="create-new-product-button" onClick={createNewProduct}>
              <AddCircleIcon />
              <span>or tap to create a new one</span>
            </div>
            {/* <div className="save-product-button">
              <span className="mdi mdi-20px mdi-content-save"></span>
              <span>Save to product</span>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
