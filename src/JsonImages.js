import React, { useState } from "react";
import "./JsonImages.css";
import { useStateValue } from "./StateProvider";

function JsonImages({ id, media_type, media_url, timestamp }) {
  const [{ basket }, dispatch] = useStateValue();
  const [checkBoxTick, setCheckBoxTick] = useState(false);
  const addToBasket = () => {
    setCheckBoxTick(!checkBoxTick);
    if (checkBoxTick === false){
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          media_type: media_type,
          media_url: media_url,
          timestamp: timestamp,
        },
      });
    }else{
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id:id,
      });
    }
  };
  return (
    <div className="jsonImages">
      <div className={checkBoxTick ? "grid__itemAfter" : "grid__itemBefore"} onClick={addToBasket}>
        <input
          className="custom__checkbox"
          type="checkbox"
          checked={checkBoxTick}
        />

        <img className="image" src={media_url} alt="images" />
      </div>
    </div>
  );
}

export default JsonImages;
