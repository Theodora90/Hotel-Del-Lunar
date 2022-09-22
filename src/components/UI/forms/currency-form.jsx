import { map } from "lodash";
import React, { useState } from "react";
import "./currency-form.css";

const Currency = () => {
  const [symbols, setSymbol] = useState();

  const handleCurrencySymbols = () => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "CcqkvcIb1iisj0nIxTscjUrRHQ7lqkIK");

    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: myHeaders,
    };

    fetch("https://api.apilayer.com/exchangerates_data/symbols", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
  handleCurrencySymbols();

  return (
    <div className="form-container">
      <form>
        <div className="d-md-flex justify-content-between">
          <div class="mb-3">
            <label htmlFor="from" class="form-label">
              Current Currency
            </label>
            <input
              type="text"
              className="form-control"
              id="from"
              placeholder="Select Currency"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="to" class="form-label">
              Selected Currency
            </label>
            <input
              type="text"
              className="form-control"
              id="from"
              placeholder="Select Currency"
            />
            {/* {map.symbols((symbol) => (
              <select className="form-select" id="to">
                <option selected>Select Currency</option>
                <option>{symbol}</option>
              </select>
            ))} */}
          </div>
          <div className="text-center">
            <button type="submit">Change Currency</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Currency;
