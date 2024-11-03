"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SendHorizontal, AlertCircle } from "lucide-react";

export default function Send() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    try {
      // Simulate transaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSuccess(true);
      setAddress("");
      setAmount("");
    } catch (err) {
      setError("Transaction failed. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Send Tokens</h1>

      <Card className="max-w-md mx-auto p-6">
        <form onSubmit={handleSend} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Recipient Address</Label>
            <Input
              id="address"
              placeholder="Enter recipient's wallet address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              step="0.000001"
              min="0"
              placeholder="Enter amount to send"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {success && (
            <Alert className="bg-green-500 text-white">
              <AlertDescription>Transaction sent successfully!</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              "Processing..."
            ) : (
              <>
                <SendHorizontal className="mr-2 h-4 w-4" /> Send Tokens
              </>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
}