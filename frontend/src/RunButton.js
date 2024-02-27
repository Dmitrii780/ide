import React from "react";
import axios from "axios";
import { useCode } from "./CodeContext";

function RunButton() {
  const { code, language, setOutput } = useCode();

  const handleRunClick = async () => {
    try {
      const response = await axios.post("http://193.123.62.94:4535/run", {
        code,
        language,
      });
      setOutput([response.data]);
    } catch (error) {
      console.error("Error running code:", error);
      setOutput(["Error running code: " + error.message]);
    }
  };

  return <button onClick={handleRunClick}>Run</button>;
}

export default RunButton;
