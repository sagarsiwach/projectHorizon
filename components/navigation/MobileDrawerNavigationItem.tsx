"use-client";
import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

const MobileDrawerNavigationItem = ({ data }) => {
  console.log(data);
  const variants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <Accordion.Root
      type="single"
      defaultValue={data[0].uid}
      collapsible
      className="flex flex-col space-y-2"
    >
      {console.log(data.subNavigation)}
      {data.map(({ uid, id, name, subNavigation }) => (
        <Accordion.Item
          key={id}
          value={uid}
          className="w-full pt-4 pb-2 px-2 flex-col space-y-4 bg-neutral-100 rounded-[4px] shadow"
        >
          <Accordion.Header>
            <Accordion.Trigger className="flex flex-row items-center justify-between w-full group px-1">
              <p className=" font-mono uppercase font-neutral-700">{name}</p>
              <ChevronDownIcon
                className="transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
            <AnimatePresence>
              <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-col space-y-2 *:h-[160px] *:bg-white *:p-6 *:flex *:flex-row *:text-2xl *:items-center *:tracking-[-0.96px] *:text-neutral-700 *:font-medium *:transition *:rounded-[4px]"
              >
                <motion.p variants={variants}>KM3000</motion.p>
                <motion.p variants={variants}>KM4000</motion.p>
                <motion.p variants={variants}>KM5000</motion.p>
                <motion.p variants={variants}>KM75</motion.p>
              </motion.div>
            </AnimatePresence>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default MobileDrawerNavigationItem;
