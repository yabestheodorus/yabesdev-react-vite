import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen relative bg-white text-gray-900 font-fredoka">
      {/* Background grids (behind everything) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-200 bg-ceramic-grid-dashed background-grid--fade-out" />
        <div className="absolute inset-x-0 bottom-0 h-120 bg-ceramic-grid-inversed background-grid--fade-out-inversed" />
      </div>

      {/* Navbar — outside scrollable area */}
      <Navbar />

      {/* Scrollable content area — NOT flex, NOT the root */}
      <div className="flex-1 overflow-y-scroll pt-20  relative z-10">
        <main className="mx-auto w-full max-w-6xl ">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
