"use client";

import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";

interface WalletBalanceProps {
  balance: string;
}

export function WalletBalance({ balance }: WalletBalanceProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
          <Wallet className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Balance</p>
          <h2 className="text-3xl font-bold">{balance} APT</h2>
        </div>
      </div>
    </Card>
  );
}