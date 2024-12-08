"use client";
import React, { useState } from "react";
import { Container } from "./container";
import { Logo } from "./logo";
import {
  IconBrandGithub,
  IconBrandGithubFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { Button } from "./button";
import { motion } from "framer-motion";

export const Login = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <Container className="h-screen max-w-lg mx-auto flex flex-col items-center justify-center">
      <Logo />
      <h1 className="text-xl md:text-4xl font-bold my-4">
        Welcome back to LeadTrap
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <button className="flex flex-1 justify-center space-x-2 items-center bg-white px-4 py-3 rounded-md text-black hover:bg-white/80 transition duration-200 shadow-[0px_1px_0px_0px_#00000040_inset]">
          <IconBrandGithubFilled className="h-4 w-4 text-black" />
          <span className="text-sm">Continue with GitHub</span>
        </button>
        <button className="flex flex-1 justify-center space-x-2 items-center bg-white px-4 py-3 rounded-md text-black hover:bg-white/80 transition duration-200 shadow-[0px_1px_0px_0px_#00000040_inset]">
          <IconBrandGoogleFilled className="h-4 w-4 text-black" />
          <span className="text-sm">Continue with Google</span>
        </button>
      </div>

      <div className="h-px bg-neutral-800 w-full my-6" />
      
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isClicked ? "auto" : 0,
            opacity: isClicked ? 1 : 0,
          }}
          className="space-y-4 overflow-hidden"
        >
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </motion.div>
        
        <Button
          type="submit"
          onClick={() => !isClicked && setIsClicked(true)}
          variant="muted"
          className="w-full py-3"
        >
          <span className="text-sm">
            {isClicked ? "Login" : "Continue with Email"}
          </span>
        </Button>
      </form>

      <p className="mt-4 text-sm text-neutral-500">
        Don&apos;t have an account?{" "}
        <a href="/register" className="text-white hover:underline">
          Sign up
        </a>
      </p>
    </Container>
  );
};
