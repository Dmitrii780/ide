import React from "react";
import "./Terminal.css";
function Terminal({ output }) {
  return (
    <div className="terminal">
      <div className="terminal-header">Terminal</div>
      <div className="terminal-body">
        {output.map((line, index) => (
          <div key={index} className="terminal-line">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terminal;
