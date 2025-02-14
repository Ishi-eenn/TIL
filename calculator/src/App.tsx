import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./pages/CalculatorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
