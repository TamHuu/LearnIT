import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from "./components/layout/Landing";
import Authentication from "./view/Authentication";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./components/layout/Dashboard";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Authentication authRoute="login" />} />
          <Route
            path="/register"
            element={<Authentication authRoute="register" />}
          />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
