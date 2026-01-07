import { motion } from "framer-motion";

export const codeSnippets = {
  gas: {
    id: "gas",
    filename: "EtherBeastType.sol",
    compact: (
      <>
        <pre data-prefix="3">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">struct</span>{" "}
            EtherBeast {"{"}
          </code>
        </pre>
        <pre data-prefix="4">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint8</span> id;
          </code>
        </pre>
        <pre data-prefix="5">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">EtherBeastRarity</span> rarity;
          </code>
        </pre>
        <pre data-prefix="6">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint16</span> hp;
          </code>
        </pre>
        <pre data-prefix="7">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint16</span> attack;
          </code>
        </pre>
        <pre data-prefix="8">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint16</span> defense;
          </code>
        </pre>
        <pre data-prefix="9">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">EtherBeastElement</span> element;
          </code>
        </pre>
        <pre data-prefix="10">
          <code>&nbsp;&nbsp;{"}"}</code>
        </pre>

        <pre data-prefix="11">
          <code>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-amber-500 ml-1"
            >
              █
            </motion.span>
          </code>
        </pre>
      </>
    ),
    // Expanded version
    expanded: (
      <>
        <pre data-prefix="1">
          <code>
            <span className="text-primaryPurplePurple">
              // EtherBeastTypes.sol
            </span>
          </code>
        </pre>
        <pre data-prefix="2">
          <code>
            <span className="text-amber-500">library</span>{" "}
            <span className="text-primaryPurple">EtherBeastTypes</span> {"{"}
          </code>
        </pre>
        <pre data-prefix="3">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">struct</span>{" "}
            <span className="text-primaryPurple">EtherBeast</span> {"{"}
          </code>
        </pre>
        <pre data-prefix="4">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint8</span> id;
          </code>
        </pre>
        <pre data-prefix="5">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;EtherBeastRarity rarity;</code>
        </pre>
        <pre data-prefix="6">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint16</span> hp;
          </code>
        </pre>
        <pre data-prefix="7">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint16</span> attack;
          </code>
        </pre>
        <pre data-prefix="8">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint16</span> defense;
          </code>
        </pre>
        <pre data-prefix="9">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;EtherBeastElement element;</code>
        </pre>
        <pre data-prefix="10">
          <code>&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="11">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="12">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">enum</span>{" "}
            <span className="text-primaryPurple">EtherBeastRarity</span> {"{"}
          </code>
        </pre>
        <pre data-prefix="13">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;None,{" "}
            <span className="text-slate-400">// 0 = not minted</span>
          </code>
        </pre>
        <pre data-prefix="14">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;Common,</code>
        </pre>
        <pre data-prefix="15">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;Rare,</code>
        </pre>
        <pre data-prefix="16">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;Unique,</code>
        </pre>
        <pre data-prefix="17">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;Legendary</code>
        </pre>
        <pre data-prefix="18">
          <code>&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="19">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="20">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">enum</span>{" "}
            <span className="text-primaryPurple">EtherBeastElement</span> {"{"}
          </code>
        </pre>
        <pre data-prefix="21">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;None,{" "}
            <span className="text-slate-400">// 0 = not minted</span>
          </code>
        </pre>
        <pre data-prefix="22">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;Fire,</code>
        </pre>
        <pre data-prefix="23">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;Ice,</code>
        </pre>
        <pre data-prefix="24">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;Nature,</code>
        </pre>
        <pre data-prefix="25">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;Thunder</code>
        </pre>
        <pre data-prefix="26">
          <code>&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="27">
          <code>{"}"}</code>
        </pre>
      </>
    ),
  },
  customError: {
    id: "customError",
    filename: "EtherBeastToken.sol",
    compact: (
      <>
        <pre data-prefix="1">
          <code>
            <span className="text-primaryPurple">// EtherBeastToken.sol</span>
          </code>
        </pre>
        <pre data-prefix="2">
          <code>
            <span className="text-amber-500">contract</span>{" "}
            <span className="text-primaryPurple">EtherBeastToken</span> is
            ERC20, ERC20Burnable {"{"}
          </code>
        </pre>
        <pre data-prefix="3">
          <code>
            &nbsp;&nbsp;<span className="text-slate-500">/* ERRORS */</span>
          </code>
        </pre>
        <pre data-prefix="4">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">error</span>{" "}
            <span className="text-primaryPurple">EtherBeastToken__...</span>
          </code>
        </pre>
        <pre data-prefix="5">
          <code>
            &nbsp;&nbsp;<span className="text-slate-500">/* STATE */</span>
          </code>
        </pre>
        <pre data-prefix="6">
          <code>
            &nbsp;&nbsp;<span className="text-amber-400">address</span>{" "}
            i_priceFeedAddress;
          </code>
        </pre>
        <pre data-prefix="7">
          <code>
            &nbsp;&nbsp;<span className="text-amber-400">uint256</span>{" "}
            TOKEN_DECIMALS = 1e18;
          </code>
        </pre>
        <pre data-prefix="8">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">function</span>{" "}
            <span className="text-primaryPurple">buyToken</span>(...){" "}
            <span className="text-amber-500">external</span> payable {"{"}
          </code>
        </pre>
        <pre data-prefix="9">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-500">// CEI + refund logic</span>
          </code>
        </pre>
        <pre data-prefix="10">
          <code>&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="11">
          <code>{"}"}</code>
        </pre>

        <pre data-prefix="12">
          <code>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-amber-500 ml-1"
            >
              █
            </motion.span>
          </code>
        </pre>
      </>
    ),
    expanded: (
      <>
        <pre data-prefix="1">
          <code>
            <span className="text-primaryPurple">// EtherBeastToken.sol</span>
          </code>
        </pre>
        <pre data-prefix="2">
          <code>
            <span className="text-amber-500">contract</span>{" "}
            <span className="text-primaryPurple">EtherBeastToken</span> is{" "}
            <span className="text-amber-400">ERC20</span>,{" "}
            <span className="text-amber-400">ERC20Burnable</span> {"{"}
          </code>
        </pre>
        <pre data-prefix="3">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="4">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              /*////////////////////////////////////////////////////////////////////////////
            </span>
          </code>
        </pre>
        <pre data-prefix="5">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> ERRORS</span>
          </code>
        </pre>
        <pre data-prefix="6">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              ////////////////////////////////////////////////////////////////////////////*/
            </span>
          </code>
        </pre>
        <pre data-prefix="7">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="8">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">error</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastToken__ZeroValue
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="9">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">error</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastToken__SendMoreToBuyToken
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="10">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">error</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastToken__InvalidPrice
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="11">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">error</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastToken__TransferFailed
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="12">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">error</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastToken__DirectEthNotAllowed
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="13">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">error</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastToken__BelowMinimumTopUp
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="14">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="15">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              /*////////////////////////////////////////////////////////////////////////////
            </span>
          </code>
        </pre>
        <pre data-prefix="16">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> STATE VARIABLES</span>
          </code>
        </pre>
        <pre data-prefix="17">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              ////////////////////////////////////////////////////////////////////////////*/
            </span>
          </code>
        </pre>
        <pre data-prefix="18">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="19">
          <code>
            &nbsp;&nbsp;<span className="text-amber-400">address</span> private
            immutable <span className="text-slate-800">i_priceFeedAddress</span>
            ;
          </code>
        </pre>
        <pre data-prefix="20">
          <code>
            &nbsp;&nbsp;<span className="text-amber-400">uint256</span> private
            constant <span className="text-slate-800">TOKEN_DECIMALS</span> ={" "}
            <span className="text-slate-800">1e18</span>;
          </code>
        </pre>
        <pre data-prefix="21">
          <code>
            &nbsp;&nbsp;<span className="text-amber-400">uint256</span> private
            constant <span className="text-slate-800">PRECISION</span> ={" "}
            <span className="text-slate-800">1e18</span>;
          </code>
        </pre>
        <pre data-prefix="22">
          <code>
            &nbsp;&nbsp;<span className="text-amber-400">uint256</span> private
            constant{" "}
            <span className="text-slate-800">PRICE_FEED_PRECISION_PADDING</span>{" "}
            = <span className="text-slate-800">1e10</span>;
          </code>
        </pre>
        <pre data-prefix="23">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="24">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              /*////////////////////////////////////////////////////////////////////////////
            </span>
          </code>
        </pre>
        <pre data-prefix="25">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> EVENTS</span>
          </code>
        </pre>
        <pre data-prefix="26">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              ////////////////////////////////////////////////////////////////////////////*/
            </span>
          </code>
        </pre>
        <pre data-prefix="27">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="28">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400">/**</span>
          </code>
        </pre>
        <pre data-prefix="29">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * <span className="text-amber-600">@notice</span> Emitted when a
              user successfully purchases tokens.
            </span>
          </code>
        </pre>
        <pre data-prefix="30">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * <span className="text-amber-600">@param</span> user Address that
              purchased the tokens.
            </span>
          </code>
        </pre>
        <pre data-prefix="31">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * <span className="text-amber-600">@param</span> tokenAmount
              Amount of tokens minted (18 decimals).
            </span>
          </code>
        </pre>
        <pre data-prefix="32">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> */</span>
          </code>
        </pre>
        <pre data-prefix="33">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">event</span>{" "}
            <span className="text-primaryPurple">TokenPurchased</span>(
            <span className="text-amber-400">address</span> indexed{" "}
            <span className="text-slate-800">user</span>,{" "}
            <span className="text-amber-400">uint256</span>{" "}
            <span className="text-slate-800">tokenAmount</span>);
          </code>
        </pre>
        <pre data-prefix="34">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="35">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              /*////////////////////////////////////////////////////////////////////////////
            </span>
          </code>
        </pre>
        <pre data-prefix="36">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400"> PUBLIC / EXTERNAL FUNCTIONS</span>
          </code>
        </pre>
        <pre data-prefix="37">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              ////////////////////////////////////////////////////////////////////////////*/
            </span>
          </code>
        </pre>
        <pre data-prefix="38">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="39">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400">/**</span>
          </code>
        </pre>
        <pre data-prefix="40">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * <span className="text-amber-600">@notice</span> Purchases
              EtherBeast tokens using ETH at a fixed USD price.
            </span>
          </code>
        </pre>
        <pre data-prefix="41">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * <span className="text-amber-600">@dev</span>
            </span>
          </code>
        </pre>
        <pre data-prefix="42">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * - Reverts if insufficient ETH is sent.
            </span>
          </code>
        </pre>
        <pre data-prefix="43">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * - Excess ETH is refunded to the caller.
            </span>
          </code>
        </pre>
        <pre data-prefix="44">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * - Tokens are minted directly to the buyer.
            </span>
          </code>
        </pre>
        <pre data-prefix="45">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> *</span>
          </code>
        </pre>
        <pre data-prefix="46">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * Pricing is calculated at execution time using the latest ETH/USD
              price.
            </span>
          </code>
        </pre>
        <pre data-prefix="47">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * This function does not lock prices between transactions.
            </span>
          </code>
        </pre>
        <pre data-prefix="48">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> *</span>
          </code>
        </pre>
        <pre data-prefix="49">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * <span className="text-amber-600">@param</span> tokenAmount
              Amount of tokens to purchase (18 decimals).
            </span>
          </code>
        </pre>
        <pre data-prefix="50">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> */</span>
          </code>
        </pre>
        <pre data-prefix="51">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">function</span>{" "}
            <span className="text-primaryPurple">buyToken</span>(
            <span className="text-amber-400">uint256</span>{" "}
            <span className="text-slate-800">tokenAmount</span>){" "}
            <span className="text-amber-500">external</span>{" "}
            <span className="text-amber-500">payable</span> {"{"}
          </code>
        </pre>
        <pre data-prefix="52">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint256</span>{" "}
            <span className="text-slate-800">totalPrice</span> ={" "}
            <span className="text-slate-800">getPriceForTokenAmount</span>(
            <span className="text-slate-800">tokenAmount</span>);
          </code>
        </pre>
        <pre data-prefix="53">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="54">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // check if user sends enough eth
            </span>
          </code>
        </pre>
        <pre data-prefix="55">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500">if</span> (
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">value</span> &lt;{" "}
            <span className="text-slate-800">totalPrice</span>) {"{"}
          </code>
        </pre>
        <pre data-prefix="56">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">revert</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastToken__SendMoreToBuyToken
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="57">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="58">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="59">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-800">_mint</span>(
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>,{" "}
            <span className="text-slate-800">tokenAmount</span>);
          </code>
        </pre>
        <pre data-prefix="60">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="61">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500">if</span> (
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">value</span> &gt;{" "}
            <span className="text-slate-800">totalPrice</span>) {"{"}
          </code>
        </pre>
        <pre data-prefix="62">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint256</span>{" "}
            <span className="text-slate-800">refundValue</span> ={" "}
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">value</span> -{" "}
            <span className="text-slate-800">totalPrice</span>;
          </code>
        </pre>
        <pre data-prefix="63">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(
            <span className="text-amber-400">bool</span>{" "}
            <span className="text-slate-800">success</span>,) ={" "}
            <span className="text-amber-400">payable</span>(
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>).
            <span className="text-slate-800">call</span>
            {"{value: refundValue}"}(<span className="text-slate-800">""</span>
            );
          </code>
        </pre>
        <pre data-prefix="64">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="65">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">if</span> (!
            <span className="text-slate-800">success</span>) {"{"}
          </code>
        </pre>
        <pre data-prefix="66">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">revert</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastToken__TransferFailed
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="67">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="68">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="69">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="70">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-800">emit</span>{" "}
            <span className="text-primaryPurple">TokenPurchased</span>(
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>,{" "}
            <span className="text-slate-800">tokenAmount</span>);
          </code>
        </pre>
        <pre data-prefix="71">
          <code>&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="72">
          <code>{"}"}</code>
        </pre>
      </>
    ),
  },

  cei: {
    id: "cei",
    filename: "EtherBeastGatcha.sol",
    compact: (
      <>
        <pre data-prefix="8">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">function</span>{" "}
            <span className="text-primaryPurple">performGatcha</span>(){" "}
            <span className="text-amber-500">external</span> {"{"}
          </code>
        </pre>
        <pre data-prefix="9">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="10">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">// ✅ CEI: Checks</span>
          </code>
        </pre>
        <pre data-prefix="11">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // Ensure user has enough tokens to pay for gacha
            </span>
          </code>
        </pre>
        <pre data-prefix="12">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500">if</span> (
            <span className="text-amber-400">i_token</span>.
            <span className="text-slate-800">balanceOf</span>(
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>) &lt;{" "}
            <span className="text-slate-800">GATCHA_PRICE_IN_TOKEN</span>) {"{"}
          </code>
        </pre>
        <pre data-prefix="13">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">revert</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastGatcha__InsufficientTokenBalance
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="14">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="15">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="16">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // Prevent concurrent gacha requests per user
            </span>
          </code>
        </pre>
        <pre data-prefix="17">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500">if</span> (
            <span className="text-slate-800">checkGatchaState</span>() !={" "}
            <span className="text-slate-800">GatchaState</span>.
            <span className="text-slate-800">Idle</span>) {"{"}
          </code>
        </pre>
        <pre data-prefix="18">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">revert</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastGatcha__GatchaNotIdle
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="19">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="20">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="21">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">// ✅ CEI: Effects</span>
          </code>
        </pre>

        <pre data-prefix="22">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">...</span>
          </code>
        </pre>

        <pre data-prefix="23">
          <code>&nbsp;&nbsp;{"}"}</code>
        </pre>

        <pre data-prefix="24">
          <code>
            &nbsp;&nbsp;
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-amber-500 ml-1"
            >
              █
            </motion.span>
          </code>
        </pre>
      </>
    ),
    // Expanded version
    expanded: (
      <>
        <pre data-prefix="1">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400">/**</span>
          </code>
        </pre>
        <pre data-prefix="2">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> * </span>
            <span className="text-amber-600">@notice</span>
            <span className="text-slate-400">
              {" "}
              Starts a gacha roll by charging tokens and requesting VRF
              randomness.
            </span>
          </code>
        </pre>
        <pre data-prefix="3">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> * </span>
            <span className="text-amber-600">@dev</span>
          </code>
        </pre>
        <pre data-prefix="4">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * - Reverts if the user already has an ongoing gacha.
            </span>
          </code>
        </pre>
        <pre data-prefix="5">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * - Burns tokens immediately to guarantee payment even if VRF is
              delayed.
            </span>
          </code>
        </pre>
        <pre data-prefix="6">
          <code>
            &nbsp;&nbsp;
            <span className="text-slate-400">
              {" "}
              * - Emits {"{GatchaIsRolling}"} with the VRF requestId.
            </span>
          </code>
        </pre>
        <pre data-prefix="7">
          <code>
            &nbsp;&nbsp;<span className="text-slate-400"> */</span>
          </code>
        </pre>
        <pre data-prefix="8">
          <code>
            &nbsp;&nbsp;<span className="text-amber-500">function</span>{" "}
            <span className="text-primaryPurple">performGatcha</span>(){" "}
            <span className="text-amber-500">external</span> {"{"}
          </code>
        </pre>
        <pre data-prefix="9">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="10">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">// ✅ CEI: Checks</span>
          </code>
        </pre>
        <pre data-prefix="11">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // Ensure user has enough tokens to pay for gacha
            </span>
          </code>
        </pre>
        <pre data-prefix="12">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500">if</span> (
            <span className="text-amber-400">i_token</span>.
            <span className="text-slate-800">balanceOf</span>(
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>) &lt;{" "}
            <span className="text-slate-800">GATCHA_PRICE_IN_TOKEN</span>) {"{"}
          </code>
        </pre>
        <pre data-prefix="13">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">revert</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastGatcha__InsufficientTokenBalance
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="14">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="15">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="16">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // Prevent concurrent gacha requests per user
            </span>
          </code>
        </pre>
        <pre data-prefix="17">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500">if</span> (
            <span className="text-slate-800">checkGatchaState</span>() !={" "}
            <span className="text-slate-800">GatchaState</span>.
            <span className="text-slate-800">Idle</span>) {"{"}
          </code>
        </pre>
        <pre data-prefix="18">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">revert</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastGatcha__GatchaNotIdle
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="19">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="20">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="21">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">// ✅ CEI: Effects</span>
          </code>
        </pre>
        <pre data-prefix="22">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // Pull tokens from user into this contract
            </span>
          </code>
        </pre>
        <pre data-prefix="23">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">bool</span>{" "}
            <span className="text-slate-800">success</span> ={" "}
            <span className="text-amber-400">i_token</span>.
            <span className="text-slate-800">transferFrom</span>(
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>,{" "}
            <span className="text-amber-400">address</span>(
            <span className="text-slate-800">this</span>),{" "}
            <span className="text-slate-800">GATCHA_PRICE_IN_TOKEN</span>);
          </code>
        </pre>
        <pre data-prefix="24">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-500">if</span>{" "}
            (!
            <span className="text-slate-800">success</span>) {"{"}
          </code>
        </pre>
        <pre data-prefix="25">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-500">revert</span>{" "}
            <span className="text-primaryPurple">
              EtherBeastGatcha__TransferFailed
            </span>
            ();
          </code>
        </pre>
        <pre data-prefix="26">
          <code>&nbsp;&nbsp;&nbsp;&nbsp;{"}"}</code>
        </pre>
        <pre data-prefix="27">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="28">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // Burn immediately to guarantee payment even if VRF fulfillment
              is delayed or fails
            </span>
          </code>
        </pre>
        <pre data-prefix="29">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">i_token</span>.
            <span className="text-slate-800">burn</span>(
            <span className="text-slate-800">GATCHA_PRICE_IN_TOKEN</span>);
          </code>
        </pre>
        <pre data-prefix="30">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="31">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // Mark user as rolling to block further gacha calls
            </span>
          </code>
        </pre>
        <pre data-prefix="32">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-800">s_userToGatchaState</span>[
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>] ={" "}
            <span className="text-slate-800">GatchaState</span>.
            <span className="text-slate-800">Rolling</span>;
          </code>
        </pre>
        <pre data-prefix="33">
          <code>&nbsp;</code>
        </pre>

        <pre data-prefix="34">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">// ✅ CEI: Interactions</span>
          </code>
        </pre>
        <pre data-prefix="35">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">
              // Request secure randomness from Chainlink VRF
            </span>
          </code>
        </pre>
        <pre data-prefix="36">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">uint256</span>{" "}
            <span className="text-slate-800">requestId</span> ={" "}
            <span className="text-slate-800">_requestRandomWords</span>();
          </code>
        </pre>
        <pre data-prefix="37">
          <code>&nbsp;</code>
        </pre>

        <pre data-prefix="38">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">// Track request ownership</span>
          </code>
        </pre>
        <pre data-prefix="39">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-800">s_userToRequestId</span>[
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>] ={" "}
            <span className="text-slate-800">requestId</span>;
          </code>
        </pre>
        <pre data-prefix="40">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-800">s_requestIdToUser</span>[
            <span className="text-slate-800">requestId</span>] ={" "}
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>;
          </code>
        </pre>
        <pre data-prefix="41">
          <code>&nbsp;</code>
        </pre>
        <pre data-prefix="42">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-slate-400">// emit event</span>
          </code>
        </pre>
        <pre data-prefix="43">
          <code>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-800">emit</span>{" "}
            <span className="text-primaryPurple">GatchaIsRolling</span>(
            <span className="text-slate-800">requestId</span>,{" "}
            <span className="text-amber-400">msg</span>.
            <span className="text-slate-800">sender</span>);
          </code>
        </pre>
        <pre data-prefix="44">
          <code>&nbsp;&nbsp;{"}"}</code>
        </pre>
      </>
    ),
  },
};
