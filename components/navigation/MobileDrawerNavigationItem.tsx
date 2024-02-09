import * as Accordion from "@radix-ui/react-accordion";
import React from "react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getNavigation } from "@/sanity/sanity-utils";

export default async function MobileDrawerNavigationItem({ defaultAccValue }) {
  // const navigation = await getNavigation();
  const variants = {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
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
      defaultValue={defaultAccValue}
      collapsible
      className="flex flex-col space-y-2 overflow-auto"
    >
      {navigation.map(({ uid, id, name, type, link, subNavigation }) => (
        <Accordion.Item
          key={id}
          value={uid}
          className="w-full pt-4 pb-2 px-2 flex-col space-y-4 bg-neutral-100 rounded-[4px] shadow"
        >
          {type === "multiple" ? (
            <>
              <Accordion.Header>
                <Accordion.Trigger className="flex flex-row items-center justify-between w-full group px-1">
                  <p className="font-mono uppercase font-neutral-700">{name}</p>
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
                    className="flex flex-col space-y-2"
                  >
                    {subNavigation.map(({ id, name, type, image, link }) => {
                      if (type === "small") {
                        return (
                          <motion.p
                            key={id}
                            variants={variants}
                            className="text-2xl"
                          >
                            <Link href={link}>{name}</Link>
                          </motion.p>
                        );
                      } else if (type === "large") {
                        return (
                          <motion.p
                            key={id}
                            variants={variants}
                            className="text-2xl tracking-[-0.96px] text-neutral-700 font-medium"
                          >
                            {name}
                          </motion.p>
                        );
                      } else {
                        return (
                          type === "image" && (
                            <motion.div
                              key={id}
                              variants={variants}
                              className="h-[160px] bg-white p-6 flex flex-row text-2xl items-center tracking-[-0.96px] text-neutral-700 font-medium transition rounded-[4px]"
                            >
                              <Link href={link}>{name}</Link>
                            </motion.div>
                          )
                        );
                      }
                    })}
                  </motion.div>
                </AnimatePresence>
              </Accordion.Content>
            </>
          ) : (
            <Accordion.Header className="flex flex-row items-center justify-between w-full group px-1">
              <Link href={link}>
                <p className="font-mono uppercase font-neutral-700">{name}</p>
              </Link>
              <ChevronDownIcon
                className="transition-transform duration-300 ease-in-out -rotate-90"
                aria-hidden
              />
            </Accordion.Header>
          )}
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
