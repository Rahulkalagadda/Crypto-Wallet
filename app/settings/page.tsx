"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun, Droplets } from "lucide-react";
import { useTheme } from "next-themes";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);

  const handleFaucet = async () => {
    setIsLoading(true);
    try {
      // Simulate faucet request
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert("Test tokens received successfully!");
    } catch (err) {
      alert("Failed to receive test tokens. Please try again.");
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Appearance</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Label htmlFor="theme-toggle">Dark Mode</Label>
              <Moon className="h-4 w-4" />
            </div>
            <Switch
              id="theme-toggle"
              checked={theme === "dark"}
              onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
            />
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Test Network</h2>
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Get test tokens to experiment with the application's features.
            </p>
            <Button
              onClick={handleFaucet}
              disabled={isLoading}
              className="w-full sm:w-auto"
            >
              <Droplets className="mr-2 h-4 w-4" />
              {isLoading ? "Requesting Tokens..." : "Request Test Tokens"}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}