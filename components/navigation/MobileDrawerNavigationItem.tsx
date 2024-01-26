import * as Accordion from "@radix-ui/react-accordion";
import React from "react";

const MobileDrawerNavigationItem = () => {
  return (
    <Accordion.Root
      type="single"
      defaultValue="item-1"
      collapsible
      className="flex flex-col space-y-2"
    >
      <Accordion.Item
        value="item-1"
        className="w-full p-4 flex-col space-y-4 bg-neutral-100 rounded-[4px] shadow"
      >
        <Accordion.Trigger className="flex flex-row items-center justify-between w-full">
          <p className=" font-mono uppercase font-neutral-700">Models</p>
          <svg
            className="h-4 w-4 fill-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M8 10.2497L4 6.24974L4.93333 5.31641L8 8.38307L11.0667 5.31641L12 6.24974L8 10.2497Z" />
          </svg>
        </Accordion.Trigger>
        <Accordion.Content className="text-3xl tracking-[-1px] font-medium text-neutral-700 flex flex-col space-y-4">
          <hr className="border-[0.5px] border-neutral-400 w-full" />
          <div className="flex flex-col space-y-2">
            <p>KM3000</p>
            <p>KM4000</p>
            <p>KM5000</p>
            <p>KM75</p>
            <p>Project Hermes</p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item
        value="item-2"
        className="w-full p-4 flex-col space-y-4 bg-neutral-100 rounded-[4px] shadow"
      >
        <Accordion.Trigger className="flex flex-row items-center justify-between w-full">
          <p className=" font-mono uppercase font-neutral-700">Technology</p>
          <svg
            className="h-4 w-4 fill-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
          >
            <path d="M8 10.2497L4 6.24974L4.93333 5.31641L8 8.38307L11.0667 5.31641L12 6.24974L8 10.2497Z" />
          </svg>
        </Accordion.Trigger>
        <Accordion.Content className="text-3xl tracking-[-1px] font-medium text-neutral-700 flex flex-col space-y-4">
          <hr className="border-[0.5px] border-neutral-400 w-full" />
          <div className="flex flex-col space-y-2">
            <p>KM3000</p>
            <p>KM4000</p>
            <p>KM5000</p>
            <p>KM75</p>
            <p>Project Hermes</p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default MobileDrawerNavigationItem;
