import React from "react";
import "./Toolbar.css";
import LanguageSelector from "./LanguageSelector";

function Toolbar({ onNewFile, onSave, onRun }) {
  return (
    <div className="toolbar">
      <button onClick={onNewFile}>New File</button>
      <button onClick={onSave}>Save</button>
      <button onClick={onRun}>Run</button>
      <LanguageSelector />
      {/*дополнительные кнопки и элементы управления по мере необходимости */}
    </div>
  );
}

export default Toolbar;
