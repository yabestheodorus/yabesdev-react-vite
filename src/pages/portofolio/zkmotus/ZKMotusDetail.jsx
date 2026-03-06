import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animationProperties } from "../../../../Constants";
import { useLocation, useNavigate } from "react-router-dom";
import { HiHashtag } from "react-icons/hi2";
import { SiSolidity } from "react-icons/si";
import ZKFloatingTechStack from "./ZKFloatingTechStack";

function ZKMotusDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const zkmotus = state?.zkmotus;

  useEffect(() => {
    if (!zkmotus) {
      navigate("/portofolio");
    }
  }, [zkmotus, navigate]);

  if (!zkmotus) {
    return null;
  }

  return (
    <div className="flex w-full items-stretch gap-x-8 pb-36">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationProperties.container}
        className="flex flex-col max-w-3/4"
      >
        <motion.h1
          variants={animationProperties.item}
          className="text-primaryPurple text-xl font-semibold"
        >
          {zkmotus.id}
        </motion.h1>

        <motion.h1
          variants={animationProperties.item}
          className="font-bold text-6xl text-slate-800 mt-4"
        >
          {zkmotus.title}
        </motion.h1>

        <motion.p
          variants={animationProperties.item}
          className="mt-4 text-md text-slate-600 max-w-2xl mb-24"
        >
          <div className="flex flex-wrap gap-x-4 max-w-3/4 space-y-1">
            {zkmotus.hashtags.map((hashtag, index) => (
              <div
                key={index}
                className="flex items-center text-md text-slate-400"
              >
                <HiHashtag size={15} />
                {hashtag}
              </div>
            ))}
          </div>
        </motion.p>

        <div className="max-w-4xl prose prose-slate text-lg">
          <p className="text-slate-700 leading-relaxed">
            ZKMotus is a privacy-preserving authenticity verification system
            designed to prove product legitimacy without exposing sensitive
            merchant data. Instead of publishing raw serial numbers or order
            information on-chain, ZKMotus stores
            <span className="text-amber-600 font-medium">
              {" "}cryptographic commitments
            </span>
            {" "}that act as mathematical fingerprints of each item.
          </p>

          <br />

          <p className="text-slate-700 leading-relaxed">
            The architecture combines
            <span className="text-primaryPurple font-medium"> off-chain order management</span>,
            {" "}zero-knowledge proof generation, and
            {" "}on-chain verification to guarantee authenticity while preserving
            merchant privacy.
          </p>

          <ul className="space-y-2 my-4">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">✅</span>
              <span>
                <span className="font-semibold text-slate-800">Private serial verification</span>
                : Serial numbers remain secret while authenticity is provable
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-amber-500 mr-2">✅</span>
              <span>
                <span className="font-semibold text-slate-800">Commitment-based design</span>
                : Item authenticity stored as hash commitments
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-amber-500 mr-2">✅</span>
              <span>
                <span className="font-semibold text-slate-800">Zero-knowledge proofs</span>
                : Users prove authenticity without revealing secrets
              </span>
            </li>
          </ul>

          <br />

          <p className="text-slate-700 leading-relaxed italic">
            Built with Solidity smart contracts and a hybrid off-chain proof
            generation pipeline, ZKMotus ensures verifiable product authenticity
            while protecting merchant inventory data and customer privacy.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 my-8">
          📃 Smart Contracts
        </h2>

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Smart Contract</th>
                <th>Descriptions</th>
              </tr>
            </thead>

<tbody>
  <tr>
    <th>1</th>
    <td>
      <h3 className="text-xl font-semibold text-slate-900 flex items-center">
        Order Payment Layer
      </h3>

      <span className="flex items-center gap-x-2 text-lg text-slate-600 mt-1">
        <SiSolidity />
        ZKMotusPayment.sol
      </span>
    </td>

    <td>
      <ul className="mt-3 space-y-2 text-slate-700">
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Merchant creates orders with
          <span className="font-medium text-primaryPurple mx-1">
            hashed serial numbers
          </span>
        </li>

        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Buyers pay using
          <span className="font-medium text-amber-600 mx-1">
            commitment-based ownership
          </span>
        </li>

        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Prevents duplicate payments and
          <span className="font-medium text-primaryPurple mx-1">
            double ownership
          </span>
        </li>

        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Merchant can withdraw accumulated ETH
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <th>2</th>

    <td>
      <h3 className="text-xl font-bold text-slate-900 flex items-center">
        Authenticity Registry
      </h3>

      <span className="flex items-center gap-x-2 text-lg text-slate-600 mt-1">
        <SiSolidity />
        ZKMotusRegistry.sol
      </span>
    </td>

    <td>
      <ul className="mt-3 space-y-2 text-slate-700">
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Confirms items were
          <span className="font-medium text-primaryPurple mx-1">
            paid in ZKMotusPayment
          </span>
        </li>

        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Registers
          <span className="font-medium text-amber-600 mx-1">
            authenticity commitments
          </span>
          per serial number
        </li>

        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Prevents duplicate registration of items
        </li>

        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Uses
          <span className="font-medium text-primaryPurple mx-1">
            nonce protection
          </span>
          to prevent replay attacks
        </li>
      </ul>
    </td>
  </tr>

  <tr>
    <th>3</th>

    <td>
      <h3 className="text-xl font-bold text-slate-900 flex items-center">
        ZK Proof Verifier
      </h3>

      <span className="flex items-center gap-x-2 text-lg text-slate-600 mt-1">
        <SiSolidity />
        ZKMotusVerifier.sol
      </span>
    </td>

    <td>
      <ul className="mt-3 space-y-2 text-slate-700">
        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Verifies
          <span className="font-medium text-amber-600 mx-1">
            zero-knowledge proofs
          </span>
          generated off-chain
        </li>

        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Confirms knowledge of
          <span className="font-medium text-primaryPurple mx-1">
            secret + serial
          </span>
          without revealing them
        </li>

        <li className="flex items-center">
          <span className="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
          Used by
          <span className="font-medium text-primaryPurple mx-1">
            ZKMotusRegistry
          </span>
          for authenticity verification
        </li>
      </ul>
    </td>
  </tr>
</tbody>
          </table>
        </div>
      </motion.div>

      <div className="w-1/4">
        <ZKFloatingTechStack />
      </div>
    </div>
  );
}

export default ZKMotusDetail;