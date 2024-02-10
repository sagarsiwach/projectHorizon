"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function DesktopProductBar({ data }) {
  return (
    <ul className="hidden md:flex flex-row space-x-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {data[0].subNavigation.map(({ id, name, link }) => (
        <Button
          asChild
          key={id}
          variant="ghost"
          className="text-neutral-700 text-base font-medium hover:text-neutral-950 hover:bg-neutral-200/50 px-3 py-1 tracking-tighter"
        >
          <Link href={link}>{name}</Link>
        </Button>
      ))}
    </ul>
  );
}
