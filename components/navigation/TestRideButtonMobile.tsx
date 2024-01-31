import React from "react";
import { Button } from "../ui/button";

const TestRideButtonMobile = () => {
  return (
    <Button className="inline-flex items-center rounded-[4px] bg-flamingo-500 hover:bg-flamingo-600 active:bg-flamingo-700 cursor-pointer px-[8px] py-[4px] text-white fill-white md:hidden">
      <span className="uppercase font-mono text-sm font-semibold">
        Test Ride
      </span>
      <svg
        className="h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
      >
        <path d="M3.2 9L2.5 8.3L7.3 3.5H3V2.5H9V8.5H8V4.2L3.2 9Z" />
      </svg>
    </Button>
  );
};

export default TestRideButtonMobile;
