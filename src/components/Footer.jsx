import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-12 text-sm text-gray-500 z-20 max-w-7xl mx-auto">
      <div className="mx-auto  grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Me */}
        <div>
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
        <div>
          <h3 className="text-[17px] font-medium text-slate-500 mb-2">Work</h3>
          <ul className="space-y-1.5 text-[17px] font-medium text-slate-800">
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
                Smart Contracts
              </a>
            </li>
            <li>
              <a href="#dapps" className="hover:text-primaryPurple transition">
                DApps
              </a>
            </li>
            <li>
              <a
                href="#tech-stack"
                className="hover:text-primaryPurple transition"
              >
                Tech Stack
              </a>
            </li>
            <li>
              <a href="#cv" className="hover:text-primaryPurple transition">
                CV
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primaryPurple transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-[17px] font-medium text-slate-500 mb-2">
            Connect
          </h3>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primaryPurple transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primaryPurple transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-primaryPurple transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 mt-10 pt-7 pb-6 text-sm text-gray-500 z-20">
        <div className="mx-auto  flex items-center justify-between">
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
