"use client";

import { SignedIn, UserButton } from "@clerk/clerk-react";
import { SignInButton, SignedOut } from "@clerk/nextjs";
import React from "react";

export default function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
