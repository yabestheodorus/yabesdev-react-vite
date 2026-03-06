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

export default function ZKFloatingTechStack() {
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
        
        { name: "Ethereum", icon: <FaEthereum className="text-[#4C4C4C]" /> },
      ],
    },
    {
      title: "Circuits & Proof Generation",
      items: [
        {
          name: "Noir",
          icon: <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAACUCAMAAADMOLmaAAAAZlBMVEX///8AAADz8/OamppTU1NERER1dXXn5+dZWVnS0tKSkpLZ2dk7OzvExMT6+vokJCRlZWW7u7sQEBBgYGCzs7OioqLf398xMTEqKipvb28XFxd+fn7t7e2Li4utra3KysodHR1LS0sqQw5oAAAFFElEQVR4nO3ca5uiIBQAYNHKO3k3R8vx///Jzc28RRxUQPZZz+fm9IYCR8DRDI1T6GdEjOjkMmbAj4bw9xo/4YkIPCcLclSGfOHdXJbF9+QKr0sasEtTyhSe7DWJ0lyasFh4hd/h55KEsb42lX+TIrysBmpa9itBWFRbko26tCjhDW/LFv4IFnorO8kQqVjhb7g9XylUeOeQr7oJFJ423oSvqAUKV00lH4HvwoQXThkzT5DwmvFKaQgSprwyavpNiNBjLakZIhUi5HUXtmH+sAixbVhNEYJ1QCf84dORu7gzCM1LN8b5wAc7YcML9zdqWFgF/UwGEDshv37ShnkChf0EjlBOrwY6IctQg6swTVzMMPM8R21AaFqjgoXePC8hw4SXGddXvqCGP5xEgDAbP6YHDEK4ZkiHlFEJFmlZDgjd8ePrmUEIlV14+rAJDp74zFsIjDV6gWYBjWIXzkIP6CjpHIgCgGhwFgb056fqA4giYFniwVkIPILOVzzaiOk/quYsLKnjB3EBD5gmM87CO1VoXwlCoPtXnIUOVfggARFUGfAV0rN99mQEtjtv4Zo2dKhpsdT7sP4lCeXehyV1tNE/loAR2JdduePhnSAExkOfsxD4OsKcApW8vOeUHKhVPncjLKAnO7Jrm/m8d4MqxFh2fahfJkCvBj7Pvz4sgW/UcPozZAzApxr7xluYw+vrlWO12xHXcwE1oNZOQ7yFiGVNRLfDJKlZngqf9y13IY/l1yGeT3LchQyXeUGE4JrDciFavtlIyRmLEPJc+3KRCGHO0ENZoxAiRBcuOwFt2EiMEHFrxFKUkNcSon8VJUQPLsDqlVCIEKrB2KKr1IQIN+1+vyNDIoXgMzAcZi5WCNaJUAzLeKKEvxu3wB0kWoiaTbt7A1CcEHnrt37weHFCnBCd1445eLK+I1AILhl/i+kjq0ghipIVRURbE0oTPp8JFg/ddjNLIViI4oX9xcjnGUQLn8244HiVTcghXog8eG+6+zInIvy5BCFCRcjQY7LPCyxPiCLvAbRjVhLXZ2Fhxi7EFGEbl9D80pK6TTzm/BZahkOJyS+7pbSPOuSLNP6FZWrPCwrshkbxrfleQigt38jPVnFPbLONrE7L4ORReUi6cEUcwu1BFsau/S3qtIFyet//ehrhI703OXAjkoX01SHSLvE46KPSx1hTpwVpJ2iL8POwwhZhm9BNrK/Z1gg1n7OwRdbxl2yrhBl9+lgjfIZ7IhUO64Tm92uyQajpD9K0pJKQnFgtIWnjTzWhlsxPaygnbDcoFBfOiQoKtWQy6qgoxJPDBioKtWp8+kpJ4d+9KLWF2mgnX1FhNnQWRYWjI2KqCoelBFWF2rAXoKqwH7b3EOLKdTNoPazqd3zkC+17fL024HrY+5UJ+UKnK68i4GT0e+qTLcSj58ScSqx3Ej5GZ6roX/M+CShZaE5OZEe08wb6PsJZdUo7x4b3ETrTTxaU/ryTcHYQlvaqvRptSHv1Y6f7MJl+knYf7iQ0J+seEe2sQX8SQ64QTy7zifYl7+aWPuuNlkfpRxX79+hlC6u+O9OP6eJmL6GG/Uv7WrIV0guH7L1+s0sFq5smuKXbL4KpWmMPZwlUFfrDf+1QUzh6eVNRYT1kU1Q4KiPVFI4PLSkpNIO4jSZSVthFfVNd2J0lPoSH8BAewkN4CP9ZIXasoAvgkOxuwtGxFfr7DbsJ+/86RF8VOYSH8BAewkN4CP8/4R+4KFrYlMTdEQAAAABJRU5ErkJggg==" className="w-4" />,
        },
        {
          name: "Barretenberg",
          icon: <img src="data:image/png;base64,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" className="w-4" />,
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
