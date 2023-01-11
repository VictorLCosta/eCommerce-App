import { Disclosure, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Icon } from "../Icon";

import type { IconType } from "react-icons/lib";

const variants = {
  basic: "",
  outlined: "border-solid border border-cultured2",
  standard:
    "border-solid border-b border-b-cultured2 border-t-transparent border-x-transparent",
};

export type ExpandableMenuProps = {
  className?: string;
  children: React.ReactNode;
  label: string;
  icon: IconType;
  variant?: keyof typeof variants;
};

export function ExpandableMenu({
  className,
  children,
  label,
  icon,
  variant = "standard",
}: ExpandableMenuProps) {
  const classes = clsx("overflow-hidden", variants[variant], className);

  return (
    <div className={classes}>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between items-center w-full py-3 text-2xl text-onyx font-medium">
              <span>{label}</span>
              <Icon
                icon={icon}
                size="xs"
                className={`${
                  open ? "rotate-180 transform" : ""
                } transition-all`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              enter="transition-all duration-200 ease-in-out"
              enterFrom="max-h-0"
              enterTo="max-h-[12rem] mb-4"
              leave="transition-all duration-200 ease-out"
              leaveFrom="max-h-[12rem] mb-4"
              leaveTo="max-h-0"
            >
              <Disclosure.Panel static as="ul" className="ml-[10px]">
                {children}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
}
