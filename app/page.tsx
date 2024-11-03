"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { RecoveryPhrase } from "@/components/wallet/RecoveryPhrase";
import { WalletAddress } from "@/components/wallet/WalletAddress";

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [showMnemonic, setShowMnemonic] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [error, setError] = useState("");

  // Demo values - in production, these would be generated securely
  const demoMnemonic = "witch collapse practice feed shame open despair creek road again ice least";
  const demoAddress = "0x1234...5678";

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate login
      await new Promise(resolve => setTimeout(resolve, 1000));
      setWalletAddress(demoAddress);
      setError("");
      router.push("/dashboard");
    } catch (err) {
      setError("Login failed. Please try again.");
    }
    setIsLoading(false);
  };

  const handleSignup = async (email: string, password: string, confirmPassword: string) => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate account creation
      await new Promise(resolve => setTimeout(resolve, 1000));
      setShowMnemonic(true);
      setError("");
      // After showing mnemonic, redirect to dashboard
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } catch (err) {
      setError("Account creation failed. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Welcome to CryptoWallet</h1>
          <p className="text-muted-foreground">Secure your digital assets with ease</p>
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="p-6">
          <Tabs defaultValue="login" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Create Account</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm onLogin={handleLogin} isLoading={isLoading} />
            </TabsContent>

            <TabsContent value="signup">
              <SignupForm onSignup={handleSignup} isLoading={isLoading} />
            </TabsContent>
          </Tabs>
        </Card>

        {showMnemonic && <RecoveryPhrase mnemonic={demoMnemonic} />}
        {walletAddress && <WalletAddress address={walletAddress} />}
      </div>
    </main>
  );
}