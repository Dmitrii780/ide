import React from "react";
import axios from "axios";
import { useCode } from "./CodeContext";

function RunButton() {
  const { code, language, setOutput } = useCode();

  const handleRunClick = async () => {
    try {
      const response = await axios.post("http://193.123.62.94:4535/execute", {
        code,
        language,
      });
      // Убедитесь, что setOutput устанавливает массив
      if (
        typeof response.data === "string" ||
        typeof response.data === "number"
      ) {
        setOutput([response.data.toString()]); // Преобразовать в строку и обернуть в массив
      } else if (response.data.result) {
        setOutput([response.data.result.toString()]); // Преобразовать в строку и обернуть в массив
      } else {
        // Для объектов используем JSON.stringify и оборачиваем в массив
        setOutput([JSON.stringify(response.data)]);
      }
    } catch (error) {
      console.error("Error running code:", error);
      setOutput(["Error running code: " + error.message]); // Обернуть в массив
    }
  };

  return <button onClick={handleRunClick}>Run</button>;
}

export default RunButton;
