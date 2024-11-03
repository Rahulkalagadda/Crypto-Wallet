"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface Transaction {
  id: string;
  type: "send" | "receive";
  amount: string;
  address: string;
  timestamp: string;
  status: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  isLoading: boolean;
}

export function TransactionList({ transactions, isLoading }: TransactionListProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-full" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((tx) => (
          <TableRow key={tx.id}>
            <TableCell>
              <div className="flex items-center space-x-2">
                {tx.type === "send" ? (
                  <ArrowUpRight className="h-4 w-4 text-red-500" />
                ) : (
                  <ArrowDownLeft className="h-4 w-4 text-green-500" />
                )}
                <span>{tx.type === "send" ? "Sent" : "Received"}</span>
              </div>
            </TableCell>
            <TableCell className={tx.type === "send" ? "text-red-500" : "text-green-500"}>
              {tx.type === "send" ? "-" : "+"}{tx.amount}
            </TableCell>
            <TableCell className="font-mono">{tx.address}</TableCell>
            <TableCell>{new Date(tx.timestamp).toLocaleString()}</TableCell>
            <TableCell>
              <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                {tx.status}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}