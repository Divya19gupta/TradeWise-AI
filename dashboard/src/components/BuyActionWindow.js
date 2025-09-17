import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "../style/BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
const { closeBuyWindow } = useContext(GeneralContext);
const [stockQuant, setStockQuant] = useState(1);
const [stockPrice, setStockPrice] = useState(0.0);

const handleBuyClick = async () => {
    axios.post('http://localhost:3003/addOrder', {
    name: uid,
    qty: stockQuant,
    price: stockPrice,
    mode: 'BUY',
  });
  closeBuyWindow();
};


const handleCancelClick = () => {
closeBuyWindow();
};

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuant(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;