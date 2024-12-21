import Homepage from "./pages/homepage";
import PrivacyPolicy from "./pages/privacyPolicy";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/*" element={<Homepage />} />
    </Routes>
  );
}

export default App;
