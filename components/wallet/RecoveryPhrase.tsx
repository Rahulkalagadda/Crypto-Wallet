"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Copy, KeyRound, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface RecoveryPhraseProps {
  mnemonic: string;
}

export function RecoveryPhrase({ mnemonic }: RecoveryPhraseProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(mnemonic);
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
          <h3 className="font-semibold flex items-center">
            <KeyRound className="mr-2 h-4 w-4" />
            Recovery Phrase
          </h3>
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
          {mnemonic}
        </div>
        <p className="text-sm text-muted-foreground">
          Save these words in a secure location. You'll need them to recover your account.
        </p>
      </div>
    </Card>
  );
}