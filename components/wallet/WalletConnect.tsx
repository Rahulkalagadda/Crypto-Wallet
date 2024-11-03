"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

interface WalletConnectProps {
  isConnected: boolean;
  onConnect: () => Promise<void>;
}

export function WalletConnect({ isConnected, onConnect }: WalletConnectProps) {
  return (
    <Button
      onClick={onConnect}
      disabled={isConnected}
      variant={isConnected ? "outline" : "default"}
    >
      <Wallet className="mr-2 h-4 w-4" />
      {isConnected ? "Connected" : "Connect Wallet"}
    </Button>
  );
}