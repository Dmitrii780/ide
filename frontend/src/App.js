import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Toolbar from "./Toolbar.js";
import CodeEditor from "./CodeEditor.js";
import Terminal from "./Terminal.js";
import SignUp from "./SignUp.js";
import "./App.css";
import { AuthProvider, AuthContext } from "./Auth.js";
import { CodeProvider } from "./CodeContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/ide"
            element={
              <ProtectedRoute>
                <CodeProvider>
                  <IDEComponent />
                </CodeProvider>
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate replace to="/signup" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function ProtectedRoute({ children }) {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/signup" />;
  }

  return children;
}

function IDEComponent() {
  return (
    <CodeProvider>
      <div className="App">
        <Toolbar />
        <div className="main-content">
          <div className="code-editor-container">
            <CodeEditor />
          </div>
          <div className="terminal-container">
            <Terminal />
          </div>
        </div>
      </div>
    </CodeProvider>
  );
}

export default App;
