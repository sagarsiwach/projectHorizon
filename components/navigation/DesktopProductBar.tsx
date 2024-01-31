"use client";
import React from "react";
import navigationHeader from "./navigationData.json"; // Import the JSON data
import { Button } from "../ui/button";

export default function DesktopProductBar() {
  console.log(navigationHeader);
  return (
    <ul className="hidden md:flex flex-row space-x-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {navigationHeader[0].subNavigation.map(({ id, name, link }) => (
        <Button
          key={id}
          variant="ghost"
          className="text-neutral-700 text-base font-medium hover:bg-flamingo-100 hover:text-neutral-700 px-3 py-1"
        >
          {name}
        </Button>
      ))}
    </ul>
  );
}
