// FloatingTechStack.jsx
import React, { useEffect, useState } from "react";
// React Icons
import {
  SiSolidity,
  SiChainlink,
  SiReact,
  SiVite,
  SiWagmi,
  SiTailwindcss,
  SiOpenzeppelin,
} from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";

// Fallback placeholder for unsupported logos (e.g., "Wagmi", "OpenZeppelin")
const PlaceholderIcon = ({ name }) => (
  <span className="w-4 h-4 flex items-center justify-center bg-slate-200 text-slate-500 rounded-sm text-[10px] font-bold">
    {name.charAt(0)}
  </span>
);

export default function FloatingTechStack() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 75 - 37); // ~38px scroll threshold
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tech stack data with icons
  const techGroups = [
    {
      title: "Smart Contracts",
      items: [
        { name: "Solidity", icon: <SiSolidity className="text-[#363636]" /> },
        {
          name: "Foundry",
          icon: <PlaceholderIcon name={"F"} />,
        },
        { name: "OpenZeppelin", icon: <SiOpenzeppelin name="OZ" /> },
        { name: "Ethereum", icon: <FaEthereum className="text-[#4C4C4C]" /> },
      ],
    },
    {
      title: "Oracles",
      items: [
        {
          name: "Chainlink VRF",
          icon: <SiChainlink className="text-[#375BD2]" />,
        },
        {
          name: "Price Feeds",
          icon: <SiChainlink className="text-[#375BD2]" />,
        },
      ],
    },
    {
      title: "Testing",
      items: [
        {
          name: "Fuzz Tests",
          icon: <TbTestPipe className="text-amber-600" />,
        },
        {
          name: "Invariants",
          icon: <TbTestPipe className="text-amber-600" />,
        },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
        { name: "Wagmi", icon: <SiWagmi /> },
        { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> },
        { name: "Tailwind", icon: <SiTailwindcss name="T" /> },
      ],
    },
  ];

  return (
    <div
      className={`fixed  w-64 z-50 px-5 py-4 transition-all duration-300
        bg-white border border-slate-200 rounded-xl shadow-sm text-lg
        ${isSticky ? "top-37" : "top-75"}`}
    >
      <div className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center">
        <SiSolidity className="mr-2 text-[#363636]" />
        Tech Stack
      </div>

      <div className="mt-3 space-y-3">
        {techGroups.map((group) => (
          <div key={group.title}>
            <div className="text-sm font-semibold text-slate-500">
              {group.title}
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center px-2 py-1 bg-slate-100 text-slate-700 text-sm rounded hover:bg-slate-200 transition"
                >
                  <span className="mr-1.5 flex-shrink-0">{tech.icon}</span>
                  <span className="whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-200">
        <div className="text-sm text-slate-500">
          Security & gas efficiency first.
        </div>
      </div>
    </div>
  );
}
