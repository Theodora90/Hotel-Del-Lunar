import { forEach } from "lodash";
import React, { useState } from "react";
import DataContext from "../../../context/DataContext";
import "./currency-form.css";

const Currency = (props) => {
  const [changeCurrency, setChangeCurrency] = useState({
    to: "",
    from: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setChangeCurrency({
      ...changeCurrency,
      to: e.target.value,
      from: e.target.value,
    });

    console.log(e.target.value);
  };

  const amount = props.price.forEach((prices) => {
    console.log(prices.price);
  });

  console.log(amount);

  var myHeaders = new Headers();
  myHeaders.append("apikey", "CcqkvcIb1iisj0nIxTscjUrRHQ7lqkIK");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    "https://api.apilayer.com/exchangerates_data/convert?to={GPB}&from={EUR}&amount={25}",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  const symbols = props.data;

  return (
    <DataContext.Provider value={{ changeCurrency, setChangeCurrency }}>
      <div className="form-container">
        <form>
          <div className="d-md-flex justify-content-between">
            <div className="mb-3 mx-auto">
              <label htmlFor="from" className="form-label">
                Current Currency
              </label>
              <select className="form-select" id="from" onChange={handleChange}>
                {symbols.map((symbol) => (
                  <>
                    <option>$ Dollars</option>
                    <option key={symbol.id} value={symbol.symbol}>
                      {symbol.symbol} {symbol.name}
                    </option>
                  </>
                ))}
              </select>
            </div>
            <div className="mb-3 mx-auto">
              <label htmlFor="to" className="form-label">
                Selected Currency
              </label>
              <select className="form-select" id="to" onChange={handleChange}>
                {symbols.map((symbol) => (
                  <option key={symbol.id} value={symbol.name}>
                    {symbol.symbol} {symbol.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="text-center">
              <button type="submit" onClick={props.onClick}>
                Change Currency
              </button>
            </div>
          </div>
        </form>
      </div>
    </DataContext.Provider>
  );
};

export default Currency;
