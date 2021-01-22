import React, { useState } from "react";
import FatchData from "./FatchData";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const Input = ({ company, setCompany }) => {
  const classes = useStyles();
  const [search, setsearch] = useState("");
  const handleInput = (e) => {
    setsearch(e.target.value);
  };
  const handleButton = async () => {
    const stock = await FatchData(search);
    setsearch("");
    setCompany([...company, stock]);
  };
  return (
    <div>
      <div>
        <TextField
          id="filled-full-width"
          label="Company Name"
          style={{ width: 500, marginLeft: 25 + "%" }}
          placeholder="search ....."
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange={handleInput}
        />
      </div>
      {/* <input
        type="text"
        value={search}
        placeholder="search"
        onChange={handleInput}
      /> */}
      {/* <button onClick={handleButton}>search</button> */}
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={handleButton}
        style={{ width: 400, marginLeft: 28 + "%" }}
      >
        Search
      </Button>
    </div>
  );
};

export default Input;
