// ResultConsole.jsx

import React, { useState } from "react";
import { TextField } from "@mui/material";

const ResultConsole = ({ result }) => {
  const [dummyValue, setDummyValue] = useState("");

  const handleChange = (event) => {
    setDummyValue(event.target.value);
  };

  return (
    <TextField
      label="Result:"
      multiline
      rows={10}
      fullWidth
      variant="outlined"
      value={result}
      onChange={handleChange}
      style={{ minHeight: "100px" }}
    />
  );
};

export default ResultConsole;
