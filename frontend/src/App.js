import React, { useState } from "react";
import Toolbar from "./Toolbar.js";
import CodeEditor from "./CodeEditor.js";
import Terminal from "./Terminal.js";
import "./App.css";

function App() {
  const [terminalOutput] = useState(["Hello!"]);

  return (
    <div className="App">
      <Toolbar />

      <div className="main-content">
        <div className="code-editor-container">
          <CodeEditor />
        </div>

        <div className="terminal-container">
          <Terminal output={terminalOutput} />
        </div>
      </div>
    </div>
  );
}

export default App;
