import React, { useState } from "react";
import Header from "./componets/Header";

import Input from "./componets/Input";
import Stock from "./componets/Stock";
import TableForMyCompent from "./componets/TableForMyCompent";

const App = () => {
  const [company, setCompany] = useState([]);

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
