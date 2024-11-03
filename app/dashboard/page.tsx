"use client";

import { WalletBalance } from "@/components/wallet/WalletBalance";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { useState } from "react";

export default function Dashboard() {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [balance, setBalance] = useState("0.00");

  const handleWalletConnect = async () => {
    // Simulate wallet connection
    setIsWalletConnected(true);
    setBalance("1000.00");
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <WalletConnect 
          isConnected={isWalletConnected} 
          onConnect={handleWalletConnect} 
        />
      </div>

      {isWalletConnected ? (
        <>
          <WalletBalance balance={balance} />
          <QuickActions />
          <RecentTransactions />
        </>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl text-muted-foreground">
            Connect your wallet to view your dashboard
          </h2>
        </div>
      )}
    </div>
  );
}