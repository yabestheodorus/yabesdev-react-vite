// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import SmartContracts from "./pages/SmartContracts";
import Dapps from "./pages/Dapps";
import EngineeringApproach from "./pages/EngineeringApproach";
import TechStack from "./pages/TechStack";
import CV from "./pages/CV";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/smart-contracts" element={<SmartContracts />} />
          <Route path="/dapps" element={<Dapps />} />
          <Route
            path="/engineering-approach"
            element={<EngineeringApproach />}
          />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
