import React, { useState } from "react";
import AceEditor from "react-ace";

// Импорт необходимых тем и режимов для языков
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";

function CodeEditor() {
  const [code, setCode] = useState("");

  const handleChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <AceEditor
      mode="javascript"
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
