"use client";
import { AnimatePresence, motion } from "framer-motion";
import MobileDrawer from "./MobileDrawer";
import TestRideButton from "./TestRideButtonMobile";
import BottomFooterBar from "./BottomWaBar";
import DesktopProductBar from "./DesktopProductBar";
import DesktopDrawer from "./DesktopDrawer";
import KMLogo from "./KMLogo";

export default function Navigation({ navigation }) {
  return (
    <AnimatePresence>
      <div>
        <div className="flex flex-col px-4 w-dvw">
          <div className="flex flex-row justify-between w-full items-center relative  py-4">
            <KMLogo />
            <MobileDrawer data={navigation} />
            <DesktopProductBar data={navigation} />
            <DesktopDrawer data={navigation} />
            <TestRideButton />
          </div>
          <div>
            <hr
              className="w-full border-1 border-neutral-300
      "
            />
          </div>
        </div>
      </div>
      <BottomFooterBar />
    </AnimatePresence>
  );
}
