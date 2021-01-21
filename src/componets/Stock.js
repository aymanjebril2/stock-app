import React from "react";

const Stock = ({ companyName, symbol, latestPrice, changePercent }) => {
  return (
    <div>
      <p>
        {companyName}:tag{symbol} price :{latestPrice} change:{changePercent}
      </p>
    </div>
  );
};

export default Stock;
