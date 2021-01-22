import axios from "axios";

const FatchData = async (stock) => {
  const apiKey = "sk_51ce8118f0814f93b261dc21bfea5a81";
  const url = `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${apiKey}`;
  const data = await axios
    .get(url)
    .then(({ data }) => {
      return data;
    })
    .catch((error) => console.log(error));
  return data;
};

export default FatchData;
