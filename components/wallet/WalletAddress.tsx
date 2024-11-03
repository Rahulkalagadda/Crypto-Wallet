"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface WalletAddressProps {
  address: string;
}

export function WalletAddress({ address }: WalletAddressProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <Card className="p-6 space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">Wallet Address</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className={cn(
              "transition-colors",
              copied && "bg-green-500 text-white hover:bg-green-600"
            )}
          >
            {copied ? (
              <>
                <CheckCircle2 className="mr-2 h-4 w-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </>
            )}
          </Button>
        </div>
        <div className="p-4 bg-muted rounded-lg break-all font-mono text-sm">
          {address}
        </div>
      </div>
    </Card>
  );
}