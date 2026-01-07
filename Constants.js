export const portofolios = {
  etherbeast: {
    id: "etherbeast-gatcha-protocol",
    title: "The EtherBeast Gatcha",
    shortDescription:
      "Etherbeast is a token-gated NFT minting system build on Ethereum that uses on-chain randomness to generate verifiable collectible assets. It combines an ERC20 token, provable randomness via Chainlink VRF, and a burn-to-summon mechanic to mint ERC721 NFTs with verifiable rarity.",
    image: "https://via.placeholder.com/300",
    link: "https://etherbeast.yabestheo.dev/",
    github: "https://github.com/yabestheodorus/etherbeast-gatcha-protocol",
    githubFrontend: "https://github.com/yabestheodorus/etherbeast-web3-reactjs",
    hashtags: [
      "React",
      "Solidity",
      "Gatcha",
      "Blockchain",
      "ChainlinkVRF",
      "TailwindCSS",
      "NFT",
      "ERC20",
    ],
  },
};

export const animationProperties = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // delay between each child
        delayChildren: 0.1, // optional: wait 0.3s before starting
      },
    },
  },

  item: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 600, damping: 20 },
    },
  },

  fade: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 600, damping: 20 },
    },
  },
};
