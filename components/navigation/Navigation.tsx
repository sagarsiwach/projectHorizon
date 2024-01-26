"use client";
import { AnimatePresence, motion } from "framer-motion";
import MobileDrawer from "./MobileDrawer";
import TestRideButton from "./TestRideButton";
import KMLogoMobile from "./KMLogoMobile";

export default function Navigation() {
  return (
    <AnimatePresence>
      <div>
        <div className="flex flex-col px-4 w-dvw">
          <div className="flex flex-row justify-between w-full items-center relative  py-4">
            <KMLogoMobile />
            <MobileDrawer />
            <TestRideButton />
          </div>
          <div>
            {" "}
            <hr
              className="w-full border-1 border-neutral-300
      "
            />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
}