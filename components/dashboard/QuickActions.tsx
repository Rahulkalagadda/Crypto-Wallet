"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SendHorizontal, ArrowDownToLine, History, Settings } from "lucide-react";
import Link from "next/link";

export function QuickActions() {
  const actions = [
    {
      icon: SendHorizontal,
      label: "Send",
      href: "/send",
      color: "text-blue-500",
    },
    {
      icon: ArrowDownToLine,
      label: "Receive",
      href: "/receive",
      color: "text-green-500",
    },
    {
      icon: History,
      label: "History",
      href: "/history",
      color: "text-purple-500",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/settings",
      color: "text-gray-500",
    },
  ];

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link href={action.href} key={action.label}>
            <Button
              variant="outline"
              className="w-full h-24 flex flex-col items-center justify-center space-y-2"
            >
              <action.icon className={`h-6 w-6 ${action.color}`} />
              <span>{action.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </Card>
  );
}