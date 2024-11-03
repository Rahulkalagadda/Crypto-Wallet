"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { TransactionList } from "@/components/transactions/TransactionList";
import { TransactionFilters } from "@/components/transactions/TransactionFilters";

export default function History() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching transaction history
    const fetchTransactions = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setTransactions([
        {
          id: "1",
          type: "send",
          amount: "100.00",
          address: "0x1234...5678",
          timestamp: new Date().toISOString(),
          status: "completed"
        },
        {
          id: "2",
          type: "receive",
          amount: "50.00",
          address: "0x8765...4321",
          timestamp: new Date().toISOString(),
          status: "completed"
        }
      ]);
      setIsLoading(false);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Transaction History</h1>

      <Card className="p-6">
        <TransactionFilters />
        <TransactionList transactions={transactions} isLoading={isLoading} />
      </Card>
    </div>
  );
}