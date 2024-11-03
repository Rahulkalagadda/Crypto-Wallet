"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import Link from "next/link";

export function RecentTransactions() {
  const transactions = [
    {
      id: "1",
      type: "send",
      amount: "-100.00",
      address: "0x1234...5678",
      timestamp: "2 minutes ago",
    },
    {
      id: "2",
      type: "receive",
      amount: "+50.00",
      address: "0x8765...4321",
      timestamp: "5 minutes ago",
    },
  ];

  return (
    <Card className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
        <Link
          href="/history"
          className="text-sm text-primary hover:underline"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-4 rounded-lg bg-muted"
          >
            <div className="flex items-center space-x-4">
              {tx.type === "send" ? (
                <ArrowUpRight className="h-5 w-5 text-red-500" />
              ) : (
                <ArrowDownLeft className="h-5 w-5 text-green-500" />
              )}
              <div>
                <p className="font-medium">
                  {tx.type === "send" ? "Sent" : "Received"}
                </p>
                <p className="text-sm text-muted-foreground">{tx.address}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={tx.type === "send" ? "text-red-500" : "text-green-500"}>
                {tx.amount}
              </p>
              <p className="text-sm text-muted-foreground">{tx.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}