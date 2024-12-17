import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Component/Layout/Homepage.tsx";
import '../src/variables.css';
import '../src/index.css';
import ThankyouPage from "./Component/ThankyouPage.tsx";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Default route (Homepage) */}
          <Route path="/" element={<Homepage />} />

          {/* Route for ThankYou page */}
          <Route path="/thankyou" element={<ThankyouPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;