"use client";
import React from "react";

import { useSearchBox } from "react-instantsearch-hooks-web";
import { Input } from "@/components/ui/input";
import Hits from "./_components/hit-card";

export default function Home() {
  const { query, refine } = useSearchBox();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-500">
      <Input
        type="search"
        value={query}
        onChange={(e) => refine(e.target.value)}
      />
      <Hits />
    </main>
  );
}
