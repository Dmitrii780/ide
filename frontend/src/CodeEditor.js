import React from "react";
import { useCode } from "./CodeContext";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-golang";
import "ace-builds/src-noconflict/theme-monokai";

function CodeEditor() {
  const { code, setCode, language } = useCode();

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  let mode;
  switch (language) {
    case "JavaScript":
      mode = "javascript";
      break;
    case "Python":
      mode = "python";
      break;
    case "Golang":
      mode = "golang";
      break;
    default:
      mode = "javascript";
  }

  return (
    <AceEditor
      mode={mode}
      theme="monokai"
      value={code}
      onChange={handleChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
      style={{ height: "100%", width: "100%" }}
    />
  );
}

export default CodeEditor;
