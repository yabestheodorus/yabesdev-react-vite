import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RxDownload } from "react-icons/rx";

function Footer() {
  return (
    <footer className="py-4 text-sm text-gray-500 z-10 max-w-6xl overflow-hidden mx-auto">
      <div className="mx-auto flex flex-col items-center lg:flex-row  lg:items-start gap-8">
        {/* About Me */}
        <div className="lg:grow max-w-xl lg:max-w-full text-center lg:text-start">
          <h3 className="text-[17px] font-medium text-slate-500 mb-2">
            About Me
          </h3>
          <p className="text-gray-600">
            I build production-ready smart contracts and full-stack DApps with
            React, Node.js, and Solidity. My focus is on delivering secure,
            scalable, and user-friendly Web3 solutions.
          </p>
        </div>

        {/* Sitemap */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-[17px] font-medium text-center lg:text-start text-slate-500 mb-2">
            Work
          </h3>
          <ul className="space-y-1.5 flex flex-row lg:flex-col justify-center lg:justify-start  gap-x-4 lg:gap-x-0 text-[17px] font-medium text-slate-800">
            <li>
              <a href="#home" className="hover:text-primaryPurple transition">
                Home
              </a>
            </li>
            <li>
              <a
                href="#smart-contracts"
                className="hover:text-primaryPurple transition"
              >
                Portofolio
              </a>
            </li>
            <li>
              <a href="#dapps" className="hover:text-primaryPurple transition">
                Services
              </a>
            </li>
            <li>
              <a
                href="#tech-stack"
                className="hover:text-primaryPurple transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-1/4">
          <h3 className="text-[17px] font-medium text-center lg:text-start text-slate-500 mb-2">
            This Site
          </h3>
          <ul className="space-y-1.5 flex flex-row lg:flex-col justify-center lg:justify-start  gap-x-4 lg:gap-x-0 text-[17px] font-medium text-slate-800">
            <li>
              <a
                href="/resume.pdf"
                download="Yabes-Theodorus-Resume.pdf"
                className="hover:text-primaryPurple transition flex items-center gap-x-2"
              >
                My Resume
                <RxDownload />
              </a>
            </li>
            <li>
              <a
                href="/credits"
                className="hover:text-primaryPurple transition"
              >
                Credits
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div className="w-full lg:w-1/4">
          <h3 className="text-[17px] font-medium text-center lg:text-start text-slate-500 mb-2 ">
            Connect
          </h3>
          <div className="space-x-4 mb-4 flex flex-row  justify-center lg:justify-start gap-x-0">
            <a
              href="https://github.com/yabestheodorus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primaryPurple transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://instagram.com/yabestheodorus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primaryPurple transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yabestheodorus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primaryPurple transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-300 mt-10 pt-7.5 pb-6 text-sm text-gray-500 z-20">
        <div className="mx-auto  flex flex-col lg:flex-row items-center justify-between">
          <span className="font-medium text-slate-800">
            © {new Date().getFullYear()} Yabes Theodorus
          </span>
          <span>
            <span>Smart Contracts & Frontend, polished with 💎</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
