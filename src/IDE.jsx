// IDE.jsx
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";
import ResultConsole from "./ResultConsole";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const IDE = () => {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");

  const handleCodeChange = (newCode) => {
    setCode(newCode);

    setResult(newCode);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CodeEditor onCodeChange={handleCodeChange} />
        </Grid>
        <Grid item xs={6}>
          <ResultConsole result={result} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default IDE;
