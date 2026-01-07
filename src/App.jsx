// Layout
import MainLayout from "./layouts/MainLayout";

// Pages
import EngineeringApproach from "./pages/EngineeringApproach";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Experience from "./pages/Experience";
import Services from "./pages/Services";
import Portofolio from "./pages/portofolio/Portofolio";
import EtherbeastDetail from "./pages/portofolio/etherbeast/EtherbeastDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/portofolio" element={<Portofolio />} />
          <Route path="/etherbeast" element={<EtherbeastDetail />} />
          <Route
            path="/engineering-approach"
            element={<EngineeringApproach />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
