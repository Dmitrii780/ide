// В Terminal.js
import React from "react";
import "./Terminal.css";
import { useCode } from "./CodeContext";

function Terminal() {
  const { output } = useCode();

  return (
    <div className="terminal">
      <div className="terminal-header">Терминал</div>
      <div className="terminal-body">
        {output &&
          output.map((line, index) => (
            <div key={index} className="terminal-line">
              {line}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Terminal;
