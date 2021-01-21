import React from "react";
import axios from "axios";

const FatchData = async (stock) => {
  stock = "aapl";
  const apiKey = "sk_51ce8118f0814f93b261dc21bfea5a81";
  const url = `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${apiKey}`;
  const data = await axios.get(url).then(({ data }) => {
    console.log(data);
    return data;
  });
  return data;
};

export default FatchData;
