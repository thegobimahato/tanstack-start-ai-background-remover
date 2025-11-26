"use client";

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return <Hero />;
}

export default function Hero() {
  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center">
      <div className="w-full max-w-7xl px-6">
        <div className="flex flex-col items-center gap-10">
          {/* Pill panel */}
          <motion.section
            className="relative w-full"
            initial={{ y: -18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            aria-labelledby="hero-title"
          >
            <div className="bg-card/80 border-border relative mx-auto max-w-3xl rounded-[36px] border px-8 py-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm sm:px-10 sm:py-12">
              <motion.h1
                id="hero-title"
                className="text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
                initial={{ y: -6, opacity: 0, scale: 0.998 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.06 }}
              >
                Remove image backgrounds instantly.
              </motion.h1>

              <motion.p
                className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg"
                initial={{ y: -4, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.12 }}
              >
                Fast, reliable background removal for product photos, portraits
                and marketing.
                <br />
                <span className="text-foreground text-xl">
                  one click, professional quality.
                </span>
              </motion.p>

              <motion.div
                className="mt-8 flex items-center justify-center gap-3"
                initial={{ y: 6, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, delay: 0.18 }}
              >
                <Button asChild>
                  <Link to="/projects">Get Started Free</Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
