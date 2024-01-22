// CodeEditor.jsx
import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

const CodeEditor = ({ onCodeChange }) => {
  const [code, setCode] = useState("");

  const handleChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
    onCodeChange(newCode);
  };

  return (
    <Box height="100%">
      <TextField
        label="Write your code here"
        multiline
        rows={10}
        fullWidth
        variant="outlined"
        value={code}
        onChange={handleChange}
        style={{ marginBottom: "16px" }}
      />
    </Box>
  );
};

export default CodeEditor;
