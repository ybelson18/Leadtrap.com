"use client";

import { useState } from "react";
import { Button } from "./button";
import { HiArrowRight } from "react-icons/hi2";
import { useWaitlist } from "./waitlist-context";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");
  const { isSubmitted, setIsSubmitted } = useWaitlist();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error("Failed to join waitlist");

      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <p className="text-green-500 text-lg font-medium">You&apos;ve been added to the waitlist!</p>
        <div className="text-sm text-neutral-400">We&apos;ll reach out when it&apos;s your turn.</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md w-full mx-auto">
      <div className="flex-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-neutral-400"
        />
      </div>
      <Button 
        type="submit"
        disabled={status === "loading"}
        className="flex items-center justify-center space-x-2 group"
      >
        <span>{status === "loading" ? "Joining..." : "Join Waitlist"}</span>
        <HiArrowRight className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200" />
      </Button>
      {status === "error" && message && (
        <p className="text-red-500 text-sm mt-2">{message}</p>
      )}
    </form>
  );
};

export default WaitlistForm;
