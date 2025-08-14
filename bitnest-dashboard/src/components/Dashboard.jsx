import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import WalletConnect from "./WalletConnect";

const WALLET_ADDRESS = "0x0123456789abcdef0123456789abcdef01234567";
const BNB_DECIMALS = 18;

export default function Dashboard() {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    async function fetchBalance() {
      try {
        const provider = new ethers.JsonRpcProvider("https://bsc-dataseed.binance.org/");
        const bal = await provider.getBalance(WALLET_ADDRESS);
        setBalance(ethers.formatUnits(bal, BNB_DECIMALS));
      } catch {
        setBalance("Error");
      }
    }
    fetchBalance();
  }, []);

  return (
    <section className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-800 min-h-[70vh] flex items-center justify-center py-10">
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white/95 rounded-3xl shadow-2xl px-10 py-10 flex flex-col items-center gap-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 tracking-tight mb-2">Bitnest Dashboard</h1>
          <span className="block text-lg text-blue-700 font-semibold mb-2">BNB Smart Chain (BEP20)</span>
          <WalletConnect />
          <div className="mt-8 flex flex-col items-center">
            <div className="mb-1 text-base font-bold text-gray-700">Platform Wallet Balance</div>
            <div className="text-3xl md:text-4xl text-yellow-400 font-bold drop-shadow">
              {balance !== null ? `${balance} BNB` : "Loading..."}
            </div>
          </div>
          <p className="text-gray-500 text-xs text-center mt-6">
            Only the wallet balance is publicly shown.<br />
            All addresses and internal operations are securely hidden.
          </p>
        </div>
      </div>
    </section>
  );
}
