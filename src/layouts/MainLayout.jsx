import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-fredoka ">
      {/* Top Navigation */}
      <Navbar />

      <div className="absolute z-10 inset-x-0 top-0 h-180 bg-ceramic-grid-dashed background-grid--fade-out" />
      {/* Main Content */}
      <main className="flex-1 mx-auto w-full z-20 ">
        <Outlet />
      </main>

      {/* Footer (optional, minimal by design) */}

      <div className="absolute z-10 inset-x-0 bottom-0 h-120 bg-ceramic-grid-inversed background-grid--fade-out-inversed" />
      <Footer />
    </div>
  );
}

export default MainLayout;
