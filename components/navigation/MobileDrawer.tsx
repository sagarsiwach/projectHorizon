import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import TestRideButton from "./TestRideButtonMobile";
import KMLogoMobile from "./KMLogo";
import MobileDrawerNavigationItem from "./MobileDrawerNavigationItem";
import { getNavigation } from "@/sanity/sanity-utils";

export default async function MobileDrawer() {
  const navigation = await getNavigation();

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild className="cursor-pointer md:hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 8V4H8V8H4Z" />
              <path d="M10 8V4H14V8H10Z" />
              <path d="M16 8V4H20V8H16Z" />
              <path d="M4 14V10H8V14H4Z" />
              <path d="M10 14V10H14V14H10Z" />
              <path d="M16 14V10H20V14H16Z" />
              <path d="M4 20V16H8V20H4Z" />
              <path d="M10 20V16H14V20H10Z" />
              <path d="M16 20V16H20V20H16Z" />
            </svg>
          </div>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Content className="bg-white">
            <motion.div
              className="absolute h-dvh w-dvh inset-0 bg-white flex flex-col space-y-2 px-4"
              layout
              transition={{ ease: "easeOut", duration: 0.3 }}
              initial={{ opacity: 0, scale: 0.95 }} // initial state
              animate={{ opacity: 1, scale: 1 }} // animate to
              exit={{ opacity: 0, scale: 0.95 }} // Exit state
            >
              <div className="flex flex-col  w-full">
                <div className="py-4 flex flex-row justify-between items-center relative">
                  <KMLogoMobile />
                  <Dialog.Close>
                    <svg
                      className="fill-neutral-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-6 w-6 "
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
                    </svg>
                  </Dialog.Close>
                  <TestRideButton />
                </div>
                <div>
                  <hr className="w-full border-1 border-neutral-300" />
                </div>
              </div>
              <MobileDrawerNavigationItem defaultAccValue={navigation[0].id} />
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
