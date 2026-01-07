import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animationProperties } from "../../../../Constants";
import { useLocation, useNavigate } from "react-router-dom";
import { HiHashtag } from "react-icons/hi2";
import { SiSolidity } from "react-icons/si";
import FloatingTechStack from "./FloatingTechStack";

function EtherbeastDetail(props) {
  const { state } = useLocation();
  const navigate = useNavigate();

  const etherbeast = state?.etherbeast;

  useEffect(() => {
    if (!etherbeast) {
      navigate("/portofolio");
    }
  }, [etherbeast, navigate]);

  if (!etherbeast) {
    return null;
  }

  return (
    <div className="flex w-full items-stretch gap-x-8 pb-36">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationProperties.container}
        className="flex flex-col max-w-3/4  "
      >
        <motion.h1
          variants={animationProperties.item}
          className="text-primaryPurple text-xl font-semibold "
        >
          {etherbeast.id}
        </motion.h1>

        <motion.h1
          variants={animationProperties.item}
          className="font-bold text-6xl text-slate-800 mt-4"
        >
          {etherbeast.title}
        </motion.h1>
        <motion.p
          variants={animationProperties.item}
          className="mt-4 text-md text-slate-600 max-w-2xl mb-24"
        >
          <div className="flex flex-wrap gap-x-4 max-w-3/4 space-y-1">
            {etherbeast.hashtags.map((hashtag, index) => (
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
            EtherBeast Gacha is a secure, gas-optimized gacha mechanism for
            minting randomized EtherBeast NFTs. Unlike traditional gacha systems
            that lock funds after randomness is requested, EtherBeast &nbsp;
            <span className="text-amber-600 font-medium">
              burns tokens immediately upon initiation
            </span>
            &nbsp; — ensuring users pay only once and eliminating the risk of
            failed VRF fulfillments or griefing attacks.
          </p>
          <br />
          <p className="text-slate-700 leading-relaxed">
            The entire flow follows the &nbsp;
            <span className="text-primaryPurple font-medium">
              Checks-Effects-Interactions (CEI)
            </span>
            &nbsp; pattern:
          </p>

          <ul className="space-y-2 my-4">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">✅</span>
              <span>
                <span className="font-semibold text-slate-800">Checks</span>:
                Validates balance and gacha state
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">✅</span>
              <span>
                <span className="font-semibold text-slate-800">Effects</span>:
                Burns tokens and updates user state before external calls
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">✅</span>
              <span>
                <span className="font-semibold text-slate-800">
                  Interactions
                </span>
                : Requests Chainlink VRF randomness last
              </span>
            </li>
          </ul>

          <br />
          <p className="text-slate-700 leading-relaxed italic">
            Built with Foundry, thoroughly tested with invariant and fuzz tests,
            and designed to be audit-ready from day one.
          </p>
        </div>

        <h2 class="text-3xl font-bold text-slate-900 my-8">
          📃 Smart Contracts
        </h2>

        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
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
                  <h3 class="text-xl font-semibold text-slate-900 flex max-w-7/8 items-center ">
                    ERC20 Utility Token (ETB)
                  </h3>

                  <span class="flex items-center gap-x-2 text-lg font-base text-slate-600 max-w-7/8  mt-1">
                    <SiSolidity />
                    EtherbeastToken.sol
                  </span>
                </td>
                <td>
                  <ul class="mt-3 space-y-2 text-slate-700">
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Buy with
                      <span class="font-medium text-primaryPurple mx-1">
                        ETH{" "}
                      </span>
                      using
                      <span class="font-medium text-amber-600 mx-1">
                        Chainlink price feeds
                      </span>
                      ($1 per ETB)
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Minimum top-up enforced (1 ETB minimum)
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      <span class="font-medium text-amber-600">
                        Overpayment refunded
                      </span>
                      &nbsp; to caller
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Tokens are&nbsp;
                      <span class="font-medium text-primaryPurple">
                        burned
                      </span>{" "}
                      to perform gacha
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Tokens&nbsp;
                      <span class="font-medium text-red-500">
                        can't be exchanged back to ETH
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th>2</th>
                <td>
                  <h3 class="text-xl font-bold text-slate-900 flex items-center">
                    Gacha System
                  </h3>
                  <span class="flex items-center gap-x-2 text-lg font-base text-slate-600 max-w-7/8  mt-1">
                    <SiSolidity />
                    EtherbeastGatcha.sol
                  </span>
                </td>
                <td>
                  {" "}
                  <ul class="mt-3 space-y-2 text-slate-700">
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Uses&nbsp;
                      <span class="font-medium text-amber-600">
                        Chainlink VRF v2.5
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      <span class="font-medium text-amber-600">
                        Burn-to-summon
                      </span>
                      &nbsp;model
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      <span class="font-medium text-primaryPurple">
                        State-locked execution
                      </span>
                      &nbsp;:
                      <span class="text-slate-800">
                        &nbsp;Idle → Rolling → Fulfilled
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Probability-based rarity distribution
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th>3</th>
                <td>
                  <h3 class="text-xl font-bold text-slate-900 flex items-center">
                    ERC721 NFTs
                  </h3>
                  <span class="flex items-center gap-x-2 text-lg font-base text-slate-600 max-w-7/8  mt-1">
                    <SiSolidity />
                    EtherbeastNFT.sol
                  </span>
                </td>
                <td>
                  {" "}
                  <ul class="mt-3 space-y-2 text-slate-700">
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Minted&nbsp;
                      <span class="font-medium text-amber-600">
                        only by the Gacha contract
                      </span>
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Predefined beast catalog
                    </li>
                    <li className="flex items-center">
                      <span class="w-1.5 h-1.5 bg-slate-800 rounded-full mr-2"></span>
                      Deterministic attributes &nbsp; + &nbsp;
                      <span class="font-medium text-amber-600">
                        {" "}
                        random rarity
                      </span>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
      <div className="w-1/4">
        <FloatingTechStack />
      </div>
    </div>
  );
}

export default EtherbeastDetail;
