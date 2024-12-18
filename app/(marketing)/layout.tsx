import type { Metadata } from "next";
import "../globals.css";
import { NavBar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { WaitlistProvider } from "@/components/waitlist-context";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className={cn("min-h-screen bg-primary")}>
        <WaitlistProvider>
          <NavBar />
          {children}
        </WaitlistProvider>
      </div>
    </main>
  );
}
