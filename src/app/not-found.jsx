"use client";

import Link from "next/link";
import { Car } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <Car size={64} className="text-primary opacity-40" />
      <h1 className="text-8xl font-bold text-primary">404</h1>
      <p className="text-xl text-base-content/60">
        Oops! This road leads nowhere.
      </p>
      <Link href="/" className="btn btn-primary btn-lg">
        Back to Home
      </Link>
    </div>
  );
}