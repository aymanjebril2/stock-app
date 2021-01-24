import React, { useState, useEffect } from "react";
import Header from "./componets/Header";
import FatchData from "./componets/FatchData";
import Input from "./componets/Input";
import Stock from "./componets/Stock";
import TableForMyCompent from "./componets/TableForMyCompent";

const App = () => {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    const randeringData = async () => {
      const faceBook = await FatchData("fb");
      const Apple = await FatchData("aapl");
      const snap = await FatchData("snp");
      const Microsoft = await FatchData("msft");

      setCompany([faceBook, Apple, snap, Microsoft]);
    };

    randeringData();
  }, []);

  return (
    <div>
      <Header />
      <TableForMyCompent />

      {company.map((item, index) => {
        return <Stock {...item} key={index} />;
      })}
      <Input company={company} setCompany={setCompany} />
    </div>
  );
};

export default App;
