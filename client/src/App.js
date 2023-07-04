import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Landing from "./components/layout/Landing";
import Authentication from "./view/Authentication";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<Authentication authRoute="login" />} />
        <Route
          path="/register"
          element={<Authentication authRoute="register" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
