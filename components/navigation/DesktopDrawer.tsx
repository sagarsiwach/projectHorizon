import React from "react";
import { Button } from "../ui/button";
import navigationHeader from "./navigationData.json"; // Import the JSON data
import * as Dialog from "@radix-ui/react-dialog";
import KMLogoMobile from "./KMLogo";
import MobileDrawerNavigationItem from "./MobileDrawerNavigationItem";
export default function DesktopDrawer({}) {
  return (
    <div className="md:flex flex-row space-x-2 hidden">
      <Button className="inline-flex items-center rounded-[4px] bg-white hover:bg-flamingo-600 active:bg-flamingo-700 cursor-pointer px-[8px] py-[4px] text-white fill-white">
        <span className="uppercase font-mono text-sm font-semibold">
          Test Ride
        </span>
        <svg
          className="h-4 w-4 fill-flamingo-500 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
        >
          <path d="M3.2 9L2.5 8.3L7.3 3.5H3V2.5H9V8.5H8V4.2L3.2 9Z" />*
        </svg>
      </Button>
      <Button className="bg-flamingo-500 font-mono uppercase text-base rounded-[2px] px-3 py-0">
        Book Now
      </Button>
      <Dialog.Root>
        <Dialog.Trigger>
          <div className="cursor-pointer">
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
          <Dialog.Overlay className=" fixed inset-0 bg-white/50 backdrop-blur-[4px]" />
          <Dialog.Content className="fixed right-0 top-0 w-[640px] h-dvh bg-white p-6 shadow-lg">
            <div className="py-4 flex flex-row justify-between items-center relative">
              <KMLogoMobile />
              <Dialog.Close>
                <svg
                  className="fill-neutral-500h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" />
                </svg>
              </Dialog.Close>
            </div>
            <MobileDrawerNavigationItem defaultValue={navigationHeader[0].id} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
